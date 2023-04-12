const myObject = {
  property: "Value!",
  otherProperty: 77,
  obnoxiousproperty: function () {
    console.log("hello");
  }, // = obnoxiousproperty(): {};
};
const variable = "property";
console.log(myObject.variable, myObject[variable]);
myObject.obnoxiousproperty();
console.log(
  "------------------------------------------------------------------------------------------------",
);

//! Object Constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}
Player.prototype.greet = function () {
  console.log(`${this.name} say hello`);
};
function WarriorPlayer(name, marker, weapon) {
  Player.call(this, name, marker);

  this.weapon = weapon;
}

function MagePlayer(name, marker, spell) {
  Player.call(this, name, marker);

  this.spell = spell;
}

WarriorPlayer.prototype = Object.create(Player.prototype);
WarriorPlayer.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};
MagePlayer.prototype = Object.create(Player.prototype);
MagePlayer.prototype.cast = function () {
  return `${this.name} casts ${this.spell}.`;
};

// WarriorPlayer.prototype ---> Player.prototype ---> Object.prototype ---> null
// Player.prototype ---> Object.prototype ---> null
// if WarriorPlayer.prototype = Plaer.prototype , it is only referencing =  WarriorPlayer.prototype (= Player.prototype) ---> Object.prototype ---> null

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
const warriorplayer1 = new WarriorPlayer("Viking", "red", "sword");
const mageplayer1 = new MagePlayer("Healer", "red", "healing spell");
player1.sayName();
player2.sayName();
player1.greet();
warriorplayer1.greet();
console.log(warriorplayer1.attack(), mageplayer1.cast());
console.log(
  Object.getPrototypeOf(player1),
  Object.getPrototypeOf(warriorplayer1),
);

console.log(
  "------------------------------------------------------------------------------------------------",
);

//! Prototype
let x = {};
console.log(x.__proto__, x.__proto__.__proto__, x.toString());
let y = [];
console.log(
  y.__proto__,
  y.__proto__.__proto__,
  y.__proto__.__proto__.__proto__,
);
console.log(
  y.__proto__ === Array.prototype, //true
  y.__proto__.__proto__ === Object.prototype, //true
  Array.prototype.isPrototypeOf(y), //true
  Array.prototype.isPrototypeOf(y.__proto__), //false
  y instanceof Array, //true
  Array instanceof Object, //true
  y instanceof Object, //true
);

console.log(
  "------------------------------------------------------------------------------------------------",
);

//! .call() & this

//TODO: THIS

var myFunction = function () {
  console.log(this); // this = global, [object Window]
};
myFunction();

var myObject1 = {};
myObject1.myMethod = function () {
  console.log(this); // this = Object { myObject }
};

// var nav = document.querySelector(".nav"); // <nav class="nav">
var toggleNav = function () {
  const that = this;
  console.log(this); // <nav> element
  console.log(that); // <nav> element
  setTimeout(function () {
    console.log(this); // [object Window] it is just a callback function, not a method in toggleNav
    console.log(that); // <nav> element
  }, 1000);
};
// nav.addEventListener("click", toggleNav, false);

//TODO: CALL myFunction.call(scope) ---> any references to "this" inside the myFunction will refer to the scope object, rather than the global object

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Oslo", "Norway")); //uses person1 as this
//John Doe,Oslo,Norway

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    // properties of numbers
    console.log(this === numbers); // => true
    function calculate() {
      // not
      console.log(this === numbers);
      return this.numberA + this.numberB;
    }
    // return calculate();  this in function refer to global object -> false undefined
    // return calculate.call(this); by setting .call(this) this refer to the 'numbers' -> true 15
  },
};
console.log(numbers.sum());
