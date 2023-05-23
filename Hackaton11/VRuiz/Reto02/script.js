let expression = '';

function calcuNumero(number) {
  expression += number;
  document.getElementById('result').value = expression;
}

function calcuOperador(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function calcularResultado() {
  const result = eval(expression);
  document.getElementById('result').value = result;
  expression = '';
}

function limpiar() {
  expression = '';
  document.getElementById('result').value = '';
}