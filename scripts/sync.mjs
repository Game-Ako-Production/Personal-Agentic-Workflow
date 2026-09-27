// npm run sync — regenerate every managed platform file and registry.md from the canonical sources.
import fs from 'node:fs'
import path from 'node:path'
import { build, findStale } from './build.mjs'
import { abs, exists, loadModel, normalize, readAny } from './lib.mjs'
import { validate } from './validate.mjs'

const model = loadModel()
const { errors, warnings } = validate(model)
for (const w of warnings) console.warn(`warning: ${w}`)
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`)
  console.error(`\nsync aborted: fix ${errors.length} error(s) in the canonical sources first.`)
  process.exit(1)
}

const outputs = build(model)
const same = (a, b) => (typeof a === 'string' ? normalize(String(b)) === a : Buffer.isBuffer(b) && a.equals(b))

let written = 0
for (const [file, content] of outputs) {
  if (exists(file) && same(content, readAny(file))) continue
  fs.mkdirSync(path.dirname(abs(file)), { recursive: true })
  fs.writeFileSync(abs(file), content)
  console.log(`wrote   ${file}`)
  written++
}

const { stale, unmanaged } = findStale(outputs)
for (const file of stale) {
  fs.rmSync(abs(file))
  console.log(`removed ${file}`)
  // Remove now-empty parent folders (for example a deleted mirrored skill).
  let dir = path.dirname(abs(file))
  while (dir.startsWith(abs('.claude/skills')) || dir.startsWith(abs('.agents/skills'))) {
    if (dir === abs('.claude/skills') || dir === abs('.agents/skills') || fs.readdirSync(dir).length) break
    fs.rmdirSync(dir)
    dir = path.dirname(dir)
  }
}
for (const file of unmanaged) console.warn(`warning: ${file} is in a generated folder but not produced by sync; move it into a canonical source or delete it`)

console.log(`\nsync complete: ${written} written, ${stale.length} removed, ${outputs.size - written} unchanged.`)
