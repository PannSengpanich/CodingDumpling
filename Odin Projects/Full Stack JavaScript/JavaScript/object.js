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
player1.sayName(); //steve
player2.sayName(); //also steve
player1.greet(); //steve say hello
warriorplayer1.greet(); //Viking say hello
console.log(warriorplayer1.attack(), mageplayer1.cast()); // Viking attacks with the sword. Healer casts healing spell.
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

//! .call(),.bind() & this

//TODO: THIS

//? EX.1
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

//? EX.2
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

//TODO: CALL myFunction.call(scope) ---> any references to "this" inside the myFunction will refer to the scope object, rather than the global object and call f().
//TODO: BIND myFunction.bind(scope) ---> just like call.() but doesnt immediately calls function, it create new function with the specified this value that can be called later.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person2 = {
  firstName: "Leeroy",
  lastNameee: "Jenkins",
};

const fullName1 = person.fullName.bind(person2);
console.log(fullName1()); // John Doe (calls function again)

const fullName2 = person.fullName.call(person2);
console.log(fullName2); // John Doe (no need to call)
