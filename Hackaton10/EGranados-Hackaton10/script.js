function suma(num1, num2){
    let suma = num1 + num2;
    return suma
}

function potencia(numero, pot){
    let potencia = Math.pow(numero,pot);
    return potencia
}

function sumOfCubes(num1,num2,num3){
    let sumPotencia = Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3, 3);
    return sumPotencia
}

function triArea(base,altura){
    let area = (base * altura)/2;
    return area
}

function calculator(num1,num2,operacion){
    switch(operacion){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            return "El parámetro no es reconocido"
    }
}

const resultado1 = suma(3,4);
console.log(resultado1);
const resultado2 = potencia(8,9);
console.log(resultado2);
const resultado3 = sumOfCubes(3,4,5);
console.log(resultado3);
const resultado4 = triArea(6,8);
console.log(resultado4);
const resultado5 = calculator(3,4,"+");
console.log(resultado5);

