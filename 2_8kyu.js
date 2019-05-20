// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => {
  let result = x.reduce((a, b) => a * b);
  return result;
};
console.log(grow([1, 2, 3, 4]));
