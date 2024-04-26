import { run, bench, group } from 'mitata';
import { treeToPaths_Imperative, treeToPaths_Functional, treeToPaths_Original } from "./tree-to-paths.mjs";

const input = { a: 1, b: [2, { c: 3, cc: { dd: 1 } }], d: { e: 4, f: [5, 6], h: { i: 7, j: 8 } } };

group({ name: 'TreeToPaths' }, () => {
  bench("Imperative", () => treeToPaths_Imperative(input));
  bench("Functional", () => treeToPaths_Functional(input));
  bench("Original", () => treeToPaths_Original(input));
});

await run();
