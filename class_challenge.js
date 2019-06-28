// // Atomic Blonde Number:
// a number is an atomic blonde number if the sum and product of its digits are equal.
// For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3).
// Write a program to check if a number is an atomic blonde number or not.
// For example:
// Input: 1412
// Output: true
// Input: 247
// Output: false

const atomicBlonde = num => {
  let sum = String(num)
    .split("")
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  let product = String(num)
    .split("")
    .map(Number)
    .reduce((a, b) => {
      return a * b;
    }, 1);

  return sum === product ? true : false;
};

console.log(atomicBlonde(123));
