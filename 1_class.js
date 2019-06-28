// Create a function called buildStairway.
// This function will take a height and a type of stair as input, and will return the stairway
// If the height is zero or less than zero, return an empty array

Core: "use strict";

const height = 3;
const type = "#";

const height1 = 5;
const type1 = "*";

const height2 = 0;
const type2 = "$";

const height3 = -2;
const type3 = "A";

// Write function here

const buildStairway = (height, type) => {
  const result = [];
  if (height < 1) {
    return result;
  }
  for (i = 1; i < height + 1; i++) {
    let lines = Array(height - i);
    for (j = 1; j < i + 1; j++) {
      lines.unshift(type);
    }
    lines.fill("-", i);
    result.push(lines);
  }

  return result;
};

console.log(buildStairway(5, "#"));

// console.log(buildStairway(height, type));
// ["#", "_", "_"],
// ["#", "#", "_"],
// ["#", "#", "#"];

// console.log(buildStairway(height1, type1));
// ["*", "_", "_", "-", "-"],
// ["*", "*", "_", "-", "-"],
// ["*", "*", "*", "-", "-"],
// ["*", "*", "*", "*", "-"],
// ["*", "*", "*", "*", "*"];

// console.log(buildStairway(height2, type2));
// [];

// console.log(buildStairway(height3, type3));
// []
