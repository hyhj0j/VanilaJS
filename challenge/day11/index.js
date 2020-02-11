const plus = document.querySelector(".plus");
const division = document.querySelector(".division");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const result = document.querySelector(".result");
const numbers = document.querySelectorAll(".num");
const output = document.querySelector("span");
const operators = document.querySelectorAll(".operator");

// const calculator = {
//   plus: function(a, b) {
//     return a + b;
//   },
//   minus: function(a, b) {
//     return a - b;
//   },
//   times: function(a, b) {
//     return a * b;
//   },
//   division: function(a, b) {
//     return a / b;
//   }
// };
// const plus = calculator.plus(2, 3);
const inputs = [];
let i = 0;

function setInput(e) {
  e.preventDefault();

  const input = e.target.value;

  output.innerHTML = input;

  inputs[i] = input;

  i++;

  if (inputs[1] !== null) {
    plus.addEventListener("click", calPlus(inputs[0], inputs[1]));
  }
}

function calPlus(a, b) {
  console.log(parseInt(a) + parseInt(b));
  return parseInt(a) + parseInt(b);
}

function init() {
  // for (let j = 0; j < operators.length; j++) {
  //   operators[j].addEventListener("click", calculator);
  // }
  Array.from(numbers).forEach(function() {
    addEventListener("click", setInput);
  });
  // operators.forEach(function() {
  //   addEventListener("click", whichOperator);
  // });
}
init();
