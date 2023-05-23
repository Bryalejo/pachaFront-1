function ejercicio1(){
    let num1 = '';
    let num2 = '';
    let suma = '';

    num1 = parseInt(prompt("Ingresar Primer Número"));
    num2 = parseInt(prompt("Ingresar Segundo Número"));

    suma = num1 + num2;
      
    alert(num1 + " + " + num2 + " = " + suma);
}

function ejercicio2(){
    let num = '';
    let pote = '';
    let resultado = '';

    num = parseInt(prompt("Ingresar el Número"));
    pote = parseInt(prompt("Ingresar el Exponente"));

    resultado = Math.pow(num, pote);

    alert("Respuesta: " + resultado);

}

function ejercicio3(){
    let num1 = '';
    let num2 = '';
    let num3 = '';

    num1 = parseInt(prompt("Ingresar Primer Número"));
    num2 = parseInt(prompt("Ingresar Segundo Número"));
    num3 = parseInt(prompt("Ingresar Tercer Número"));

    const sumOfCubes = (...numeros) => {
        let suma = 0;
        numeros.forEach(numero => {
          suma += Math.pow(numero, 3);
        });
        return suma;
    }
      
    var resultado = sumOfCubes(num1, num2, num3);
    alert("El resultado es: " + resultado);

}

function ejercicio4(){

    let base = '';
    let altura = '';

    base = parseInt(prompt("Ingresar la Base"));
    altura = parseInt(prompt("Ingresar la Altura"));

    const calcularAreaTriangulo = (base, altura) => {
        return (base * altura) / 2;
    }

    const area = calcularAreaTriangulo(base, altura);
    alert("El area es: " + area);

}

function ejercicio5(){
    
    let num1 = '';
    let num2 = '';
    let operacion = '';

    num1 = parseInt(prompt("Ingresar el primer número"));
    operacion = prompt("Ingresar operación");
    num2 = parseInt(prompt("Ingresar el segundo número"));

    const calculator = (num1, operacion, num2) => {
        switch (operacion) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '/':
            return num1 / num2;
          case 'x':
            return num1 * num2;
          case '%':
            return num1 % num2;
          default:
            return 'El parámetro no es reconocido';
        }
    }

    const resultado = calculator(num1, operacion, num2);

    alert(resultado);

}