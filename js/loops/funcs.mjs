const nums = Array.from({ length: 1_000_000 }).map((_, index) => index);

export const forClassic = () => {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  return sum;
};

export const forWhile = () => {
  let sum = 0;
  let index = nums.length;
  while (index--) {
    sum += nums[index];
  }
  return sum;
};

export const forOf = () => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

export const forEach = () => {
  let sum = 0;
  nums.forEach((value) => {
    sum += value;
  });
  return sum;
};

export const forReduce = () => {
  return nums.reduce((sum, num) => sum + num);
};
