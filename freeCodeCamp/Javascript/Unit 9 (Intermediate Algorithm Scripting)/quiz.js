//1
function diffArray(arr1, arr2) {
  let newarr1 = arr1.filter((item) => !arr2.includes(item));
  let newarr2 = arr2.filter((item) => !arr1.includes(item));
  const filterarr = [...newarr1, ...newarr2];
  return filterarr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//2

function destroyer(arr, ...removearr) {
  return arr.filter((element) => !removearr.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//3 Object.keys([{}]); return array of argument's keys

function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

//4 regex

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This_Is SpinalTap"));

//5 regex+edit

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("consonant"));

//6 charAt(i) return char of the specific index of string

function myReplace(str, before, after) {
  let strarr = str.split(" ");
  for (let i = 0; i < strarr.length; i++) {
    if (strarr[i] == before) {
      if (/^[A-Z]/.test(strarr[i])) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        strarr[i] = after;
      } else {
        strarr[i] = after.charAt(0).toLowerCase() + after.slice(1);
      }
    }
  }

  strarr = strarr.join(" ");
  return strarr;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")
);

//7

function pairElement(str) {
  let finalarr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A") {
      finalarr.push([str[i], "T"]);
    } else if (str[i] == "T") {
      finalarr.push([str[i], "A"]);
    } else if (str[i] == "C") {
      finalarr.push([str[i], "G"]);
    } else if (str[i] == "G") {
      finalarr.push([str[i], "C"]);
    }
  }
  return finalarr;
}

console.log(pairElement("GCG"));

//8 charCodeAt(i)

function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
console.log(fearNotLetter("abcdefh"));

//9 .flat(i) used to flatten an array of arrays into a single array by specific the dept of arguments.
//  ,arguments without stating

function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

//10 Fibonacci

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));

//11

function sumPrimes(num) {
  let count = 0;
  let sum = 0;

  let isPrime = function (count) {
    for (let i = 2; i < count; i++) {
      if (count % i == 0) {
        return false;
      }
    }
    return count >= 2;
  };

  while (count <= num) {
    if (isPrime(count)) {
      sum += count;
    }
    count++;
  }
  return sum;
}

console.log(sumPrimes(10));

//12

function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let lcm = max;

  for (let i = max; i >= min; i--) {
    if (lcm % i !== 0) {
      lcm += max;
      i = max;
    }
  }

  return lcm;
}

console.log(smallestCommons([1, 5]));

//13

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);

//14

function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

//15

function binaryAgent(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 2);
    arr[i] = String.fromCharCode(arr[i]);
  }
  arr = arr.join("");
  return arr;
}

console.log(binaryAgent("01000001 01110010 01100101"));

//16

function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);

//17

function addTogether() {
  let [first, second] = arguments;
  if (typeof first != "number") {
    return undefined;
  }
  if (arguments.length == 1) {
    return (second) => addTogether(first, second);
  }
  if (typeof second != "number") {
    return undefined;
  }
  return first + second;
}
console.log(addTogether(2, 3));

//18

const Person = function (firstAndLast) {
  this.getFirstName = function () {
    return firstAndLast.match(/^\w+/g).toString();
  };

  this.getLastName = function () {
    return firstAndLast.match(/\w+$/g).toString();
  };

  this.getFullName = function () {
    return firstAndLast;
  };

  this.setFirstName = function (newFirstName) {
    firstAndLast = firstAndLast.split(" ");
    firstAndLast[0] = newFirstName;
    firstAndLast = firstAndLast.join(" ");
  };

  this.setLastName = function (newLastName) {
    firstAndLast = firstAndLast.split(" ");
    firstAndLast[1] = newLastName;
    firstAndLast = firstAndLast.join(" ");
  };

  this.setFullName = function (newName) {
    firstAndLast = newName;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFirstName(), bob.getLastName(), bob.getFullName());
bob.setFullName("Pann Sengpanich");
console.log(bob.getFirstName(), bob.getLastName(), bob.getFullName());

//19

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newValue = arr.map((satellite) => ({
    name: satellite["name"],
    orbitalPeriod: Math.round(
      2 *
        Math.PI *
        Math.sqrt(Math.pow(satellite["avgAlt"] + earthRadius, 3) / GM)
    ),
  }));
  return newValue;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
