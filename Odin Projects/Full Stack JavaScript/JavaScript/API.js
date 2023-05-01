//! fetch
fetch("https://url.com/some/url")
  .then(function (response) {
    // Successful response :)
  })
  .catch(function (err) {
    // Error :(
  });

async function example() {
  console.log("Before await1"); //sync
  console.log("Before await2");
  await Promise.resolve();
  console.log("After await1"); //async
  await Promise.resolve();
  console.log("After await2"); //async
}

example();
console.log("End of script"); //sync
