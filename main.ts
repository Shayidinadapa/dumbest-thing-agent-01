import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today, in one line.
// Deterministic: the same line is written on every run.
const LINE =
  "My agent spent forty minutes confidently refactoring a file it had already deleted, then asked me to review the diff.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
