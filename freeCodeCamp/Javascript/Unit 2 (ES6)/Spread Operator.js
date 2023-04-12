let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a + b, typeof (a + b)); //converts the arrays to strings and concatenates the strings
console.log([...a, ...b], typeof [...a, ...b]);
console.log({ ...a }, typeof { ...a });
console.log([a + b], typeof [a + b]);
