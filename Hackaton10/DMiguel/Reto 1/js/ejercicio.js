const titleEjercicio = document.getElementById("title_ejercicio");
const problemEjercicio = document.getElementById("content_ejeercicio");

const contentEjercicio = document.getElementById("form-ejercicio");
const rptaEjercicio = document.getElementById("resultado");

const ejecutar = document.getElementById('ejecutar');

function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function getPlaceholderArray(texto = [], id ="id"){
    for (let i = 1; i < texto.length+1; i++) {
        document.getElementById(id + i.toString()).placeholder = texto[i-1];
    }
}

function createContentEjercicio(numberEjer = "",problem = "",etiquetas = "", cantidad = 2) {
    titleEjercicio.textContent = numberEjer;
    problemEjercicio.textContent = problem;
    etiquetas = repeatText(etiquetas, cantidad);
    contentEjercicio.innerHTML = etiquetas;
}

function createInputsN(){
    const text = '<label for="dato_i">Numero _i</label><input id="dato_i" type="text" class="form-control">'
    const createInputN = document.getElementById("form-ejercicio");
    const countInput = parseInt(document.getElementById("createInput").value);
    let resultado = "";
    for (let i = 1; i <= countInput; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    createInputN.innerHTML = resultado;
    return countInput;
}

function ejercicio_1() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1 + dato2;
    rptaEjercicio.innerText = `La suma de los dos numeros es ${rpta}.`;
}

function ejercicio_2() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1**dato2;
    rptaEjercicio.innerText = `La potencia al ${dato2} de ${dato1} es ${rpta}.`;
}

function ejercicio_3() {
    i=1;
    let rpta = 0
    while (document.getElementById("dato"+i)) {
        numero = parseInt(document.getElementById("dato"+i).value);
        console.log(numero);
        rpta += numero**3;
        i++;
    }
    rptaEjercicio.innerText = `El resultado de la suma de los numeros al cubo es ${rpta}.`;
}

function ejercicio_4() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1*dato2/2;
    rptaEjercicio.innerText = `El area del triangulo es ${rpta}.`;
}

function ejercicio_5() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let operacion= document.getElementById('dato2').value;
    let dato2 = parseInt(document.getElementById('dato3').value);
    let resultado = 0;
    switch (operacion) {
        case "+":
            resultado = dato1 + dato2;
            break;
        case "-":
            resultado = dato1 - dato2;
            break;
        case "/":
            resultado = dato1 / dato2;
            break;
        case "*":
            resultado = dato1 * dato2;
            break;
        case "%":
            resultado = dato1 % dato2
            break;
        default:
            resultado = "La operacion ingresada es desconocida";
            break;
    }
    rptaEjercicio.innerText = `El resultado de la operacion es  ${resultado}.`;
}

const etiquetas = '<label for="dato_i">Datos _i</label><input id="dato_i" type="text" class="form-control">'

const params = new URLSearchParams(window.location.search);
const nombreEjercicio = params.get('ejercicio');

switch (nombreEjercicio) {
    case 'ejercicio1':        
        console.log("Estamos en el ejercicio 1");
        problem = "Crea una función que retorne la suma de dos números.";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_1);
        break;
    case 'ejercicio2':
        console.log("Estamos en el ejercicio 2");
        problem = "Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_2);
        break;
    case 'ejercicio3':
        console.log("Estamos en el ejercicio 3");
        problem = "Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855";
        espEtiqueta = '<label for="createInput">Cantidad de Numeros</label><input id="createInput" type="text" class="form-control"><a id="newInputs" class="btn btn-primary">Crear</a>'
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,espEtiqueta,1);
        const newInput = document.getElementById("newInputs");
        newInput.addEventListener('click',createInputsN);
        ejecutar.addEventListener('click', ejercicio_3);
        break;
    case 'ejercicio4':
        problem = "Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_4);
        console.log("Estamos en el ejercicio 4");
        break;
    case 'ejercicio5':
        console.log("Estamos en el ejercicio 5");
        problem = "Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,3);
        getPlaceholderArray(["Numero 1","Signo de Operacion","Numero 2"],"dato");
        ejecutar.addEventListener('click', ejercicio_5);
        break;
    default:
        console.log('Ejercicio no reconocido');
        break;
}