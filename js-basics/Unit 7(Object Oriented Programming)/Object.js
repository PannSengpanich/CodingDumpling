//function inside object

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + this.name + "."; //= sayName: () => {...duck.name...}
  },
};
duck.sayName();

//constructor

function Dog(n, c) {
  this.name = n;
  this.color = c;
  this.legs = 4;
  this.eat = function () {
    console.log("eat");
  };
}
let a = new Dog("aa", "aaa");
console.log(a);

let b = { name: "bb", color: "bbb", legs: 4 };
console.log(a instanceof Dog, b instanceof Dog); //check whether the object is create from constructor

let ownProps = [];
for (let property in a) {
  if (a.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

Dog.prototype.numtail = 1; //will erase all of previous prototype declaration

console.log(a.constructor === Dog, b.constructor === Dog);

Dog.prototype = {
  constructor: Dog, //important
  lifespan: "12-15",
  bark: function () {
    console.log("woof");
  },
};

let c = new Dog("cc", "ccc");

let ownProps_a = [];
let prototypeProps_a = [];

for (let property in a) {
  if (a.hasOwnProperty(property)) {
    ownProps_a.push(property);
  } else {
    prototypeProps_a.push(property);
  }
}

let ownProps_c = [];
let prototypeProps_c = [];

for (let property in c) {
  if (c.hasOwnProperty(property)) {
    ownProps_c.push(property);
  } else {
    prototypeProps_c.push(property);
  }
}

console.log(ownProps_a, prototypeProps_a, "\n", ownProps_c, prototypeProps_c);
console.log(a.constructor === Dog, c.constructor === Dog);
console.log(
  Dog.prototype.isPrototypeOf(a),
  Dog.prototype.isPrototypeOf(b),
  Dog.prototype.isPrototypeOf(c)
);

console.log(Object.prototype.isPrototypeOf(Dog.prototype));

//supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

Dog.prototype = Object.create(Animal.prototype);

let d = new Dog("dd", "ddd");

let ownProps_d = [];
let prototypeProps_d = [];

for (let property in d) {
  if (d.hasOwnProperty(property)) {
    ownProps_d.push(property);
  } else {
    prototypeProps_d.push(property);
  }
}

Dog.prototype.constructor = Dog;
console.log(ownProps_d, prototypeProps_d, d.eat());

function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (a) {
  a.glide = function () {
    console.log("glide");
  };
};

glideMixin(bird);
glideMixin(boat);

//IIFE

(function () {
  console.log("A cozy nest is ready");
})();

let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();

motionModule.glideMixin(duck);
duck.glide();
