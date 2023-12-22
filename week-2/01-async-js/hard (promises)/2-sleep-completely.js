/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // Busy-waiting loop
  }
  return Promise.resolve(); // Resolve the promise after the specified time
}

// Example usage
console.log("Start of program");

sleep(3000).then(() => {
  console.log("End of busy wait");
});

console.log("After busyWait function");

module.exports = sleep;
