// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  return (Number(a) + Number(b)).toString();
}

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

function sumStrings(a, b) {
  let num1 = a
    .replace(/^0*/g, "")
    .split("")
    .reverse();
  let num2 = b
    .replace(/^0*/g, "")
    .split("")
    .reverse();
  let spillOver = 0;
  let counter = 0;
  let sum = "";

  while (counter < num1.length || counter < num2.length) {
    let tempSum =
      (parseInt(num1[counter]) || 0) +
      (parseInt(num2[counter]) || 0) +
      spillOver;
    if (tempSum > 9) {
      sum = `${tempSum - 10}` + sum;
      spillOver = 1;
    } else {
      sum = `${tempSum}` + sum;
      spillOver = 0;
    }
    counter++;
  }
  return spillOver ? `1${sum}` : sum;
}

// sumStrings('712569312664357328695151392', '8100824045303269669937') === expected
sumStrings("00103", "08567");
