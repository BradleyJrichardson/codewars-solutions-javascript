// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/// solution
const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

/// alternative solution
// using just a great plain old fashioned for loop
const reverse = str => {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

/// alternative solution 2
// using a slightly more funky loop
const reverse = str => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

/// alternative solution 3
const reverse = str => {
  return str.split("").reduce((rev, char) => char + rev, "");
};

// reduce takes too arguments that being an arrow function and a starting initial value, for our example that will be an empty string object that will be passed back into the reduce method at place "rev". therefore this will work as we will be incrementing rev from first to last element in the string creating a reversed string.

module.exports = reverse;
