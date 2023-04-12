//Palindrome

function palindrome(str) {
  let newstr = str
    .toLowerCase()
    .match(/[A-Za-z0-9]/g)
    .toString();
  let twinstr = [];

  newstr = newstr.split("");
  for (let i = 0; i < newstr.length; i++) {
    twinstr.push(newstr[newstr.length - 1 - i]);
  }
  newstr = newstr.join("");
  twinstr = twinstr.join("");
  return newstr == twinstr;
}

console.log(palindrome("five|_/|four"));

//Roman Converter

function convertToRoman(num) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(convertToRoman(36));

//Caesar Cipher

function rot13(str) {
  let newstr = str.split("");
  for (let i = 0; i < newstr.length; i++) {
    if (/[A-Z]/.test(newstr[i])) {
      if (newstr[i].charCodeAt() + 13 > 90) {
        newstr[i] = String.fromCharCode(newstr[i].charCodeAt() - 13);
      } else if (newstr[i].charCodeAt() + 13 <= 90) {
        newstr[i] = String.fromCharCode(newstr[i].charCodeAt() + 13);
      }
    }
  }
  newstr = newstr.join("");
  return newstr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

//Telephone Number Validator

function telephoneCheck(str) {
  if (/^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(str)) {
    return true;
  }
  return false;
}

console.log(telephoneCheck("555-555-5555"));

//Cash Register

const checkCashRegister = (price, cash, cid) => {
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArray = [];

  //check
  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      changeArray.push(temp);
    }
  }
  return { status: "OPEN", change: changeArray };
};
console.log(
  checkCashRegister(19.5, 200, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
