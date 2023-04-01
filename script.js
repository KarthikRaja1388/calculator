let display = document.querySelector(".display");
let error = document.querySelector(".error");
let num1Element = document.querySelector(".num1");
let num2Element = document.querySelector(".num2");
let operatorElement = document.querySelector(".operator");
let calculate = document.querySelector(".btn-calculate");

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      display.innerHTML = num1 + num2;
      break;
    case "-":
      display.innerHTML = num1 - num2;
      break;
    case "*":
      display.innerHTML = num1 * num2;
      break;
    case "/":
      display.innerHTML = num1 / num2;
      break;
    default:
      display.innerHTML = "0";
      error.innerHTML = "Invalid Operator";
  }
}

calculate.addEventListener("click", () => {
  let num1 = parseInt(num1Element.value);
  let num2 = parseInt(num2Element.value);
  let operator = operatorElement.value;
  if (isNaN(num1) || isNaN(num2)) {
    error.innerHTML = "Please enter a valid number";
    display.innerHTML = 0;
  } else {
    calculator(num1, num2, operator);
  }
});
