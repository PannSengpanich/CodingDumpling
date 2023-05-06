//! Setter & Getter

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...

console.log(
  "----------------------------------------------------------------------------------s",
);

//! Classes

class User1 {
  constructor(name) {
    this.name = name;
  }
  number = 10;
  sayHi() {
    console.log(this.name);
  }
}

/* 

=
const User1 = class{
    constructor(name) {
    this.name = name;
  }
  number = 10;
  sayHi() {
    console.log(this.name);
  }
}

=
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function() {
  alert(this.name);
};

*/

console.log(typeof User1); // function

console.log(User1 === User1.prototype.constructor); // true

//* The methods are in User.prototype, e.g:
console.log(User1.prototype.sayHi); // the code of the sayHi method

console.log(Object.getOwnPropertyNames(User1.prototype)); // constructor, sayHi

console.log(User1.number, User1.prototype.number);

//TODO: Format

class MyClass {
  prop1; // or prop1 = value; ---> (prop1 is declared but not initialized || default value)

  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2; // (prop2 is not declared yet)
  }

  method() {} // method

  get something() {} // getter method
  set something(a) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}

//TODO: static (defined on the class itself instead of each instance)

class Example {
  static staticMethod() {
    console.log("This is a static method.");
  }
}

Example.staticMethod(); // This is a static method (doesn't need new keyword to call)

//TODO: Private Class

class Rectangle {
  #height; //private property must be declared
  #width; //private property must be declared
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  } // console.log( instanceOfRectangle.height or .width  = Error: Private field '#height' is not defined in class 'Rectangle'.)
}

//TODO: Inheritance

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak(); // console.log(`${this.name} makes a noise.`);
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
