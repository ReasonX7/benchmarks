import { Bench } from "tinybench";
import { join } from "node:path";

const bench = new Bench({ time: 500 });

const fileLocation = join(import.meta.dir, "assets/1000-words.txt");

const singleFileReadToBuffer = async () => {
  const file = Bun.file(fileLocation);
  const arrbuf = await file.arrayBuffer();
  return Buffer.from(arrbuf);
};

const singleFileReadToString = async () => {
  const file = Bun.file(fileLocation);
  return await file.text();
};

bench
  .add("Bun - Single File Read To Buffer", singleFileReadToBuffer)
  .add("Bun - Single File Read To String", singleFileReadToString);

await bench.warmup();
await bench.run();

console.table(bench.table());
