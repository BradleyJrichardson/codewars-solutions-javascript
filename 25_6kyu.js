// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = str => {
  if (str === "") {
    return str;
  }
  if (str.includes("-")) {
    return str
      .toLowerCase()
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  } else if (str.includes("_")) {
    return str
      .toLowerCase()
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));

// -------------------------------------------------------------------
function toCamelCase(str) {
  var strArray;
  if (str.indexOf("-") !== -1) {
    //if delineated by -
    strArray = str.split("-");
  } else {
    strArray = str.split("_"); //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i = 1, len = strArray.length; i < len; i++) {
    var capitalized =
      strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
}
