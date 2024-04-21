import { Bench } from 'tinybench';

const bench = new Bench({
  time: 500,
  warmupTime: 1000,
  warmupIterations: 100,
});

const nums = Array.from({ length: 1_000_000 }).map((_, index) => index);

const forClassic = () => {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  return sum;
};

const forWhile = () => {
  let sum = 0;
  let index = nums.length;
  while (index--) {
    sum += nums[index];
  }
  return sum;
};

const forOf = () => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

const forEach = () => {
  let sum = 0;
  nums.forEach((value) => {
    sum += value;
  });
  return sum;
};

const forReduce = () => {
  return nums.reduce((sum, num) => sum + num);
};

bench
  .add('For Classic', forClassic)
  .add('For While', forWhile)
  .add('For Of', forOf)
  .add('For Each', forEach)
  .add('For Reduce', forReduce);

// await bench.warmup();
await bench.run();

console.table(bench.table());