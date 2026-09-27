// npm run eval — routing tests against OpenCode. Uses model calls; run deliberately.
//
// Usage: node scripts/eval.mjs [--case <id>[,<id>]] [--model provider/model] [--timeout 240]
// (npm run eval runs every case with defaults; PowerShell strips the -- npm needs to forward flags.)
// Each case stops at its first routing action (see tests/routing.yaml), so runs stay short.
import { spawn, execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import YAML from 'yaml'
import { ROOT, readText } from './lib.mjs'

const args = process.argv.slice(2)
const opt = (name) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}
const only = opt('case')?.split(',')
const model = opt('model')
const timeoutSec = Number(opt('timeout') ?? 240)

const { cases = [] } = YAML.parse(readText('tests/routing.yaml')) ?? {}
const selected = only ? cases.filter((c) => only.includes(c.id)) : cases
if (!selected.length) {
  console.error(only ? `no cases match ${only.join(', ')}` : 'no cases in tests/routing.yaml')
  process.exit(1)
}

const killTree = (child) => {
  try {
    if (process.platform === 'win32') execSync(`taskkill /pid ${child.pid} /T /F`, { stdio: 'ignore' })
    else child.kill('SIGKILL')
  } catch {}
}

/** Map an OpenCode JSON event to a routing action, or null if it is not one. */
function routingAction(event) {
  if (event.type !== 'tool_use') return null
  const tool = event.part?.tool
  const input = event.part?.state?.input ?? {}
  if (tool === 'skill' && input.name) return `skill:${input.name}`
  if (tool === 'task') return `task:${input.subagent_type ?? input.agent ?? input.subagent ?? '?'}`
  if (tool === 'read') {
    const p = String(input.filePath ?? input.path ?? '').replace(/\\/g, '/')
    const m = /(?:^|\/)((?:commands|agents)\/[^/]+\.md)$/.exec(p)
    if (m) return `read:${m[1]}`
  }
  return null
}

function runCase(c) {
  return new Promise((resolve) => {
    const cmdArgs = ['run', '--agent', c.agent, '--format', 'json', '--title', `eval:${c.id}`]
    if (model) cmdArgs.push('--model', model)
    cmdArgs.push(c.prompt)
    const child = spawn(bin.command, cmdArgs, { cwd: ROOT, shell: bin.shell, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] })
    let buffer = ''
    let settled = false
    const trail = []
    const finish = (action, note) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      killTree(child)
      resolve({ action, note, trail })
    }
    const timer = setTimeout(() => finish('timeout', `no routing action within ${timeoutSec}s`), timeoutSec * 1000)
    child.stdout.on('data', (chunk) => {
      buffer += chunk
      let nl
      while ((nl = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, nl).trim()
        buffer = buffer.slice(nl + 1)
        if (!line.startsWith('{')) continue
        let event
        try {
          event = JSON.parse(line)
        } catch {
          continue
        }
        if (event.type === 'tool_use') trail.push(event.part?.tool)
        const action = routingAction(event)
        if (action) return finish(action)
        if (event.type === 'step_finish' && event.part?.reason === 'stop') return finish('none')
      }
    })
    child.on('exit', () => finish('none', 'run ended'))
    child.on('error', (e) => finish('error', e.message))
  })
}

/** Resolve the OpenCode binary. On Windows, prefer the real .exe so prompts need no shell quoting. */
function resolveBinary() {
  if (process.platform !== 'win32') return { command: 'opencode', shell: false }
  try {
    const exe = path.join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'opencode-ai', 'bin', 'opencode.exe')
    if (fs.existsSync(exe)) return { command: exe, shell: false }
  } catch {}
  return { command: 'opencode.exe', shell: false }
}
const bin = resolveBinary()

let passed = 0
for (const c of selected) {
  const started = Date.now()
  process.stdout.write(`${c.id.padEnd(26)} `)
  const { action, note, trail } = await runCase(c)
  const ok = c.expect.includes(action)
  if (ok) passed++
  const secs = ((Date.now() - started) / 1000).toFixed(0)
  const extra = [note, trail.length ? `tools: ${trail.join(' > ')}` : ''].filter(Boolean).join('; ')
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${action.padEnd(34)} ${secs.padStart(3)}s${ok ? '' : `  expected ${c.expect.join(' | ')}`}${extra ? `  (${extra})` : ''}`)
}
console.log(`\n${passed}/${selected.length} routing cases passed.`)
process.exit(passed === selected.length ? 0 : 1)
