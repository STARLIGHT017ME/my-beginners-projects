const list = document.getElementById("maininput");
const operators = document.getElementById("operator").value;

let values;
let value;
let operates;

let operations = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    value = list.value;
    value = value.replaceAll(" ", "");
    value = value.split(",");
    values = value.map(operation);

    console.log(typeof values);
    console.log(values);

    operation();
  });

function operation(operators) {
  switch (operates) {
    case "sum":
      let sum = 0;
      for (let i = 0; i < value.length; i++) {
        sum += parseFloat(value[i]);
      }
      return document.getElementById("output").innerHTML = sum;
      break;

    case "average":
      sum = 0;
      for (let i = 0; i < list.length; i++) {
        sum += parseFloat(list[i]);
      }
      return (document.getElementById("output").innerHTML =
        sum / values.length);
      break;

    default:
      break;
  }
}
