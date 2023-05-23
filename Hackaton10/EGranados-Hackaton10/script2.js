const persona = (name, lastname, age) =>{
    return "Hola mi nombre es " + name + " " + lastname + " y mi edad es " + age
}
console.log(persona("Eduardo","Granados",25))

const sumOfCubes = (num1, num2, num3) =>{
    let suma = Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3,3)
    return suma
}
console.log(sumOfCubes(1,2,3));

const typeOfValue = (arg) =>{
    return typeof arg
}
console.log(typeOfValue(1))
console.log(typeOfValue("Eduardo"));
console.log(typeOfValue(false));
console.log(typeOfValue([]));

const suma = (...numeros) =>{
    let total = 0;
    for(let numero of numeros){
        total += numero;
    }
    return total;
}
console.log(suma(2,3));
console.log(suma(2,3,4));

function filtrarNoStrings(valores) {
    return valores.filter((valor) => typeof valor === "string");
} 
console.log(filtrarNoStrings(["Hola",42,true,"Mundo"]));

const minMaxNumeros = (numeros) =>{
    return "El número menor es: " + Math.min(...numeros) + " y el número mayor es: " + Math.max(...numeros);
}
console.log(minMaxNumeros([10,5,2,17,3,25]));

function formatPhoneNumber(numeros) {
    const codigoArea = numeros.slice(0, 3).join("");
    const primerBloque = numeros.slice(3, 6).join("");
    const segundoBloque = numeros.slice(6).join("");
    return `(${codigoArea}) ${primerBloque}-${segundoBloque}`;
}
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

function findLargestNums(matriz) {
    const numerosMayores = [];
    for (let i = 0; i < matriz.length; i++) {
        const numeros = matriz[i];
        let numeroMayor = numeros[0];
        for (let j = 1; j < numeros.length; j++) {
            if (numeros[j] > numeroMayor) {
            numeroMayor = numeros[j];
        }
    }
    numerosMayores.push(numeroMayor);
    }
    return numerosMayores;
}
console.log(findLargestNums([[4,2,3,6],[20,70,40,50],[1,2,0]]))

function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}
console.log(charIndex("hello","l"))

function toArray(objeto) {
    const matriz = [];
    for (const [clave, valor] of Object.entries(objeto)) {
        matriz.push([clave, valor]);
    }
    return matriz;
}
console.log(toArray({a:1,b:2}))

function getBudgets(personas) {
    let sumaPresupuestos = 0;
    for (const persona of personas) {
        sumaPresupuestos += persona.budget;
    }
    return sumaPresupuestos;
}
const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
];
const sumaPresupuestos = getBudgets(personas);
console.log(sumaPresupuestos); 

function getStudentNames(estudiantes) {
    const nombres = estudiantes.map(estudiante => estudiante.name);
    return nombres;
}
const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
const nombresEstudiantes = getStudentNames(estudiantes);
console.log(nombresEstudiantes); 

function objectToArray(objeto) {
    const matriz = Object.entries(objeto);
    return matriz;
}

const objeto = {
    likes: 2,
    dislikes: 3,
    followers: 10
};
const matrizObjeto = objectToArray(objeto);
console.log(matrizObjeto); 

function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i ** 2;
    }
    return suma;
}
console.log(squaresSum(3));
console.log(squaresSum(4));

function multiplyByLength(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * arr.length);
    }
    return result;
}
console.log(multiplyByLength([2, 3, 1, 0]))

function countdown(num) {
    const result = [];
    for (let i = num; i >= 0; i--) {
        result.push(i);
    }
    return result;
}
console.log(countdown(5));

function diffMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
    }
        if (arr[i] < min) {
        min = arr[i];
    }
    }
    return max - min;
}
const arr = [10, 4, 1, 4, -10, -50, 32, 21];
const diff = diffMaxMin(arr);
console.log(diff);

function filterList(arr) {
    return arr.filter(function(item) {
        return typeof item === "number" && Number.isInteger(item);
    });
}
console.log(filterList([1, 2, 3, "x", "y", 10]));

function repeat(elemento, veces) {
    return Array(veces).fill(elemento);
}
console.log(repeat('Hola',3))

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
}
console.log("apples and bananas".vreplace("u"))

function findNemo(cadena) {
    const palabras = cadena.split(" ");
    const posicion = palabras.findIndex(palabra => palabra === "Nemo");
    if (posicion === -1) {
        return "¡No encontré a Nemo!";
    } else {
        return `¡Encontré a Nemo en ${posicion + 1}!`;
    }
}
console.log(findNemo("I am finding Nemo !"))

function capitalizarUltima(cadena) {
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = palabras.map(palabra => {
    const ultimaLetra = palabra.slice(-1).toUpperCase();
    const restoPalabra = palabra.slice(0, -1);
    return restoPalabra + ultimaLetra;
    });
    return palabrasCapitalizadas.join(" ");
}
console.log(capitalizarUltima("hola mundo"))