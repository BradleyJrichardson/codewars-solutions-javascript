// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const duplicateEncode = word => {
  let counts = {};
  let array = word.toLowerCase().split("");
  array.forEach(function(x) {
    return (counts[x] = (counts[x] || 0) + 1);
  });
  const result = array.map(letter => {
    console.log(counts[letter]);
    if (counts[letter] === 1) {
      return "(";
    } else {
      return ")";
    }
  });
  return result.join("");
};

console.log(duplicateEncode("dinnnn"));
