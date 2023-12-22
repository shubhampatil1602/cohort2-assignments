/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// 1-promisify-setTimeout.js

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

module.exports = wait;
