// function that allows to simulate the behavior of a real function or module during testing.
// used to isolate and control the behavior of dependencies,erasing the actual implementation of a function

// test server data / API calls, callbacks and side effects

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index] * 2);
  }
}

module.exports = forEach;
