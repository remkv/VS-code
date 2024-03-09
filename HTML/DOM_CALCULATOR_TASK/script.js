let currentInput = '';

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    setOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    clearScreen();
  } else {
    alert('Only numbers are allowed!');
  }
});

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(operator) {
  if (currentInput !== '') {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
  }
}

function clearScreen() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = '';
  } catch (error) {
    alert('Invalid expression!');
    currentInput = '';
    updateDisplay();
  }
}