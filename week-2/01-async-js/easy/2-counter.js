let counter = 1;

function updateCounter() {
  console.log(`Counter ${counter}`);
  counter++;

  if (counter <= 10) {
    setTimeout(updateCounter, 1000);
  } else {
    setTimeout(() => {
      console.log("Counter stopeed...");
    }, 1000);
  }
}

updateCounter();
