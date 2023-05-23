const sumar = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const resultado = (a, b) => a + b;
    document.getElementById("demo").innerHTML = resultado(num1, num2);
  }
  document.getElementById("boton-sumar").addEventListener("click", sumar);


const Potenciar = () => {
    const nume1 = Number(document.getElementById("nume1").value);
    const potencia = Number(document.getElementById("potencia").value);
    const resultado = (a, b) => Math.pow(a, b);
    document.getElementById("demo1").innerHTML = resultado(nume1, potencia);
  }
  document.getElementById("boton-potencia").addEventListener("click", Potenciar);


// Función que crea un campo de texto para ingresar un número
const crearCampoNumero = (index) => {
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  
  label.textContent = `Número ${index + 1}: `;
  input.type = 'number';
  
  div.appendChild(label);
  div.appendChild(input);
  
  return div;
};

// Función que muestra los campos de texto para ingresar números
const mostrarCamposNumeros = () => {
  const cantidadNumeros = Number(document.getElementById('cantidad-numeros').value);
  const numerosContainer = document.getElementById('numeros-container');
  
  // Limpia los campos de texto existentes
  while (numerosContainer.firstChild) {
    numerosContainer.removeChild(numerosContainer.firstChild);
  }
  
  // Crea los campos de texto necesarios
  for (let i = 0; i < cantidadNumeros; i++) {
    numerosContainer.appendChild(crearCampoNumero(i));
  }
};

// Función que devuelve la suma de los cubos de los números ingresados
const sumarCubos = () => {
  const numeros = Array.from(document.querySelectorAll('#numeros-container input'))
                     .map(input => Number(input.value))
                     .filter(numero => !isNaN(numero)); // Elimina valores no numéricos
  const sumaCubos = numeros.reduce((acumulador, numero) => acumulador + Math.pow(numero, 3), 0);
  const resultado = document.getElementById('resultado');
  
  resultado.textContent = `La suma de los cubos de los números ingresados es: ${sumaCubos}`;
};

// Eventos
document.getElementById('cantidad-numeros').addEventListener('input', mostrarCamposNumeros);
document.getElementById('sumar-cubos').addEventListener('click', sumarCubos);

const calcularArea = () => {
  const base = Number(document.getElementById("base").value);
  const altura = Number(document.getElementById("altura").value);
  const area = (base * altura) / 2;
  document.getElementById("resultado1").innerHTML = `El área del triángulo es: ${area}`;
}

document.getElementById("calcular").addEventListener("click", calcularArea);

const calculator = () => {
  const numer1 = Number(document.getElementById("numer1").value);
  const numer2 = Number(document.getElementById("numer2").value);
  const operator = document.getElementById("operator").value;
  let result;
  
  switch (operator) {
  case "+":
  result = numer1 + numer2;
  break;
  case "-":
  result = numer1 - numer2;
  break;
  case "x":
  result = numer1 * numer2;
  break;
  case "/":
  result = numer2 === 0 ? "Error: división por cero" : numer1 / numer2;
  break;
  default:
  result = "El parámetro no es reconocido";
  break;
  }
  
  document.getElementById("result").innerHTML = result;
  };
  
  document.getElementById("calculate").addEventListener("click", calculator);
