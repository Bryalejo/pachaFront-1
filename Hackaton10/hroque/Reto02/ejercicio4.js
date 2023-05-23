const form = document.getElementById('p4Form');
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Evitar que la página se recargue

	const formData = new FormData(form); // Obtener los valores del formulario
	const entries = formData.entries(); // Convertir los valores en un objeto iterable

	const data = {}; // Crear un objeto de array para almacenar los valores
	for (const [name, value] of entries) {
		data[name] = value; // Agregar cada valor al objeto de array
	}
	console.log(data);
	const result = document.getElementById('resultP4');
	dividers[3].hidden = false;
	resultsContainer[3].hidden = false;
	resultsContainer[3].classList.remove('alert-error');
	resultsContainer[3].classList.add('alert-success');
	result.innerText = sumRest(Object.values(data).map((x) => parseInt(x)));
});

// const prob4 = document.getElementById('btnProb4');
// prob4.addEventListener('click', () => {
// 	getArg();
// 	const p4Valor = document.getElementById('p4Valor');
// 	const result = document.getElementById('resultP4');
// 	dividers[3].hidden = false;
// 	resultsContainer[3].hidden = false;
// 	if (isNaN(parseInt(p4Valor.value))) {
// 		result.innerText = typeOF(p4Valor.value);
// 		return;
// 	}
// 	result.innerText = typeOF(parseInt(p4Valor.value));
// });

// const getArg = () => {
// 	const queryString = window.location.search.substring(1); // Paso 1 y 2
// 	const pairs = queryString.split('&'); // Paso 3

// 	const variables = {};
// 	for (let i = 0; i < pairs.length; i++) {
// 		const pair = pairs[i];
// 		const keyValue = pair.split('='); // Paso 4
// 		variables[keyValue[0]] = keyValue[1]; // Paso 5
// 	}

// 	console.log(Object.values(variables)); // Resultado: {params}
// 	return Object.values(variables).map((x) => parseInt(x)); // Resultado: [params]
// };
