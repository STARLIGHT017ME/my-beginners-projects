const btns = document.querySelectorAll("button");
const displaytext = document.getElementById("screendisplay");

let display;
let calculation = [];
let calc;

console.log(typeof display)

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    display = btn.textContent;
    displaytext.textContent = display;
    update();
  })
);
function update(btn) {
 
  if (display === "c") {
    calculation = [];
    displaytext.textContent = ".";
  } else if (display === "=") {
    displaytext.textContent = eval(calc);
  } else {
    calculation.push(display);
    calc = calculation.join("");
    displaytext.textContent = calc;
  }

 
}
