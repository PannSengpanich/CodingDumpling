const myObject = {
  property: "Value!",
  otherProperty: 77,
  obnoxiousproperty: function () {}, // = obnoxiousproperty(): {};
};
const variable = "property";
console.log(myObject.variable, myObject[variable], myObject.obnoxiousproperty);
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
    console.log(this === numbers); // => true
    function calculate() {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    // return calculate();            this in function refer to global object -> undefined
    // return calculate.call(this);   by setting .call(this) this refer to the numbers -> 15
  },
};
console.log(numbers.sum());
