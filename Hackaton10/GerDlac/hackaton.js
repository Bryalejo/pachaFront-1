//Crea una función que retorne la suma de dos números. 
let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);

function hacerSuma() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let s = n1 + n2;
    respuesta.innerHTML = `la suma es ${s}`;

}

//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
let enviar = document.getElementById('enviar');
let total = document.getElementById('total');

enviar.addEventListener('click', potencia);

function potencia() {
    let base = parseFloat(document.getElementById('base').value);
    let exponente = parseFloat(document.getElementById('exponente').value);
    let resultado = 1
    for (let i = 0; i < exponente; i++) {
        resultado *= base
    }
    total.innerHTML = `el calculo es ${resultado}`;
}

//Crea una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
let sum = document.getElementById('suma');
let respuest = document.getElementById('respuest');

suma.addEventListener('click', sumaCubos);

function sumaCubos() {
    let sum1 = parseFloat(document.getElementById(sum1).value);
    let sum2 = parseFloat(document.getElementById(sum2).value);
    let sum3 = parseFloat(document.getElementById(sum3).value);
    let sumOfCubes = (1, 5, 9) 
    for (let i = 0; i <=sumOfCubes; ++i) {
        res += Math.pow(i, 3);
        
    }
    suma.innerHTML = `la suma de sus cubos es${sumOfCubes}`;
}


//Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3
let área = document.getElementById('área');
let resp = document.getElementById('resp');

área.addEventListener('click', triangulo);

function triangulo() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let triArea = (3 * 2) / 2;
    resp.innerHTML = `su área es ${triArea}`;
}

//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4




