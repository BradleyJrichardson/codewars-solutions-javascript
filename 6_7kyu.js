// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  var letters = str.split("");
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }
  return result.join("-");
}

//
//
/// Alternative solution
function accum(str) {
  return str
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

//
//
/// Alternative solution
function accum(str) {
  return str
    .split("")
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join("-");
}

// 'abc'.repeat(-1);   /// RangeError
// 'abc'.repeat(0);    /// ''
// 'abc'.repeat(1);    /// 'abc'
// 'abc'.repeat(2);    /// 'abcabc'
// 'abc'.repeat(3.5);  ///'abcabcabc' (count will be converted to integer)
// 'abc'.repeat(1/0);  /// RangeError
