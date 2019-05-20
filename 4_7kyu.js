// our task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// My solution
const findSum = n => {
  let array = Array.apply(null, { length: n + 1 }).map(Number.call, Number);
  let filteredArray = array.filter(num => {
    return num % 3 === 0 || num % 5 === 0;
  });
  return filteredArray.reduce((a, b) => a + b);
};
console.log(findSum(10));

// Alternative solutions
const findSum = n => {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }
  return result;
};
