function reverseString(str) {
  let splitString = str.split("");
  console.log(splitString);
  let reverseArray = splitString.reverse();
  console.log(reverseArray);
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString("pann");

function findLongestWordLength(str) {
  let strarray = str.split(" ");
  let length = 0;

  for (let i = 0; i < strarray.length; i++) {
    if (strarray[i].length > length) {
      length = strarray[i].length;
    }
  }
  return length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

function confirmEnding(str, target) {
  return console.log(str.slice(str.length - target.length) === target);
}

confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  " frozen"
);

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return console.log(accumulatedStr);
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//.find(func);
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(null);

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    console.log(updatedTitle);
  }
  return updatedTitle.join(" ");
}
titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  let localarr = arr2.slice();
  localarr.splice(n, 0, ...arr1);
  return localarr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newarr.push(arr[i]);
  }
  return newarr;
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(
  chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "e"], 2)
);
