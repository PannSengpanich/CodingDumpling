function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  console.log([shifted, popped], arr);
}

console.log(popShift(["challenge", "is", "not", "complete"]));

let a = [1, 2, 3, 4, 5, 5, 5, 7];
let b = [1, 2, 3, 4, 5, 6, 7];
console.log(a.splice(5, 2, 6), a); //splice(first index, number of elements, replace the removed index)
console.log(b.slice(0, 2), b); //slice(first index, last index (not included))

function copyMachine(arr, num) {
  let newArr = [];
  let i = 0;
  while (num >= 1) {
    newArr[i] = [...arr]; // newArr[i] = arr;
    num--;
    i++;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 4));

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

console.log(fruits.indexOf("dates"));
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    9
  )
);
