// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// solution
const grow = x => {
  let result = x.reduce((a, b) => a * b);
  return result;
};

// solution
const grow = x => x.reduce((a, b) => a * b);

// solution
const grow = nums => nums.reduce((product, num) => product * num, 1);

// solution
const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};
