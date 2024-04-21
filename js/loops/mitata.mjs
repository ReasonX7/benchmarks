import { run, bench, group } from 'mitata';
import { forEach, forWhile, forClassic, forOf, forReduce } from "./funcs.mjs";

group({ name: 'Loops' }, () => {
  bench('For Classic', forClassic);
  bench('For While', forWhile);
  bench('For Of', forOf);
  bench('For Each', forEach);
  bench('For Reduce', forReduce);
});

await run();
