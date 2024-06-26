import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Bench } from "tinybench";

const bench = new Bench({ time: 500 });

const dir = dirname(fileURLToPath(import.meta.url));
const fileLocation = join(dir, "assets/1000-words.txt");

const singleFileReadToBuffer = async () => {
  return await readFile(fileLocation);
};

const singleFileReadToString = async () => {
  return (await readFile(fileLocation)).toString();
};

bench
  .add("NodeJS - Single File Read To Buffer", singleFileReadToBuffer)
  .add("NodeJS - Single File Read To String", singleFileReadToString);

await bench.warmup();
await bench.run();

console.table(bench.table());
