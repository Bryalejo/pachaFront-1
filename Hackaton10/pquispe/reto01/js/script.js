
// --- Funciones Arrow ---
const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const sumOfCubes = (...nums) => nums.reduce((acumulador, num) => suma(acumulador, Math.pow(num, 3)), 0);

const triArea = (base, altura) => division(multiplicacion(Math.abs(base), Math.abs(altura)), 2);

const calculator = (num1, operador, num2) => {
    switch(operador) {
        case '+':
            return suma(num1, num2);
        case '-':
            return resta(num1, num2);
        case 'x':
            return multiplicacion(num1, num2);
        case '%':
            return division(num1, num2);
        default:
            throw new Error("El parámetro no es reconocido.");
    };
};



// --- Selección de elementos del DOM ---
const btn01 = document.querySelector('#btn01');
const btn02 = document.querySelector('#btn02');
const btn03 = document.querySelector('#btn03');
const btn04 = document.querySelector('#btn04');
const btn05 = document.querySelector('#btn05');

const result01 = document.querySelector('#resultado01');
const result02 = document.querySelector('#resultado02');
const result03 = document.querySelector('#resultado03');
const result04 = document.querySelector('#resultado04');
const result05 = document.querySelector('#resultado05');



// --- Algoritmo Ejercicio 01 ---
btn01.addEventListener("click", () => {
    let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));

    try {
        if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
            let resultado = suma(primerNumero, segundoNumero);
        
            window.alert(resultado);
            result01.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});




// --- Algoritmo Ejercicio 02 ---
btn02.addEventListener("click", () => {
    let numeroIngresado = parseFloat(prompt("Ingrese el número a potenciar:"));
    let potenciaIngresada = parseInt(prompt("Ingrese la potencia:"));

    try {
        if (!isNaN(numeroIngresado) && !isNaN(potenciaIngresada)) {
            let resultado = Math.pow(numeroIngresado, potenciaIngresada);

            window.alert(resultado);
            result02.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});




// --- Algoritmo Ejercicio 03 ---
btn03.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            sumOfCubes(1, 5, 9) => ${sumOfCubes(1, 5, 9)}<br><br>
            sumOfCubes(8, 6, -2, 10) => ${sumOfCubes(8, 6, -2, 10)}<br><br>
            sumOfCubes(20, 5.5) => ${sumOfCubes(20, 5.5)}<br><br>
            sumOfCubes(9, 6, -5 ) => ${sumOfCubes(9, 6, -5)}
        `;

    result03.innerHTML = `<br><br>Resultado: ${resultado}`;
});




// --- Algoritmo Ejercicio 04 ---
btn04.addEventListener("click", () => {
    let baseIngresada = parseFloat(prompt("Ingrese la medida de la base del triángulo:"));
    let alturaIngresada = parseFloat(prompt("Ingrese la medida de la altura del triángulo:"));

    try {
        if (!isNaN(baseIngresada) && !isNaN(alturaIngresada)) {
            let resultado = triArea(baseIngresada, alturaIngresada);

            window.alert(resultado);
            result04.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});




// --- Algoritmo Ejercicio 05 ---
btn05.addEventListener("click", () => {
    let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación matemática: +, -, x, %");

    try {
        if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
            let resultado = calculator(primerNumero, operacion, segundoNumero);

            window.alert(resultado);
            result05.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});
