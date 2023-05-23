/*
  Crea una función que retorne la suma de dos números.
*/
const Suma = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) return 'Debes ingresar solo numeros';

	// No existe ningun metodo en el Math para hacer sumas.
	return a + b;
};

/*
  Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
*/
const Pow = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) return 'Debes ingresar solo numeros';

	return Math.pow(a, b);
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
  Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
 */

const triArea = (base, altura) => {
	if (typeof base !== 'number' || typeof altura !== 'number' || isNaN(base) || isNaN(altura))
		return 'Debes ingresar solo numeros';

	return (base * altura) / 2;
};

/*
  Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
 */

const calculator = (a, op, b) => {
	const operations = {
		['+']: (num1, num2) => {
			return num1 + num2;
		},
		['-']: (num1, num2) => {
			return num1 - num2;
		},
		['/']: (num1, num2) => {
			return num1 / num2;
		},
		['x']: (num1, num2) => {
			return num1 * num2;
		},
		['%']: (num1, num2) => {
			return num1 % num2;
		},
	};
	if (typeof operations[op] !== 'function') return 'El parámetro no es reconocido';
	if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) return 'Debes ingresar solo numeros';
	return operations[op](a, b);
};
