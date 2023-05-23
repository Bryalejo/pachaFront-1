/*
  Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
*/
const welcome = (nombre, apellido, edad) => {
	if (nombre === '' || apellido === '' || isNaN(edad)) return 'No puedes dejar vacio los campos.';
	if (nombre.length <= 1 || apellido <= 1) return 'El nombre o apellidos deben tener mas de 1 caracter.';
	if (edad < 1) return 'La edad debe ser mayor a 0.';
	return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
};

/*
  Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
 */
const sumOfCubes = (...args) => {
	const numbers = args;
	console.log(numbers);
	for (const i of numbers) {
		if (isNaN(i)) return 'Debes ingresar solo numeros';
	}
	const potenciados = numbers.map((num) => Math.pow(num, 3));
	console.log(potenciados);
	let suma = 0;
	for (const i of potenciados) {
		suma += i;
	}
	return suma;
};

/*
  Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
*/
const typeOF = (arg) => {
	if (arg === '') return 'No puedes dejar vacio los campos.';
	if (Array.isArray(arg)) return `${JSON.stringify(arg)} es un array`;
	if (typeof arg === 'object') return `${JSON.stringify(arg)} es un ${typeof arg}`;
	return `${[arg]} es un ${typeof arg}`;
};

/*
  Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
*/
const sumRest = (args) => {
	for (const i of args) {
		if (isNaN(i)) return 'Debes ingresar solo numeros';
	}
	let suma = 0;
	for (const i of args) {
		suma += i;
	}
	return suma;
};

/*
  Crear una función que reciba un array de valores y filtre los valores que no son string
*/
function parseArray(str) {
	// Eliminar los corchetes al inicio y al final del string
	str = str.replace(/^\[|\]$/g, '');

	// Separar los elementos por comas
	const elements = str.split(',');

	// Convertir cada elemento en su tipo correspondiente
	const arr = elements.map((element) => {
		const trimmedElement = element.trim();
		if (/^-?\d*\.?\d+$/.test(trimmedElement)) {
			return parseFloat(trimmedElement);
		} else if (/^"(.*?)"$/.test(trimmedElement)) {
			return trimmedElement.replace(/^"|"$/g, '');
		} else {
			return trimmedElement;
		}
	});

	return arr;
}
const filterStrings = (args) => {
	if (args === '') return 'No puedes dejar vacio los campos.';
	const arrayArg = parseArray(args);
	return arrayArg.filter((arg) => typeof arg !== 'string');
};

/*
  Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/
const minMax = (args) => {
	if (args === '') return 'No puedes dejar vacio los campos.';
	const arrayArg = parseArray(args);
	for (const i of arrayArg) {
		if (typeof i === 'string') return 'Debes ingresar solo numeros';
	}
	return `[${Math.min(...arrayArg)}, ${Math.max(...arrayArg)}]`;
};

/*
  Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
*/
const formatPhoneNumber = (args) => {
	if (args === '') return 'No puedes dejar vacio los campos.';
	const arrayArg = parseArray(args);
	for (const i of arrayArg) {
		if (typeof i === 'string') return 'Debes ingresar solo numeros';
		if (i < 0) return 'Solo puedes poner numeros positivos ';
		if (i > 10) return 'Solo puedes poner numeros de 1 digito';
	}
	const ISP = arrayArg.slice(0, 3);
	const number = arrayArg.slice(3, 10);
	number.splice(3, 0, '-');
	return `(${ISP.join('')}) ${number.join('')}`;
};

/*
  Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
*/
const findLargestNums = (arr1, arr2, arr3) => {
	if (arr1 === '' || arr2 === '' || arr3 === '') return 'No puedes dejar vacio los campos.';
	const arrayArg1 = parseArray(arr1);
	const arrayArg2 = parseArray(arr2);
	const arrayArg3 = parseArray(arr3);
	for (const i of arrayArg1) {
		if (typeof i === 'string') return 'Debes ingresar solo numeros';
	}
	for (const i of arrayArg2) {
		if (typeof i === 'string') return 'Debes ingresar solo numeros';
	}
	for (const i of arrayArg3) {
		if (typeof i === 'string') return 'Debes ingresar solo numeros';
	}
	const p1Max = Math.max(...arrayArg1);
	const p2Max = Math.max(...arrayArg2);
	const p3Max = Math.max(...arrayArg3);
	return [p1Max, p2Max, p3Max];
};

/*
  Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
    charIndex("hello", "l") ➞ [2, 3]
    * The first "l" has index 2, the last "l" has index 3.

    charIndex("circumlocution", "c") ➞ [0, 8]
    * The first "c" has index 0, the last "c" has index 8.

*/
const charIndex = (string, caracter) => {
	if (string === '' || caracter === '') return 'Debes completar los campos';
	if (typeof string !== 'string' || typeof caracter !== 'string') return 'Debes completar los campos solo con letras';
	const firstIndex = [...string].findIndex((c) => c === caracter);
	const lastIndex = [...string].findLastIndex((c) => c === caracter);
	return [firstIndex, lastIndex];
};

