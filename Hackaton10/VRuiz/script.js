// Crea una función que retorne la suma de dos números
let boton = document.getElementById('suma');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);
console.log("sumando")
function hacerSuma (){
    let numero1=parseFloat(document.getElementById('numero1').value);
    let numero2=parseFloat(document.getElementById('numero2').value);
    
    let s=numero1+numero2;
    respuesta.innerHTML= `la suma es ${s}`; 
}


// Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar
let enviar = document.getElementById('enviar');
let resultado = document.getElementById('resultado');

enviar.addEventListener('click', hacerPotencia);
console.log("potencia")
function hacerPotencia (){
    let base=parseFloat(document.getElementById('base').value);
    let exponente=parseFloat(document.getElementById('exponente').value);
     r = base**exponente; 
    resultado.innerHTML= `la potencia es ${r}`;
}



// Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
let enviar2 = document.getElementById('enviar2');
let resultado2 = document.getElementById('resultado2');

enviar2.addEventListener('click', hacersumaPotencia);
console.log("suma de potencia")
function hacersumaPotencia (){
    let base1=parseFloat(document.getElementById('base1').value);
    let exponente1=parseFloat(document.getElementById('exponente1').value);
     r1 = base1**exponente1; 
    let base2=parseFloat(document.getElementById('base2').value);
    let exponente2=parseFloat(document.getElementById('exponente2').value);
     r2 = base2**exponente2;
    let base3=parseFloat(document.getElementById('base3').value);
    let exponente3=parseFloat(document.getElementById('exponente3').value);
     r3 = base3**exponente3;

    resultado2.innerHTML= `la suma de potencia es ${r1+r2+r3}`;
}


// Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
let enviar3 = document.getElementById('enviar3');
let resultado3 = document.getElementById('resultado3');

enviar3.addEventListener('click', areatri);
console.log("area del triangulo")
function areatri(){
    let basetri=parseFloat(document.getElementById('basetri').value);
    let altura=parseFloat(document.getElementById('altura').value);
     rtri = basetri*altura/2; 
    resultado3.innerHTML= `El area del triangulo es ${rtri}`;
}


// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática
let enviar4 = document.getElementById('enviar4');
let resultado4 = document.getElementById('resultado4');

enviar4.addEventListener('click', calcula);

function calcula(){
    let primernumero = 0;
    let segundonumero = 0;
    let operacion = "";
    let respu=0;

switch(operacion){

    case 'suma':
        respu = primernumero + segundonumero;
        break;
    case 'resta':
        respu = primernumero - segundonumero;
        break;
    
    case 'multiplicacion':
        respu = primernumero * segundonumero;
        break;

    case 'division':
        respu = primernumero / segundonumero;
        break;


}

resultado4.innerHTML = ` Es ${respu}`;

}



