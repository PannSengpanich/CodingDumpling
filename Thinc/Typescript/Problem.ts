const input = 10;

function generate0(input: number) {
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j < input; j++) {
      str += "*";
    }
    console.log(str);
  }
}
generate0(input);

console.log("\n");

function generate1(input: number) {
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
generate1(input);

console.log("\n");

function generate2(input: number) {
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 9; j >= i; j--) {
      str += "*";
    }
    console.log(str);
  }
}
generate2(input);

console.log("\n");

function generate3(input: number) {
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j < input; j++) {
      if (i - j <= 0) {
        str += "*";
      }
      if (i - j > 0) {
        str += "_";
      }
    }
    console.log(str);
  }
}
generate3(input);

console.log("\n");

function generate4(input: number) {
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 == 0) {
        str += "*";
      }
      if (j % 2 != 0) {
        str += "_";
      }
    }
    console.log(str);
  }
}
generate4(input);
