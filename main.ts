// Entry: one sentence, 181 characters, pitching a startup that sounds
// absurd until the business logic lands — sheep as the lawn crew for
// solar farms (real practice: solar grazing, paid per acre, wool on top).
const SENTENCE =
  "We lease sheep to solar farms to mow the grass under the panels, because mowers spark near high voltage and sheep don't — and the farms pay us per acre while we still sell the wool.";

// Gate: 1-200 characters, a single sentence, no trailing newline in the file.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry is ${SENTENCE.length} characters, must be 1-200`);
}

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");

// Stdout may carry the sentence plus a newline; the file stays exact.
process.stdout.write(SENTENCE + "\n");
