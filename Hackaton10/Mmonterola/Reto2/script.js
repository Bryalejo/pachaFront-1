// PREGUNTA 1 // 

const mostrarMensaje = (nombre, apellido, edad) => {
  const mensaje = `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
  return mensaje;
}

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const resultado = mostrarMensaje(nombre, apellido, edad);
  document.getElementById("resultado").textContent = resultado;
});


// PREGUNTA 2 // 

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
  const resultado = document.getElementById('resultado1');

  resultado.textContent = `La suma de los cubos de los números ingresados es: ${sumaCubos}`;
};

// Eventos
document.getElementById('cantidad-numeros').addEventListener('input', mostrarCamposNumeros);
document.getElementById('sumar-cubos').addEventListener('click', sumarCubos);

// PREGUNTA 3 //

const calcularTipo = (valor) => {
  return typeof valor;
};

const botonn = document.getElementById('botonn');
botonn.addEventListener('click', () => {
  const inputValor = document.getElementById('input-valor').value;
  const tipoValor = calcularTipo(inputValor);
  document.getElementById('resultado2').textContent = `El tipo de dato de "${inputValor}" es ${tipoValor}`;
});

// PREGUNTA 4 //

const sum = (...numbers) => numbers.reduce((total, num) => total + Number(num), 0);

const form = document.getElementById('sum-form');
const result = document.getElementById('resultado3');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const numbers = document.getElementById('num-input').value.split(',');
  const total = sum(...numbers);
  result.textContent = `El resultado de la suma es: ${total}`;
});

// PREGUNTA 5 //

function ejercicio5() {
  const valuesInput = document.getElementById("values");
  const resultOutput = document.getElementById("resultado4");

  // Obtener los valores del input y convertirlos en un array
  const values = valuesInput.value.split(",");

  // Filtrar los valores que no son string
  const filteredValues = values.filter((value) => typeof value === "string");

  // Mostrar el resultado en el output
  resultOutput.innerHTML = filteredValues.join(", ");
}
// PREGUNTA 6 //

function ejercicio6() {
  const minMax = () => {
    const n = parseInt(prompt("¿Cuántos números deseas ingresar?"));
    const num = [];

    for (let i = 0; i < n; i++) {
      let numeroIngresado = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      num.push(numeroIngresado);
    }

    const min = Math.min(...num);
    const max = Math.max(...num);
    return [min, max];
  }

  const minMaxNumbers = minMax();
  alert(minMaxNumbers);
}

// PREGUNTA 7 //
function ejercicio7() {
  const formatPhoneNumber = () => {
    const num = [];

    for (let i = 0; i < 10; i++) {
      let numeroIngresado = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      num.push(numeroIngresado);
    }

    const numberStr = num.join("");
    const formattedNumber =
      "(" +
      numberStr.substring(0, 3) +
      ") " +
      numberStr.substring(3, 6) +
      "-" +
      numberStr.substring(6);

    return formattedNumber;
  }

  const numeroTelefono = formatPhoneNumber();
  alert(numeroTelefono);
}

// PREGUNTA 8 //

function ejercicio8() {
  const findLargestNums = () => {
    var subMatrixCount = parseInt(prompt("¿Cuántas submatrices de 4 números deseas ingresar?"));
    var matrix = [];

    for (var i = 0; i < subMatrixCount; i++) {
      var subMatrix = [];

      for (var j = 0; j < 4; j++) {
        var number = parseInt(prompt("Ingrese el número " + (j + 1) + " de la submatriz " + (i + 1) + ":"));
        subMatrix.push(number);
      }

      matrix.push(subMatrix);
    }

    var largestNums = [];

    for (var k = 0; k < matrix.length; k++) {
      var subArray = matrix[k];
      var largestNum = Math.max(...subArray);
      largestNums.push(largestNum);
    }

    return largestNums;
  }

  const SubMatrix = findLargestNums();
  alert(SubMatrix);
}

// PREGUNTA 9 //

function ejercicio9() {
  const charIndex = (word, character) => {

    var firstIndex = word.indexOf(character);
    var lastIndex = word.lastIndexOf(character);

    var indices = `The first "${character}" has index ${firstIndex}, the last "${character}" has index ${lastIndex}.`;
    return indices;
  }

  // Ejemplo de uso
  var word = prompt("Ingrese una palabra:");
  var character = prompt("Ingrese un carácter:");
  var indices = charIndex(word, character);
  alert(indices);
}

// PREGUNTA 10 //

function ejercicio10() {
  const toArray = () => {

    var obj = {};
    var pairs = [];

    var n = parseInt(prompt("¿Cuántos pares clave-valor deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var key = prompt("Ingrese la clave:");
      var value = prompt("Ingrese el valor:");
      obj[key] = value;
      pairs.push([key, value]);
    }

    return pairs;
  }

  // Ejemplo de uso
  var pairsArray = toArray();
  alert(pairsArray);
}

// PREGUNTA 11 //

function ejercicio11() {
  const getBudgets = () => {

    var people = [];
    var totalBudget = 0;

    var n = parseInt(prompt("¿Cuántas personas deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var name = prompt("Ingrese el nombre de la persona " + (i + 1) + ":");
      var age = parseInt(prompt("Ingrese la edad de " + name + ":"));
      var budget = parseInt(prompt("Ingrese el presupuesto de " + name + ":"));

      var person = { name: name, age: age, budget: budget };
      people.push(person);
      totalBudget += budget;
    }

    return totalBudget;
  }

  // Ejemplo de uso
  var total = getBudgets();
  alert(total);
}

// PREGUNTA 12 //

function ejercicio12() {
  const getStudentNames = () => {

    var students = [];

    var n = parseInt(prompt("¿Cuántos estudiantes deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var name = prompt("Ingrese el nombre del estudiante " + (i + 1) + ":");
      var student = { name: name };
      students.push(student);
    }

    var names = students.map(function (student) {
      return student.name;
    });

    return names;
  }

  // Ejemplo de uso
  var studentNames = getStudentNames();
  alert(studentNames);
}

// PREGUNTA 13 //

function ejercicio13() {
  const objectToArray = () => {

    var obj = {};
    var pairs = [];

    var n = parseInt(prompt("¿Cuántos pares clave-valor deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var key = prompt("Ingrese la clave:");
      var value = parseInt(prompt("Ingrese el valor:"));
      obj[key] = value;
      pairs.push([key, value]);
    }

    return pairs;
  }

  // Ejemplo de uso
  var object = objectToArray();
  alert(object);
}

// PREGUNTA 14 //

function ejercicio14() {
  const squaresSum = () => {

    var n = parseInt(prompt("Ingrese un número:"));
    var sum = 0;

    for (var i = 1; i <= n; i++) {
      sum += i ** 2;
    }

    return sum;
  }

  // Ejemplo de uso
  var result = squaresSum();
  alert(result);
}

// PREGUNTA 15 //

function ejercicio15() {
  const multiplyByLength = () => {

    var numbers = [];
    var multipliedNumbers = [];

    var n = parseInt(prompt("¿Cuántos números deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var number = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      numbers.push(number);
    }

    var length = numbers.length;

    for (var j = 0; j < length; j++) {
      multipliedNumbers.push(numbers[j] * length);
    }

    return multipliedNumbers;
  }

  // Ejemplo de uso
  var result = multiplyByLength();
  alert(result);
}

// PREGUNTA 16 //

function ejercicio16() {
  const countdown = () => {

    var n = parseInt(prompt("Ingrese un número:"));
    var numbers = [];

    for (var i = n; i >= 0; i--) {
      numbers.push(i);
    }

    return numbers;
  }

  // Ejemplo de uso
  var result = countdown();
  alert(result);
}

// PREGUNTA 17 //

function ejercicio17() {
  const diffMaxMin = () => {

    var numbers = [];
    var n = parseInt(prompt("¿Cuántos números deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var number = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
      numbers.push(number);
    }

    var max = Math.max(...numbers);
    var min = Math.min(...numbers);
    var difference = max - min;

    return difference;
  }

  // Ejemplo de uso
  var result = diffMaxMin();
  alert(result);
}

// PREGUNTA 18 //

function ejercicio18() {
  const filterList = () => {

    var values = [];
    var n = parseInt(prompt("¿Cuántos elementos deseas ingresar?"));

    for (var i = 0; i < n; i++) {
      var value = prompt("Ingrese el elemento " + (i + 1) + ":");
      values.push(parseInt(value));
    }

    var filteredList = values.filter(function (element) {
      return typeof element === 'number' && Number.isInteger(element);
    });

    return filteredList;
  }

  // Ejemplo de uso
  var result = filterList();
  alert(result);
}

// PREGUNTA 19 //

function ejercicio19() {
  const repeat = (elemento, veces) => {

    var resultado = [];

    for (var i = 0; i < veces; i++) {
      resultado.push(elemento);
    }

    return resultado;

  }

  // Ejemplo de uso
  var elemento = parseInt(prompt("Ingrese el elemento:"));
  var veces = parseInt(prompt("Ingrese la cantidad de veces:"));
  var resultado = repeat(elemento, veces);
  alert(resultado);
}

// PREGUNTA 20 //

function ejercicio20() {
  Object.prototype.vreplace = function (vocalReemplazo) {
    return this.replace(/[aeiou]/gi, vocalReemplazo);
  };

  // Ejemplo de uso
  var str = prompt("Ingrese una cadena de texto:");
  var vocalReemplazo = prompt("Ingrese la vocal de reemplazo:");

  var resultado = str.vreplace(vocalReemplazo);
  alert(resultado);
}

// PREGUNTA 21 //

function ejercicio21() {
  const findNemo = (cadena) => {

    var palabras = cadena.split(" ");
    var indiceNemo = palabras.indexOf("Nemo");

    if (indiceNemo !== -1) {
      var ordenPalabra = indiceNemo + 1;
      return "Encontré a Nemo en " + ordenPalabra + "!";
    } else {
      return "Nemo no encontrado :(";
    }
  }

  // Ejemplo de uso
  var cadena = prompt("Ingrese una cadena de palabras:");
  var resultado = findNemo(cadena);
  alert(resultado);
}

// PREGUNTA 22 //

function ejercicio22() {
  const capLast = (str) => {

    var palabras = str.split(" ");
    var resultado = [];

    for (var i = 0; i < palabras.length; i++) {
      var palabra = palabras[i];
      var ultimaLetra = palabra.charAt(palabra.length - 1);
      var palabraCapitalizada = palabra.slice(0, -1) + ultimaLetra.toUpperCase();
      resultado.push(palabraCapitalizada);
    }

    return resultado.join(" ");
  }

  // Ejemplo de uso
  var str = prompt("Ingrese una cadena de texto:");
  var resultado = capLast(str);
  alert(resultado);
}