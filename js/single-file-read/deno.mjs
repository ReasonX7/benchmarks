import { dirname, fromFileUrl, join } from "https://deno.land/std@0.188.0/path/mod.ts";
import { Bench } from "tinybench";

const bench = new Bench({ time: 500 });

const dir = dirname(fromFileUrl(import.meta.url));
const fileLocation = join(dir, "assets/1000-words.txt");

console.log(fileLocation);

const singleFileReadToBuffer = async () => {
  return await Deno.readFile(fileLocation);
};

const singleFileReadToString = async () => {
  return await Deno.readTextFile(fileLocation);
};

bench
  .add("Deno - Single File Read To Buffer", singleFileReadToBuffer)
  .add("Deno - Single File Read To String", singleFileReadToString);

await bench.warmup();
await bench.run();

console.table(bench.table());
