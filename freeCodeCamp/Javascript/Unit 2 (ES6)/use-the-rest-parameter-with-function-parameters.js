const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  return sum;
};

function sum_(...args) {
  let sum_ = 0;
  for (let i = 0; i < args.length; i++) {
    sum_ = sum_ + args[i];
  }
  return sum_;
}
console.log(sum(1, 2, 3));
console.log(sum_(1, 2, 3));
