//Primer problema
function funsuma() {
  let number1 = '';
  let number2 = '';
  let suma = '';

  do {
    number1 = prompt("Ingresar el primer número");
  } while (isNaN(number1));

  do {
    number2 = prompt("Ingresar el segundo número");
  } while (isNaN(number2));

  suma = parseInt(number1) + parseInt(number2);

  window.open().document.write("La suma de " + number1 + " + " + number2 + " = " + suma);
}

//Segundo problema
function potencia(){
    let base = '';
    let exponente = '';
    let respuesta = '';

    base = parseInt(prompt("Ingrese la base"));
    exponente = parseInt(prompt("Ingresar el exponente"));

    respuesta = Math.pow(base, exponente);

    window.open().document.write(+ base + " elevado al exponente" + exponente + " es igual a " + respuesta);
}

//Tercer problema
function sumacubos(){
  let numeros = [];

  for (let i = 1; i <= 3; i++) {
    let num = prompt(`Ingresar ${i}° número`);
    if (isNaN(num)) {
      alert("Debe ingresar un número.");
      return;
    }
    numeros.push(parseInt(num));
  }

  const sumOfCubes = (...numeros) => {
      let suma = 0;
      numeros.forEach(numero => {
        suma += Math.pow(numero, 3);
      });
      return suma;
  }
    
  var resultado = sumOfCubes(...numeros);
  alert(`El resultado es ${resultado}`);

}

//Cuarto problema
function area() {
const areatri = (base, altura) => {
  return (base * altura) / 2;
}

let base = parseFloat(prompt("Ingrese la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

let area = areatri(base, altura);

alert(`El área del triángulo es ${area}`);
}

//Quinto problema

function calculator(){
    
    let numero1 = '';
    let numero2 = '';
    let operacion = '';

    numero1 = parseInt(prompt("Ingresar el primer número"));
    operacion = prompt("Ingresar operación");
    numero2 = parseInt(prompt("Ingresar el segundo número"));

    const calculator = (numero1, numero2, operacion) => {
      let resultado;
    
      switch (operacion) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
        case "%":
          resultado = numero1 % numero2;
          break;
        default:
          return "El parámetro no es reconocido";
      }
    }

    const resultado = calculator(numero1, operacion, numero2);

    alert(`El resultado es : ${resultado}` );
}