//String  Boolean  Number  Array  Object: Interface,Class

const a: string = "Hello Thinc";
const isThincYingYai: boolean = true;
const peopleIn201A: number = 50;
const room: string[] = ["201a", "201B"];
const score: number[] = [20, 30];

//Interface (Object) contains key-value pairs

interface Person {
  name: string;
  age: number;
  cute: boolean;
}

const MrA: Person = {
  name: "Mr.A",
  age: 18,
  cute: false,
};
console.log(MrA);

//Class (Object) contains fields and methods

class Person {
  name: string = "";
  age: number = 0;
  cute: boolean = false;
}

const MrB: Person = new Person();
MrB.name = "Mr.B";
MrB.age = 18;
MrB.cute = false;

console.log(MrA);

class Person1 {
  name: string = "";
  age: number = 0;
  cute: boolean = false;

  constructor(name: string, age: number, cute: boolean) {
    this.name = name;
    this.age = age;
    this.cute = cute;
  }
}

const MrC: Person1 = new Person1("Mr.C", 18, false);
console.log(MrC);
