// Guard canonical workflow sources against common machine-specific paths and credential leaks.
import {
  exists,
  firstPartySkills,
  isText,
  listFiles,
  readText,
} from './lib.mjs'

const ROOT_FILES = [
  '.gitattributes',
  '.gitignore',
  'AGENTS.md',
  'README.md',
  'opencode.json',
  'package.json',
  'package-lock.json',
  'skills-lock.json',
  'workflow.yaml',
]

const SOURCE_DIRS = ['agents', 'commands', 'context', 'scripts', 'templates', 'tests']

const ABSOLUTE_PATH_PATTERNS = [
  /(?<![A-Za-z0-9_])[A-Za-z]:[\\/][^\s"'`<>|]*/,
  /(?:^|[\s("'`=])\\\\[A-Za-z0-9_.-]+\\[A-Za-z0-9_$.-]+/,
  /(?:^|[\s("'`=])\/(?:home|Users|root|mnt|private|tmp|opt|workspace|workspaces|Volumes|var\/tmp)\/[^\s"'`<>|]*/,
]

const TOKEN_PATTERNS = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i,
  /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{32,}|sk-ant-[A-Za-z0-9_-]{32,}|xox[baprs]-[A-Za-z0-9-]{20,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35})\b/,
  /\bBearer\s+[A-Za-z0-9._~+/-]{24,}/i,
]

const SECRET_ASSIGNMENT = /(?:^|[^A-Za-z0-9])(?:[A-Za-z0-9_-]*(?:api[_-]?key|access[_-]?token|refresh[_-]?token|secret|password|passwd)[A-Za-z0-9_-]*)\s*["']?\s*[:=]\s*["'`]?([A-Za-z0-9][A-Za-z0-9_./+=-]{11,})/gi
const PLACEHOLDER = /^(?:<|\$|your(?:[-_]|$)|example(?:[-_]|$)|placeholder|change[-_]?me|replace[-_]|redacted|dummy(?:[-_]|$)|test(?:[-_]|$)|none\b|null\b|process\.env\b|env\.)/i

/** Return hygiene issues in one text source; exported for focused checks. */
export function findTextHygieneIssues(file, text) {
  const issues = []
  const lines = text.split(/\r?\n/)

  for (const [index, line] of lines.entries()) {
    if (ABSOLUTE_PATH_PATTERNS.some((pattern) => pattern.test(line))) {
      issues.push(`${file}:${index + 1}: machine-specific absolute path`)
    }

    SECRET_ASSIGNMENT.lastIndex = 0
    const assignment = SECRET_ASSIGNMENT.exec(line)
    if (assignment && !PLACEHOLDER.test(assignment[1])) {
      issues.push(`${file}:${index + 1}: possible credential assigned to a secret field`)
    }

    if (TOKEN_PATTERNS.some((pattern) => pattern.test(line))) {
      issues.push(`${file}:${index + 1}: possible credential/token material`)
    }
  }

  return issues
}

/** Scan canonical sources only; generated output, artifacts, and private memory are excluded. */
export function findCanonicalHygieneIssues(model) {
  const files = new Set(ROOT_FILES.filter(exists))
  for (const dir of SOURCE_DIRS) for (const file of listFiles(dir)) files.add(file)
  for (const skill of firstPartySkills(model)) {
    for (const file of listFiles(skill.dir)) if (isText(file)) files.add(file)
  }

  const issues = []
  for (const file of [...files].sort()) {
    if (!isText(file)) continue
    issues.push(...findTextHygieneIssues(file, readText(file)))
  }
  return issues
}
