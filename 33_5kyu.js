// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (str1, str2) => {
  // every letter in str1 is included in str2
  let counter = 0;
  const iterations = str1.length;
  for (var i = 0; i < iterations; i++) {
    if (str2.includes(str1[i])) {
      counter++;
    }
  }
  console.log(counter);
  if (counter === str2.length) {
    return true;
  } else {
    return false;
  }
};

console.log(scramble("aabbcamaomsccdd", "commas"));
