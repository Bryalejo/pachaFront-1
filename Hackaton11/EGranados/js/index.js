let operacion = "";
let resultado = document.getElementById("resultado");

function agregarNumero(numero) {
  operacion += numero;
  resultado.value = operacion;
}

function agregarOperador(operador) {
  operacion += operador;
  resultado.value = operacion;
}

function calcular() {
  try {
    const resultadoCalculo = eval(operacion);
    resultado.value = resultadoCalculo;
    operacion = "";
  } catch (error) {
    resultado.value = "Error";
  }
}

function limpiar() {
  operacion = "";
  resultado.value = "";
}
