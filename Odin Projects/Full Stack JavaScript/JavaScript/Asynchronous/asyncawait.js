//When a function is declared with async, it automatically returns a promise;
//returning in an async function is the same as resolving a promise.
//? async is just syntatical sugar for promise

//await tells JavaScript to wait for an asynchronous action to finish before continuing the function.
//await required async keyword
//used to get a value from a function instead of .then()
//await is used for promises

//! Using Promises:
function getData1() {
  return new Promise(function (resolve, reject) {
    fetch("https://example.com/data.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(function (data) {
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
} //return promises

//! Using async await: (better) with try,catch
async function getData2() {
  try {
    const response = await fetch("https://example.com/data.json");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    throw error;
  }
} //return promises
