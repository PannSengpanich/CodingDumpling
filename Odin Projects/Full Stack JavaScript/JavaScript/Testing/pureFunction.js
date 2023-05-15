// 1.The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
//2. The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.

//* Side effects: Making a HTTP request, Mutating data, Printing to a screen or console, DOM Query/Manipulation, Math.random(), Getting the current time

let tax = 20;

//pure function
function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}

//impure function
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
