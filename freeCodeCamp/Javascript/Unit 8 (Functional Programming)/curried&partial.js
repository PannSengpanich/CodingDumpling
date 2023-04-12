function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(add(10)(20)(30));
let a = add(10);
let b = a(20);
let c = b(30);
console.log(c);
