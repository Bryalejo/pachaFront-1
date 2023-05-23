console.log("sincornizado")
//Crea una función que retorne la suma de dos números. 
const suma=(a,b) => a+b
console.log(suma(2,3))
//Crea una función que retorne la potencia de un número dado, esta función 
//deberá recibir la potencia y el número a potenciar. 
const potencia=(num,exp) => Math.pow(num,exp)
console.log(potencia(2,3))
//Crea una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumOfCubes=(num1,num2,num3)=> Math.pow(num1,3) + Math.pow(num2,3) +Math.pow(num3,3)
console.log(sumOfCubes(1,5,9))
//Escribe una función que tome la base y la altura de un triángulo y devuelva
// su área. triArea(3, 2) ➞ 3
const triArea=(b,a)=>((b*a)/2)
console.log(triArea(3,2))
//Crea una función llamada calculator que recibe 3 parámetros, dos números y una 
//operación matemática (+,-,/,x,%), y si la operación no es correcta que envié u
// mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
const calculator=(num1,num2,op)=>{
    switch(op){
        case "+":{
            return num1+num2
        }
        case "-":{
            return num1-num2
        }case "*":{
            return num1*num2
        }
        case "/":{
            return num1/num2
        }
        default : console.log("El parámetro no es reconocido")
    }
}
console.log (calculator(2,2,"-"))

