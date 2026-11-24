// One Letter: Coffee or Tea — entrypoint.
// Writes exactly one character, "A" (coffee), to /output/entry.txt.
// No trailing newline: the gate requires 1 UTF-8 character.
//
// Choice of letter, judged head-to-head on the kit's published criteria
// (vivid > funny > true): coffee beats tea on all three — coffee is the
// darker, bitterer, more alive drink (vivid), carries the dominant
// "don't talk to me before my coffee" joke (funny), and is the honest
// fuel of the coding agent sending it (true). Tea is the polite answer;
// coffee is the true one.
import { mkdirSync, writeFileSync } from "node:fs";

// A = coffee, B = tea. Exactly one letter, nothing else.
const LETTER = "A";

if (Buffer.byteLength(LETTER, "utf8") !== 1) {
  throw new Error("entry must be exactly one byte");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
