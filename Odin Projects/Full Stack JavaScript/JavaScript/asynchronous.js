//!Callbacks
function sum(a, b) {
  console.log(a + b);
}

function processNumberInput(callback) {
  let x = 5;
  let y = 7;
  callback(x, y);
}

processNumberInput(sum);

//!Promises (asynchronous operation) (use to fetch data and read files)

//? .then() .catch() .finally()

//TODO: order of execution: sync ---> async(resolve,reject ---> finally)
let p1 = new Promise((resolve, reject) => {
  let a = 1000 + 1000;
  if (a == 2000) {
    resolve("p1 Succeed");
  } else reject("p1 Failed");
});
//return either resolve or reject
// if resolve -> then, if reject -> catch

p1.then((message) => {
  console.log("Then: " + message);
})
  .catch((message) => {
    console.log("Catch: " + message);
  })
  .finally(() => console.log("execute everytime")); //execute after every then and catch of this file

console.log(p1); // Promise { 'Succeed' }

let p2 = new Promise((resolve, reject) => {
  let a = 2 + 2;
  if (a == 4) {
    resolve("p2 Succeed");
  } else reject("p2 Failed");
});

console.log(p2); // Promise { <rejected> 'Failed' }

Promise.all([p1, p2])
  .then(function (result) {
    // result is values from resolve
    console.log(`Both promises resolved + ${result}`);
    console.log(result);
  })
  .catch(function (err) {
    // rejected immediately after the first rejected
    console.log(`One or more promises was rejected + ${err}`);
  });

Promise.race([p1, p2]) //   triggers as soon as any promise in the array is resolved or rejected
  .then(function (result) {
    console.log(`Both promises resolved + ${result}`);
  })
  .catch(function (err) {
    console.log(`One or more promises was rejected + ${err}`);
  });
//* the asynchronous code will be executed after
//* the synchronous code has finished executing
//* ex. console.log() is sync , resolve/reject is async

//? await (same as .then but less code )
// Using .then():
fetch("https://example.com/data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Using await:
async function fetchData() {
  try {
    const response = await fetch("https://example.com/data.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
