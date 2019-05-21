const findMaxSum = n => {
  a1 = 0;
  a2 = 0;
  a3 = 0;
  sum = a1 + a2 + a3;
  if (n === 0) {
    return 0;
  }
  (a1 + a2) % 2 === 0;
  (a1 + a3) % 3 === 0;
  (a1 + a2 + a3) % 5 === 0;
};

findMaxSum(3);
findMaxSum(4);
findMaxSum(5);
