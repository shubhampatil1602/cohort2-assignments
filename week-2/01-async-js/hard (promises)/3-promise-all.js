/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Waited ${t}s`);
    }, t * 1000)
  );
}

function wait2(t) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Waited ${t}s`);
    }, t * 1000)
  );
}

function wait3(t) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Waited ${t}s`);
    }, t * 1000)
  );
}

function calculateTime(t1, t2, t3) {
  t1 = wait1(1);
  t2 = wait2(2);
  t3 = wait3(3);
  const startTime = Date.now();
  return Promise.all([t1, t2, t3])
    .then(function (results) {
      const endTime = Date.now();
      console.log(results);
      console.log(endTime - startTime + " ms");
    })
    .catch(function (err) {
      console.log(err);
    });
}

// t1 = wait1(1);
// t2 = wait2(2);
// t3 = wait3(3);

// calculateTime(t1, t2, t3);

module.exports = calculateTime;
