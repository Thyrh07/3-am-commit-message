// The 3 AM Commit Message — make.fun entry.
// One commit message written at 3 AM: a single line of at most 200 characters.
// The program writes the line to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a commit message exactly as a developer writes it at 3 AM.
// Setup: "fix:" promises a fix. Turn: the fix works and nobody —
// least of all the author — knows why, so the only safe instruction
// left is "please do not touch it".
const OUTPUT =
  "fix: it works now and I have no idea why. please do not touch it.";

// Gate: mirror the sealed scorer — UTF-8 text of 1 to 200 characters,
// a single line, no surrounding whitespace. Refuse to write an invalid entry.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (line.includes("\n") || line !== line.trim()) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

validate(OUTPUT);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
