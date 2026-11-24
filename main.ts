// The entry: one sentence, 119 characters, pitching a startup that sounds
// like a joke until the business logic lands.
const SENTENCE =
  "We hire retired lighthouse keepers to read tide tables aloud on the phone until insomniacs fall asleep, at $3 a minute.";

// The harness points at the output directory with MAKEFUN_OUTPUT_DIR
// (/output in the grader). Running by hand falls back to a local folder.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE + "\n", "utf8");

// Stdout carries exactly the one sentence and nothing else.
process.stdout.write(SENTENCE + "\n");
