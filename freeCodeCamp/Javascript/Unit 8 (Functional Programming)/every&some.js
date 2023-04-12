const numbers1 = [1, 5, 8, 0, 10, 11];

console.log(
  numbers1.every(function (currentValue) {
    return currentValue < 10;
  })
);

const numbers2 = [10, 50, 8, 220, 110, 11];

console.log(
  numbers2.some(function (currentValue) {
    return currentValue < 10;
  })
);
