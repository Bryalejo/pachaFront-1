let expression = '';

function appendToOutput(value) {
  expression += value;
  document.getElementById('output').value = expression;
}

function clearOutput() {
  expression = '';
  document.getElementById('output').value = expression;
}

function operate(operator) {
  appendToOutput(operator);
}

function calculate() {
  try {
    let result;
    if (expression.includes('^')) {
      const [base, exponent] = expression.split('^');
      result = potencia(Number(base), Number(exponent));
    } else if (expression.includes('%')) {
      const [dividend, divisor] = expression.split('%');
      result = resto(Number(dividend), Number(divisor));
    } else {
      result = eval(expression);
    }
    document.getElementById('output').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('output').value = 'Error';
  }
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function resto(a, b) {
  return a % b;
}
