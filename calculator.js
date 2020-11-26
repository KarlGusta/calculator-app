// This is a calculator object that consists of everything that
// we need to construct a valid expression
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

// INPUT THE DIGITS
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }

  console.log(calculator);
}

// INPUT A DECIMAL POINT
function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal poiny
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator;
  // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
  const inputValue = parseFloat(displayValue);

  // verify that `firstOperand` is null and that the `inputValue`
  // is not a `NaN` value
  if (firstOperand === null && !isNaN(inputValue)) {
    // Update the firstOperand property
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;

  console.log(calculator);
}

function updateDisplay() {
  // Select the element with class of `calculator-screen`
  const display = document.querySelector(".calculator-screen");
  // Update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();

// Handle key presses
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  // Access the clicked element
  const { target } = event; // is equivalent to: const target = event.target;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.Value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
