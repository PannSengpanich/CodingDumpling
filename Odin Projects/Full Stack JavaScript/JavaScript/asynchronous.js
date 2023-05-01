//!Promises

let p1 = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Succeed");
  } else reject("Failed");
});
//return either resolve or reject
// if resolve -> then, if reject -> catch

p1.then((message) => {
  console.log("Then: " + message);
})
  .catch((message) => {
    console.log("Catch: " + message);
  })
  .finally(() => console.log("execute everytime"));

console.log(p1); // Promise { 'Succeed' }

let p2 = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 4) {
    resolve("Succeed");
  } else reject("Failed");
});

console.log(p2); // Promise { <rejected> 'Failed' }

Promise.all([p1, p2])
  .then(function () {
    console.log("Both promises resolved");
  })
  .catch(function () {
    console.log("One or more promises was rejected");
  });

//* the asynchronous code will be executed after
//* the synchronous code has finished executing
//* ex. console.log() is sync , resolve/reject is async
