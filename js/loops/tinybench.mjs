import { Bench } from "tinybench";
import { forClassic, forEach, forOf, forReduce, forWhile } from "./funcs.mjs";

const bench = new Bench({
  time: 500,
  warmupTime: 1000,
  warmupIterations: 100,
});

bench
  .add("For Classic", forClassic)
  .add("For While", forWhile)
  .add("For Of", forOf)
  .add("For Each", forEach)
  .add("For Reduce", forReduce);

await bench.warmup();
await bench.run();

console.table(bench.table());
