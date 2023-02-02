function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//non-mutating
/*
function ascendingOrder(arr) {
    let newArray = [...arr];
  return newArrayy.sort(function (a, b) {
    return a - b;
  });
}
*/

console.log(ascendingOrder([1, 5, 2, 3, 4]));

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

console.log(reverseAlpha(["l", "h", "z", "b", "s"]));
