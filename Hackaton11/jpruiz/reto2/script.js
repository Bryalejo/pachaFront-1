let currentResult = '';

function appendNumber(number) {
  currentResult += number;
  document.getElementById('result').value = currentResult;
}

function add() {
  currentResult += '+';
  document.getElementById('result').value = currentResult;
}

function subtract() {
  currentResult += '-';
  document.getElementById('result').value = currentResult;
}

function multiply() {
  currentResult += '*';
  document.getElementById('result').value = currentResult;
}

function divide() {
  currentResult += '/';
  document.getElementById('result').value = currentResult;
}

function power() {
  currentResult += '^';
  document.getElementById('result').value = currentResult;
}

function remainder() {
  currentResult += '%';
  document.getElementById('result').value = currentResult;
}

function clearResult() {
  currentResult = '';
  document.getElementById('result').value = currentResult;
}

function calculate() {
  try {
    const result = eval(currentResult);
    document.getElementById('result').value = result;
    currentResult = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentResult = '';
  }
}
