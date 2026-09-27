// npm run check — validate canonical sources and confirm generated files are up to date. Never writes.
import { build, findStale } from './build.mjs'
import { exists, loadModel, normalize, readAny } from './lib.mjs'
import { validate } from './validate.mjs'

const model = loadModel()
const { errors, warnings } = validate(model)

if (!errors.length) {
  const outputs = build(model)
  for (const [file, content] of outputs) {
    if (!exists(file)) {
      errors.push(`${file}: missing generated file (run \`npm run sync\`)`)
      continue
    }
    const disk = readAny(file)
    const same = typeof content === 'string' ? normalize(String(disk)) === content : Buffer.isBuffer(disk) && content.equals(disk)
    if (!same) errors.push(`${file}: out of date or edited by hand (run \`npm run sync\`)`)
  }
  const { stale, unmanaged } = findStale(outputs)
  for (const file of stale) errors.push(`${file}: stale generated file (run \`npm run sync\`)`)
  for (const file of unmanaged) warnings.push(`${file}: in a generated folder but not produced by sync`)
}

for (const w of warnings) console.warn(`warning: ${w}`)
for (const e of errors) console.error(`error: ${e}`)

const counts = `${model.agents.size} agents, ${model.commands.size} commands, ${model.skills.size} skills`
if (errors.length) {
  console.error(`\ncheck failed: ${errors.length} error(s), ${warnings.length} warning(s) (${counts}).`)
  process.exit(1)
}
console.log(`check passed: ${counts}, ${warnings.length} warning(s).`)
