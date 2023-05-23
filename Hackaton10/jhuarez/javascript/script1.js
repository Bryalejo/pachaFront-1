//Ejercicio 1, usando funcion reduce de array. Si se quiere sumar mas numeros solo se cambia a un array infinito
function ejercicio1() {

let ej1num1 = parseInt(document.getElementById('ej1num1').value);
let ej1num2 = parseInt(document.getElementById('ej1num2').value);

let numbers = [ej1num1, ej1num2];
let sum = numbers.reduce(sum_reducer, 0);

document.getElementById("ej1rpta").innerHTML = "La suma es: "+sum;

}

//funciones adicionales

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }

//Ejercicio 2 
function ejercicio2() {

    let ej2num1 = parseInt(document.getElementById('ej2num1').value);
    let ej2num2 = parseInt(document.getElementById('ej2num2').value);
    
    let pow=Math.pow(ej2num2,ej2num1);
    
    document.getElementById("ej2rpta").innerHTML = "La potencia de "+ej2num2+" a la "+ej2num1+" es: "+pow;
    
    }

//Ejercicio 3
let ej3numbers=[];
let ej3i=0;

function ejercicio3(){
    let pow3 = ej3numbers.reduce(pow3_reducer,0);
    document.getElementById("ej3rpta").innerHTML = "La suma de cubo de los numeros es: "+pow3;
}

//ejercicio3  adicionales
function ejercicio3ingresar(){
    ej3numbers.push(parseInt(document.getElementById('ej3num1').value));
    document.getElementById("ej3numeros").innerHTML = "Los numeros ingresados son: "+(ej3numbers.join(", "));
}

function ejercicio3reset(){
    ej3numbers=[];
    document.getElementById("ej3numeros").innerHTML = "Se han borrado todos los numeros";
    document.getElementById("ej3rpta").innerHTML = "";
}

function pow3_reducer(accumulator, currentValue){
    return (accumulator + Math.pow(currentValue, 3));
}

//Ejercicio 4

function ejercicio4(){

    let ej4num1 = parseFloat(document.getElementById('ej4num1').value);
    let ej4num2 = parseFloat(document.getElementById('ej4num2').value);
    

    document.getElementById("ej4rpta").innerHTML = "El area del trianuglo es: "+(ej4num1*ej4num2)/2+" cm cuadrados";    
}

//Ejercicio 5

function ejercicio5(){

    let ej5num1 = parseFloat(document.getElementById('ej5num1').value);
    let ej5num2 = parseFloat(document.getElementById('ej5num2').value);
    let ej5oper = document.getElementById('ej5oper').value;
    let ej5rpta='';

    console.log(ej5oper);
    console.log(typeof(ej5oper))

    switch (ej5oper){
        case '+': ej5rpta=ej5num1+ej5num2; break;
        case '-': ej5rpta=ej5num1-ej5num2; break;
        case '*': ej5rpta=ej5num1*ej5num2; break; 
        case '/': ej5rpta=ej5num1/ej5num2; break;
        default : ej5rpta="invalido por que el parametro no es reconocido";
    }
    

    document.getElementById("ej5rpta").innerHTML = "El resultado de la operacion es "+ej5rpta;    
}






