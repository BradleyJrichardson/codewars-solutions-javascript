// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
// Don't mutate the inputs.

const inArray = (array1, array2) => {
  a = [];
  let chars = array2.join().replace(/,/g, "");
  array1.forEach(word => {
    if (chars.includes(word)) {
      a.push(word);
    }
  });
  return a.sort();
};

function inArray(array1, array2) {
  return array1
    .filter(function(word) {
      return array2.join(" ").includes(word);
    })
    .sort();
}

const inArray = (arr1, arr2) =>
  arr1.filter(substr => arr2.some(str => str.includes(substr))).sort();

const inArray = (arr1, arr2) => {
  const s2 = arr2.join("#");
  return arr1.filter(item => s2.includes(item)).sort();
};
