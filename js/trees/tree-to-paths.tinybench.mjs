import { Bench } from "tinybench";
import {
  treeToPaths_Functional,
  treeToPaths_Imperative,
  treeToPaths_Original,
} from "./tree-to-paths.mjs";

const input = { a: 1, b: [2, { c: 3, cc: { dd: 1 } }], d: { e: 4, f: [5, 6], h: { i: 7, j: 8 } } };

const config = {
  time: 500,
  warmupTime: 1000,
  warmupIterations: 100,
};

const bench = new Bench(config)
  .add("Imperative", () => treeToPaths_Imperative(input))
  .add("Functional", () => treeToPaths_Functional(input))
  .add("Original", () => treeToPaths_Original(input));

await bench.warmup();
await bench.run();

console.log("==================================================");
console.log("TreeToPaths");
console.log("==================================================");

console.table(bench.table());
