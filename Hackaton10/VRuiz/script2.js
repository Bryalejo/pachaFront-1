// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad.
let enviar = document.getElementById('enviar');
let respuesta = document.getElementById('respuesta');

enviar.addEventListener('click', persona);

function persona (){
    let nombre=parseFloat(document.getElementById('nombre').value);
    let apellido=parseFloat(document.getElementById('apellido').value);
    let edad=parseFloat(document.getElementById('edad').value);

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    if(isNaN(respuesta)){
        respuesta.innerHTML= `Hola, mi nombre es    ${this.nombre}   ${this.apellido}  y tengo   ${this.edad}`;
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
       }
      
    
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



// Crea una función que retorne la suma de dos números
let boton = document.getElementById('suma');
let respuest = document.getElementById('respuest');

boton.addEventListener('click', hacerSuma);
console.log("sumando")
function hacerSuma (){
    let numero1=parseFloat(document.getElementById('numero1').value);
    let numero2=parseFloat(document.getElementById('numero2').value);

    let s =numero1+numero2;

    respuest.innerHTML= `la suma es ${s}`;
    return s ;

    
}


// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
let solu = document.getElementById('solu');
let a= 5;
let b= 96;
let c= 3;
let d= 4;
let e= 2;

function miLista (a, ...otrosElementos){
    console.log("REST");
    console.log("a="+a);
    console.log("Resto de elementos de la lisat: ", otrosElementos);
    console.log("Tamaño: "+otrosElementos.length);
    console.log(otrosElementos[2]);

    let r = (a)+(b)+(c)+(d)+(e); 
    solu.innerHTML= `la suma es ${r}`;
}

miLista("5", "96", "3", "4","2");

















