function ejercicio01() {
    try {
        const nombre = Utils.ejecutarPromptYObtenerCadena("Ingrese nombre: ");
        const apellido = Utils.ejecutarPromptYObtenerCadena("Ingrese apellido: ");
        const edad = Utils.ejecutarPromptYParsearAEntero("Ingrese la edad: ");

        alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)

    } catch (error) {
        alert(error);
    }
}

function ejercicio02() {

    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        const arrayNumerosPotenciadosATres = arrayNumeros.flatMap(numero => Math.pow(numero, 3));
        const resultadoSumaPotencias = arrayNumerosPotenciadosATres.reduce((a, b) => a + b);

        alert(`Los números ingresados a la potencia de 3 es: ${arrayNumerosPotenciadosATres.toString()} y la suma de estos es: ${resultadoSumaPotencias}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio03() {

    try {
        const valorASerEvaluado = prompt("Ingrese el valor a ser evaluado: ");
        const tipoDato = Utils.detectarTipoDato(valorASerEvaluado);

        alert(`El tipo de valor entregado para: '${valorASerEvaluado}' es: ${tipoDato}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio04() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        const resultado = arrayNumeros.reduce((a, b) => a + b)

        alert(`La suma de los valores ${arrayNumeros.toString()} es: ${resultado}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio05() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de valores que registrará: ");
        let arrayValores = Utils.ejecutarPromptYObtenerCadenas(cantidadDatos);

        const arrayResultado = arrayValores.filter((valor) => !isNaN(valor));

        alert(`Los valores ingresados fueron [${arrayValores.toString()}], de los cuales los valores que NO son string son: ${arrayResultado.length === 0 ? 'ninguno' : '[' + arrayResultado.toString() + ']'}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio06() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        let minimo = Math.min(...arrayNumeros);
        let maximo = Math.max(...arrayNumeros);

        let arrayMinMax = [];
        arrayMinMax.push(minimo, maximo);

        alert(`[${arrayMinMax}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio07() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        if (cantidadDatos > 10) {
            throw new Error("Solo se permite 10 enteros");
        }

        let arrayNumeros = Utils.ejecutarPromptYObtenerEnterosDel0Al9(cantidadDatos);

        let formato = `(${arrayNumeros.slice(0, 3).join('')}) ${arrayNumeros.slice(3, 6).join('')}-${arrayNumeros.slice(6).join('')}`;

        alert(`${formato}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio08() {
    try {
        const cantidadMatrices = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de matrices que registrará: ");
        let matrices = [];

        for (let i = 1; i <= cantidadMatrices; i++) {
            let cantidadArreglo = Utils.ejecutarPromptYParsearAEntero(`Ingrese el tamaño del arreglo ${i}: `);
            let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadArreglo);
            matrices.push(arrayNumeros);
        }

        let arregloConNumerosMayores = matrices.map((arreglo) => Math.max(...arreglo));

        alert(`[${arregloConNumerosMayores}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio09() {
    try {
        const cadena = Utils.ejecutarPromptYObtenerCadena("Ingrese la cadena completa: ");
        const cadenaABuscar = Utils.ejecutarPromptYObtenerCadena("Ingrese la cadena a evaluar: ");

        const firstIndex = cadena.indexOf(cadenaABuscar);
        const lastIndex = cadena.lastIndexOf(cadenaABuscar);

        alert(`The first ${cadenaABuscar} has index ${firstIndex}, the last ${cadenaABuscar} has index ${lastIndex}.`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio10() {
    try {
        const stringObject = Utils.ejecutarPromptYObtenerCadena("Ingrese un objeto en formato string: ");
        const object = JSON.parse(stringObject);

        let resultado = Object.entries(object)
            .map(([key, value]) => `["${key}": ${value}]`)
            .join(', ');

        alert(`[${resultado}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio11() {
    try {
        const stringObject = Utils.ejecutarPromptYObtenerCadena('Ingrese una lista de objeto en formato string con la siguiente estructura: [{ "name": "John", "age": 21, "budget": 23000 }]');
        let arrayObject = JSON.parse(stringObject);

        const sumaTotalBudget = arrayObject.map((budgetObject) => budgetObject.budget).reduce((a, b) => a + b);

        alert(`${sumaTotalBudget}`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio12() {
    try {
        const stringObject = Utils.ejecutarPromptYObtenerCadena('Ingrese una lista de objeto en formato string con la siguiente estructura: [{ "name": "Steve" }]');
        let arrayObject = JSON.parse(stringObject);

        const studentNames = arrayObject.map((student) => `"${student.name}"`)

        alert(`[${studentNames}]`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio13() {
    try {
        const stringObject = Utils.ejecutarPromptYObtenerCadena("Ingrese un objeto en formato string: ");
        const object = JSON.parse(stringObject);

        let resultado = Object.entries(object)
            .map(([key, value]) => `["${key}": ${value}]`)
            .join(', ');

        alert(`[${resultado}]`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio14() {
    try {
        const numero = Utils.ejecutarPromptYParsearAEntero("Ingrese un número determinado para hacer el cálculo de todos los números cuadrados incluyendo n: ");
        let sumaPotenciaCuadrado = 0;

        for (let i = 1; i <= numero; i++) {
            sumaPotenciaCuadrado += i ** 2;
        }

        alert(`${sumaPotenciaCuadrado}`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio15() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        const arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        const tamanioArray = arrayNumeros.length;

        const arrayMultiplicadoPorTamanio = arrayNumeros.map((numero) => numero * tamanioArray);

        alert(`[${arrayMultiplicadoPorTamanio}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio16() {
    try {
        const numeroComoArgumento = Utils.ejecutarPromptYParsearAEntero("Ingrese un número mayor a 0: ");

        if (numeroComoArgumento <= 0) {
            throw new Error("Debe ingresar un número mayor a 0");
        }

        let arrayNumeros = [];
        for (let i = numeroComoArgumento; i >= 0; i--) {
            arrayNumeros.push(i);
        }

        alert(`[${arrayNumeros}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio17() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        const arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        let minimo = Math.min(...arrayNumeros);
        let maximo = Math.max(...arrayNumeros);

        alert(`Smallest number is ${minimo}, biggest is ${maximo}.`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio18() {
    try {
        const cantidadCadenas = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de cadenas que registrará: ");
        const arrayCadenas = Utils.ejecutarPromptYObtenerCadenas(cantidadCadenas);

        arraySoloEnteros = arrayCadenas.filter((cadena) => !isNaN(cadena));

        alert(`[${arraySoloEnteros}]`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio19() {
    try {
        const elemento = Utils.ejecutarPromptYParsearAEntero("Ingrese el elemento que desea que se repita: ");
        const tiempoVeces = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de veces que se debe repetir: ");

        let arrayElementoRepetido = Array.from({ length: tiempoVeces }, () => elemento);
        alert(`[${arrayElementoRepetido}]`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio20() {
    try {
        const frase = Utils.ejecutarPromptYObtenerCadena("Ingrese frase: ");
        const vocalAReemplazar = Utils.ejecutarPromptYObtenerCadena("Ingrese la vocal para reemplazar en todas las vocales de la frase: ");

        const regexVocales = /[aeiou]/gi;

        const cadenaReemplazada = frase.replaceAll(regexVocales, vocalAReemplazar);
        alert(`${cadenaReemplazada}`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio21() {
    try {
        const frase = Utils.ejecutarPromptYObtenerCadena("Ingrese frase: ");
        const palabraAEncontrar = Utils.ejecutarPromptYObtenerCadena("Ingrese la palabra a encontrar en la frase: ");

        const frasePalabrasEnArray = frase.split(' ');

        const posicionPalabraEnFrase = frasePalabrasEnArray.findIndex((palabra) => palabraAEncontrar === palabra);

        alert(`I found ${palabraAEncontrar} at ${posicionPalabraEnFrase + 1}`);
    } catch (error) {
        alert(error);
    }
}

function ejercicio22() {
    try {
        const frase = Utils.ejecutarPromptYObtenerCadena("Ingrese frase: ");

        const frasePorPalabraEnArray = frase.split(' ');

        const frasePorPalabraEnArrayUltimaLetraCapitalizada = frasePorPalabraEnArray.map((palabra) => {
            const ultimaLetra = palabra.slice(-1);
            const primeraParte = palabra.slice(0, -1);
            return `${primeraParte}${ultimaLetra.toUpperCase()}`
        });

        const frasePorPalabraUltimasLetrasCapitalizadas = frasePorPalabraEnArrayUltimaLetraCapitalizada.join(' ');
        alert(`${frasePorPalabraUltimasLetrasCapitalizadas}`)
    } catch (error) {
        alert(error);
    }
}