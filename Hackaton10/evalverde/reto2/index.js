console.log("sincronizado")
//1-Utilizando función arrow, crear una función que reciba como parámetros un
// nombre, apellido y edad y los retorne en un string concatenado 
//“Hola mi nombre es sebastián yabiku y mi edad 33”
const datos=(nombre,apellido,edad)=> console.log(`Hola mi nombre es ${nombre} ${ apellido} y mi edad ${edad}`)

datos("sebastian","yabiku" ,33)
//2-Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sumOfCubes=(num1,num2,num3)=> Math.pow(num1,3)+Math.pow(num2,3)+Math.pow(num3,3)
console.log(sumOfCubes(1, 5, 9))

//Crear una funcion que me retorne el tipo de valor entregado, 
//invocar la función para los distintos tipos de js
function getType(value) {
  return typeof value;
}
console.log(getType(5));
console.log(getType("Hola"));

//Crear una función que reciba n cantidad de argumentos y los sume 
//( utilizar parametros rest)
function sumarNumeros(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}
console.log(sumarNumeros(1, 2, 3));

//Crear una función que reciba un array de valores y filtre los 
//valores que no son string
function NoString(arr) {
  return arr.filter(value => typeof value === 'string');
}
const values = [1, 'Hello', true, 'world', 5, 'JavaScript'];
const respuesta = NoString(values);
console.log(respuesta);


//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (numeros) => [Math.min(...numeros), Math.max(...numeros)];
let numeros=[1,2,3,4,5]

console.log(minMax(numeros))


//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de
// teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

let formatPhoneNumber = (numeros) 
numeros =[1,2,3,4,5,6,7,8,9,0]
console.log(`(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`)

//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número
// de cada uno. findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

let numbers= [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
console.log (`${Math.max(...numbers[0])}, ${Math.max(...numbers[1] ) }, ${Math.max(...numbers[2] )} ` )

//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3] .  The first "l" has index 2, the last "l" has index 3.
const charIndex=(palabra)=> word=palabra.split("")

console.log (charIndex("hello"))
console.log (word[2],word[3])

//Escriba una función que convierta un objeto en una matriz, donde
// cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const toArray = obj => Object.entries(obj);

let objeto = { a: 1, b: 2 };
let resultado = toArray(objeto);
console.log(resultado);
//Cree la función que toma una matriz con objetos y devuelve la suma 
//de los presupuestos de las personas.
//getBudgets([
  //{ name: "John", age: 21, budget: 23000 },
  //{ name: "Steve",  age: 32, budget: 40000 },
 // { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
function getBudgets(name,age, budget){
    this.name=name;
    this.age=age;
    this.budget=budget;
}
let persona1 = new getBudgets("john", 21,23000)
console.log(persona1)
let persona2 = new getBudgets("steve", 32,40000)
console.log(persona2)
let persona3 = new getBudgets("Martin", 16,2700)
console.log(persona3)
console.log (persona1.budget+persona2.budget+persona3.budget )


//Cree una función que tome una matriz de estudiantes y devuelva una 
//matriz de nombres de estudiantes.
//getStudentNames([
 // { name: "Steve" },
  //{ name: "Mike" },
  //{ name: "John" }
//]) ➞ ["Becky", "John", "Steve"]
function getStudentNames(name){
    this.name=name;
}
let student1 =new getStudentNames("Steve")
let student2 =new getStudentNames("Mike")
let student3 =new getStudentNames("John")
console.log (student1.name,student2.name,student3.name)

//Escriba una función que convierta un objeto en una matriz de claves
// y valores.
//objectToArray({
  //likes: 2,
 // dislikes: 3,
 // followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
let objectToArray={
    likes: 2,
  dislikes: 3,
  followers: 10
};
console.log(Object.entries(objectToArray))
//Cree una función donde, dado el número n, devuelva la suma de todos 
//los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
let sumaPoten=0
const numero=(valor)=>{for (let i = 1; i <= valor; i++) {
    sumaPoten += i ** 2;
     console.log(sumaPoten)
}
}
 console.log(numero(8))

// Cree una función para multiplicar todos los valores en una matriz 
//por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
function multiplyByLength(arr){
  const length=arr.length;
  const multiplicaArr =arr.map (e=>e * length)
  return(multiplicaArr)

}

console.log (multiplyByLength([2,3,1,0]))


//Cree una función que tome un número como argumento y devuelva una 
//matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
function countdown(numero){
  const counter=[]
  for (let i=numero ; i>=0; i--)
  counter.push(i)
  return counter
}

console.log(countdown(4))
//Cree una función que tome una matriz y devuelva la diferencia entre 
//los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
function diffMaxMin(arr){
  const grande = Math.max(...arr);
  const peque = Math.min(...arr);
  const diferencia =grande - peque
  return diferencia
}
console.log(diffMaxMin([1,2,3,4,5,6]))

//Cree una función que filtre las cadenas de una matriz y devuelva
// una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
function filterList(arr){
  const filtrar = arr.filter(item => typeof item === `number`);
  return filtrar
}
console.log(filterList([1, 2, 3, "x", "y", 10]))

//Cree una función que tome dos argumentos (elemento, tiempos). 
//El primer argumento (elemento) es el elemento que necesita 
//repetirse, mientras que el segundo argumento (veces) es la cantidad
// de veces que se debe repetir el elemento. Devuelve el resultado en
// una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(element,veces){
  const result=[]
  for (let i =0; i<veces;i++){
    result.push(element)
  }
  return result;
}
console.log(repeat(13,5))
//Escriba una función, .vreplace () que extienda el prototipo de 
//cadena reemplazando todas las vocales en una cadena con una vocal 
//especificada. "apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(frase) {
  return this.replace(/[aeiou]/gi, frase);
};
const result = "apples and bananas".vreplace("u");
console.log(result);
//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y 
//devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la
// palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
function findNemo(frase){
  const buscar = frase.split("").indexOf("Nemo");
  if (buscar !== -1) {
    const position = buscar + 1;
    return `I found Nemo at ${position}!`;
  } else {
    return "Nemo not found :(";
  }
}

 

console.log(findNemo(`I am finding Nemo !`))

//Cree una función que capitalice la última letra de cada palabra.

//capLast("hello") ➞ "hellO"
String.prototype.vreplace=function(palabra){
const dato=this.split("");
dato[dato.length - 1] = palabra;
return dato.join(" ")
}
const resp = `hello`.vreplace(`I`)
console.log(resp)
