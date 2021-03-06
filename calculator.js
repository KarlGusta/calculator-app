// This is a calculator object that consists of everything that
// we need to construct a valid expression
const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    // Select the element with class of `calculator-screen`
    const display = document.querySelector(".calculator-screen");
    // Update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
};

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
        console.log("operator", target.value);
        return;
    }

    if (target.classList.contains("decimal")) {
        console.log("decimal", target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});