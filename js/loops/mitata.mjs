import { bench, group, run } from "mitata";
import { forClassic, forEach, forOf, forReduce, forWhile } from "./funcs.mjs";

group({ name: "Loops" }, () => {
  bench("For Classic", forClassic);
  bench("For While", forWhile);
  bench("For Of", forOf);
  bench("For Each", forEach);
  bench("For Reduce", forReduce);
});

await run();
