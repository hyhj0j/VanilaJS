const range = document.querySelector(".range__number");
const random = document.querySelector("#random");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const status = document.querySelector(".status");
const result = document.querySelector(".result");

function setResult(myNum, machineNum) {
  if (myNum === machineNum) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

function paintStatus(myNum, MachineNum) {
  status.innerHTML = `You chose: ${myNum} , the machine chose: ${MachineNum}.`;
}

function setMachineNum() {
  const machineNum = Math.floor(
    Math.random() * (parseInt(range.textContent) + 1)
  );
  console.log(machineNum);
  return machineNum;
}

function setMyNum(e) {
  const myNum = parseInt(e.target.previousElementSibling.value);
  console.log(myNum);
  return myNum;
}

function playGame(e) {
  const myNum = setMyNum(e);
  const machineNum = setMachineNum();
  e.preventDefault();
  paintStatus(myNum, machineNum);
  setResult(myNum, machineNum);
}

function setRange(e) {
  const span = document.createElement("span");

  range.textContent = e.target.value;
  range.appendChild(span);
}

function init() {
  random.addEventListener("input", setRange);
  submit.addEventListener("click", playGame);
}

init();
