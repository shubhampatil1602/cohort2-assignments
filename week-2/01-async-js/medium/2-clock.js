// const date = new Date(undefined, { timezone: "Asia/Kolkata" });

const div = document.querySelector("div");
const h1 = document.querySelector("h1");

function time() {
  const options = {
    timezone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const currentDate = new Date().toLocaleString("en-IN", options);
  h1.innerHTML = currentDate;
  div.appendChild(h1);
  console.log(currentDate);
}

setInterval(time, 1000);
