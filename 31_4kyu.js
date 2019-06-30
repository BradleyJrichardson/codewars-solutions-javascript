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
    .sort((item1, item2) => {
      if (item1[1] === item2[1]) return item1[0] > item2[0] ? 1 : -1;
      else return item1[1] - item2[1];
    })
    .map(item => item[0])
    .join(" ");

  return result;
};

// need to create a two element array with reduced number and original
console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
