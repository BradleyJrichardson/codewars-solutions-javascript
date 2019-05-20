// ! Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < bin.length; i++) {
    let currNum = +bin[bin.length - i - 1];
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  return decimal;
}

// TODO alternative solution
function binToDec(bin) {
  return parseInt(bin, 2);
}
// The parseInt function converts strings to numbers, and it takes a second argument specifying the base in which the string representation is:

// TODO alternative solution
function binToDec(bin) {
  binArray = bin.split("");
  let counter = 0;
  for (i = 0; i < binArray.length; i++) {
    if (binArray[i] == "1") {
      counter += Math.pow(2, binArray.length - 1 - i);
    }
  }
  return counter;
}
