const startbtn = document.getElementById("startbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");
const timedisplay = document.getElementById("timedisplay");

let starttimer = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;
let elapsedtime = 0;
let timeid;

startbtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    starttimer = Date.now();
    timeid = setInterval(updatedtime, 1000);
  }
});

pausebtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    starttimer = Date.now;
    clearInterval(timeid);
  }
});
resetbtn.addEventListener("click", () => {
  if (paused) {
    starttimer = Date.now;
    clearInterval(timeid);
    hrs = 0;
    mins = 0;
    secs = 0;
    timedisplay.textContent = `00:00:00`;
  }
});
function updatedtime() {
  elapsedtime = Date.now() - starttimer;

  secs = Math.floor((elapsedtime / 1000) % 60);
  mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  hrs = pad(hrs);
  mins = pad(mins);

  timedisplay.textContent = `${hrs}:${mins}:${secs}`;
  function pad(units) {
    return ("0" + units).length > 2 ? units : "0" + units;
  }
}
