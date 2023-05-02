const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log(name, color, number, food); // Maynard red 34 rice
console.log({ name, color, number, food }); // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }

//! Factory Function

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    console.log(`${name} has died`);
  };
  const damage = (x) => {
    health -= x;
    if (health > 0) {
      console.log(`${name}'s health = ` + health);
    }
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName }; // = return {attack: attack, damage: damage, getLevel: getLevel, getName: getName };
};

const jim = Player("jim", 10);
const jeff = Player("jeff", 5);
jim.attack(jeff); // jeff's health = 9, jim has damaged jeff
jeff.attack(jim); // jeff's health = 8, jim has damaged jeff
jim.damage(20); // jim has died
//jimmie.die(); error
//health++; error

console.log(
  "------------------------------------------------------------------------------------------------",
);

//* inheritance
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy }); // copy elements inside prototype and {doSomethingNerdy} in {}
};

const White = Nerd("White");

White.sayName(); // my name is White
White.doSomethingNerdy(); // nerd stuff

//! Scope and Closure (INSIDE has access to OUTSIDE)

//TODO: SCOPE

//? global scope
var a = 5;
var c = 20;

function f() {
  //? local scope
  var a = 10;
  b = 15; //  becomes a global variable instead of a local variable in var
  //* console.log(window.a); = 5 (can view in chrome dev tool)
  console.log(a); // 10
  console.log(c); // 20 (find c from smaller scope to larger scope)
}
f(); // 10 20
console.log(a); // 5
console.log(b); // 15

var firstname = "Todd";
var scope1 = function () {
  // firstname is available here
  // localName = undefined
  var scope2 = function () {
    // firstname is available here too
    // localName = undefined
    var scope3 = function () {
      // firstname is also available here!
      var localName = "Todd1"; // locally scoped
    };
  };
};

//TODO: private and public scope

//* uses MODULE (uses Immediately Invoked Function Expression (IIFE)) syntax for importing and exporting code between different JavaScript files.

var Module1 = (function () {
  var _privateMethod1 = function () {
    return "privateMethod";
  };
  var publicMethod1 = function () {
    console.log("publicMethod");
  };
  var anotherPublicMethod1 = function () {
    console.log("anotherpublicMethod " + _privateMethod1());
  };
  return {
    publicMethod1,
    anotherPublicMethod1,
  };
})();

// call module + methods
//publicMethod() undefined (private scope)
Module1.publicMethod1();
Module1.anotherPublicMethod1();

//* uses Factory Function

const templateMethod = function () {
  var _privateMethod2 = function () {
    return "privateMethod";
  };
  var publicMethod2 = function () {
    console.log("publicMethod");
  };
  var anotherPublicMethod2 = function () {
    console.log("anotherpublicMethod " + _privateMethod2());
  };
  return {
    publicMethod2,
    anotherPublicMethod2,
  };
};
Module2 = templateMethod();
Module2.publicMethod2();
Module2.anotherPublicMethod2();

//TODO: CLOSURE  (inner functions have access to variables declared in their outer functions)

var sayHello = function (name) {
  var text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};
sayHello("Bob"); // nothing happens cuz it return function but not execute it
sayHello("Bob")(); // Hello, Bob

function outerFunction() {
  var outerVariable = "Hello";

  function innerFunction1() {
    console.log(outerVariable + " from innerFunction1");
  }

  function innerFunction2() {
    console.log(outerVariable + " from innerFunction2");
  }

  return {
    innerFunction1,
    innerFunction2,
  };
}

var myfunction = outerFunction();
myfunction.innerFunction1(); // Output: "Hello from innerFunction1"
myfunction.innerFunction2(); // Output: "Hello from innerFunction2"
