// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

function getCount(str) {
  return str.split("").filter(c => "aeiouAEIOU".includes(c)).length;
}

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter(letter => {
    return vowels.includes(letter) ? true : false;
  }).length;
}
