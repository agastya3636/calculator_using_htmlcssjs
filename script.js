let string = "";
const inputField = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const isNumericOrOperator = /^[\d+\-*/\n]$/.test(event.key);

  if (isNumericOrOperator) {
    string += event.key;
    inputField.value = string;
  }

  if (event.key === "Enter") {
    string = "" + eval(string);
    inputField.value = string;
  }
}

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = "" + eval(string);
      inputField.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      inputField.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      inputField.value = string;
    } else {
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});

inputField.addEventListener("input", (event) => {
  string = event.target.value;
});
