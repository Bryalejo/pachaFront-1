document.getElementById('sumar').addEventListener('click', sumar);
document.getElementById('restar').addEventListener('click', restar);
document.getElementById('multiplicar').addEventListener('click', multiplicar);
document.getElementById('dividir').addEventListener('click', dividir);
document.getElementById('resto').addEventListener('click', resto);
document.getElementById('potencia').addEventListener('click', potencia);
document.getElementById('limpiar').addEventListener('click', limpiar);

function sumar() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = numero1 + numero2;
  
  document.getElementById('resultado').value = resultado;
}

function restar() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = numero1 - numero2;
  
  document.getElementById('resultado').value = resultado;
}

function multiplicar() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = numero1 * numero2;
  
  document.getElementById('resultado').value = resultado;
}

function dividir() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = numero1 / numero2;
  
  document.getElementById('resultado').value = resultado;
}

function resto() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = numero1 % numero2;
  
  document.getElementById('resultado').value = resultado;
}

function potencia() {
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  
  var resultado = Math.pow(numero1, numero2);
  
  document.getElementById('resultado').value = resultado;
}

function limpiar() {
  document.getElementById('numero1').value = '';
  document.getElementById('numero2').value = '';
  document.getElementById('resultado').value = '';
}