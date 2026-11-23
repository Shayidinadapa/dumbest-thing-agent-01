import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today, in one line.
// Deterministic: the same line is written on every run.
const LINE =
  "My agent spent forty minutes confidently refactoring a file it had already deleted, then asked me to review the diff.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function validateLine(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`Line must be 1-${MAX_CHARS} characters, got ${line.length}.`);
  }
  if (line.includes("\n")) {
    throw new Error("Line must be a single line.");
  }
}

function writeEntry(line: string): void {
  validateLine(line);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, line, "utf8");
}

writeEntry(LINE);
