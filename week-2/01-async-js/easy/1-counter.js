/* 

Create a counter in JavaScript:

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second 

*/

let counter = 0;

function updateCounter() {
  counter++;
  console.log(`Counter: ${counter}`);
}

const intervalId = setInterval(updateCounter, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Counter Stopped...");
}, 10000);
