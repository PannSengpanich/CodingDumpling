const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [1, 2, 3, 4];
console.log([...a, ...b]);
console.log("Pann Sengpanich".split(""));
console.log(["Pann", "Sengpanich"].join());
console.log("pann sengpanich"[0]);
console.log(c.length);
console.log("'".toLowerCase());

const d = [1, 2, 3];
console.log(d.slice());
console.log([5, 3, 23, 3].sort((a, b) => a - b));

function Dog(n, c) {
  this.name = n;
  this.color = c;
  this.legs = 4;
}

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

Dog.prototype = Object.create(Animal.prototype);

const aa = new Dog("aa", "aaa");

const ownProps_a = [];
const prototypeProps_a = [];

for (const property in c) {
  if (a.hasOwnProperty(property)) {
    ownProps_a.push(property);
  } else {
    prototypeProps_a.push(property);
  }
}

console.log(ownProps_a, prototypeProps_a);

const e = [1, 2, 3];
const f = e;
const g = [...e];
console.log(f, g);

console.log(
  Object.keys(
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  )
);

console.log("onsonant".split("").push());

console.log("A".charCodeAt());
console.log(/\d{3}-\d{3}-\d{4}/.test("555-555-5555"));
console.log(Math.floor(2 / 3));

const value = [
  { name: "PENNY", val: 0.01 },
  { name: "NICKEL", val: 0.05 },
  { name: "DIME", val: 0.1 },
  { name: "QUARTER", val: 0.25 },
  { name: "ONE", val: 1 },
  { name: "FIVE", val: 5 },
  { name: "TEN", val: 10 },
  { name: "TWENTY", val: 20 },
  { name: "ONE HUNDRED", val: 100 },
];