/*
  Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
*/
const toArray = (object) => {
	const result = [];
	for (const [key, value] of Object.entries(object)) {
		result.push([key, value]);
	}

	return result;
};

/*
  Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
    getBudgets([
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve",  age: 32, budget: 40000 },
      { name: "Martin",  age: 16, budget: 2700 }
    ]) ➞ 65700
*/
const getBudgets = (args) => {
	let budgets = 0;
	for (const i of args) {
		budgets += i.budget;
	}
	return budgets;
};

/*
  Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
    getStudentNames([
      { name: "Steve" },
      { name: "Mike" },
      { name: "John" }
    ]) ➞ ["Becky", "John", "Steve"]
*/
const getStudentNames = (args) => {
	let students = [];
	for (const i of args) {
		students.push(i.name);
	}
	return students;
};

/*
  Escriba una función que convierta un objeto en una matriz de claves y valores.
    objectToArray({
      likes: 2,
      dislikes: 3,
      followers: 10
    }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
const objectToArray = (object) => {
	const result = [];
	for (const [key, value] of Object.entries(object)) {
		result.push([key, value]);
	}

	return result;
};

/*
  Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
    squaresSum(3) ➞ 14
      1² + 2² + 3² =
      1 + 4 + 9 =
      14
*/
const squaresSum = (n) => {
	if (n === '') return 'Los campos no deben estar vacios';
	let suma = 0;
	for (let i = 1; i <= parseInt(n); i++) {
		// console.log([i, Math.pow(i, 2)]);
		suma += Math.pow(i, 2);
	}
	return suma;
};

/*
  Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
    multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/
const multiplyByLength = (array) => {
	for (const i of array) {
		if (isNaN(i)) return 'Solo se permite numeros enteros';
	}
	return array.map((e) => e * array.length);
};

/*
  Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
    countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/
const countdown = (n) => {
	if (n === '') return 'Los campos no deben estar vacios';
	if (parseInt(n) < 0) return 'Los numeros deben ser mayor a 0';
	const result = [];
	for (let i = parseInt(n); i >= 0; i--) {
		result.push(i);
	}
	return result;
};

/*
  Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
    diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
      Smallest number is -50, biggest is 32.
*/
const diffMaxMin = (array) => {
	for (const i of array) {
		if (isNaN(i)) return 'Solo se permite numeros enteros';
	}
	const max = Math.max(...array);
	const min = Math.min(...array);
	if (min < 0) return max - min;
	if (min > 0) return max + min;
};

/*
  Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
    filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/
const filterList = (array) => {
	// Input juntar todo en un array (1, 2, 3, 4, 5, ejem, e, ma, 2) en un input text, despues hacerle un from y eliminar las comas y espacios;
	for (const i of array) {
		if (i === '') return 'Los campos no deben estar vacios';
	}
	return array.filter((e) => typeof e !== 'string');
};

/*
  Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
    repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/
const repeat = (n, r) => {
	if (n === '' || r === '') return 'Los campos no deben estar vacios';
	if (parseInt(r) < 0) return 'Las repeticiones deben ser mayor a 0';
	const result = [];
	for (let i = 0; i < parseInt(r); i++) {
		result.push(parseInt(n));
	}
	return result;
};

/*
  Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
    "apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/
String.prototype.vreplace = function (vocal) {
	const filterRegex = /[aeiou]/gi;
	return this.replace(filterRegex, vocal);
};
const replaceVowel = (string, v) => {
	if (string === '' || v === '') return 'Los campos no deben estar vacios';
	if (typeof string !== 'string' || typeof v !== 'string') return 'Los campos no deben ser letras';
	if (v.length !== 1) return 'La vocal debe tener solo un caracter';

	return string.vreplace(v);
};

/*
  Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
    findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/
const findNemo = (string) => {
	if (string === '') return 'Los campos no deben estar vacios';
	const arrayString = Array.of(string);
	const stringWords = arrayString.flatMap((x) => x.split(' '));
	const indexNemo = stringWords.findIndex((x) => x === 'Nemo');
	return `Encontre a Nemo es la ${indexNemo + 1} palabra`;
};

/*
  Cree una función que capitalice la última letra de cada palabra.
    capLast("hello") ➞ "hellO"
*/
const capLast = (strings) => {
	if (strings === '') return 'Los campos no deben estar vacios';

	let words = strings.split(' ');

	for (let i = 0; i < words.length; i++) {
		let lastLetter = words[i].charAt(words[i].length - 1);

		let capitalizedLastLetter = lastLetter.toUpperCase();

		let newWord = words[i].slice(0, -1) + capitalizedLastLetter;

		words[i] = newWord;
	}
	return words.join(' ');
};
