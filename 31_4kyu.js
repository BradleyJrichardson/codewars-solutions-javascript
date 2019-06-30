// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

const orderWeight = strng => {
  const sumNum = strng.split(" ").map(string => {
    return string
      .split("")
      .map(Number)
      .reduce(function(a, b) {
        return a + b;
      }, 0);
  });
  let result = strng
    .split(" ")
    .map((num, i) => [num, sumNum[i]])
    .sort((a, b) => a[1] - b[1])
    .map(subArray => {
      return subArray[0];
    })
    .join(" ");

  return result;
};

// need to create a two element array with reduced number and original
console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
