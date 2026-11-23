import { mkdirSync, writeFileSync } from "node:fs";
const line = "My superpower is knowing which sock the dryer will eat — always five seconds after I've put the other one on.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log("Wrote " + [...line].length + " characters to /output/entry.txt");
