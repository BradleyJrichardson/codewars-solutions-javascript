// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
  let i = 0;
  arr.forEach(e => {
    if (e === 0) {
      i += 1;
    }
  });
  let arrayZeros = Array(i).fill(0);
  return arr
    .filter(e => {
      return e !== 0;
    })
    .concat(arrayZeros);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//
//
// alternative solutions

var moveZeros = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};
