var Utils = {
    ejecutarPromptYParsearAEntero: (mensajePrompt) => {
        let valorInicial = prompt(mensajePrompt);
        let valorParseadoAEntero = parseInt(valorInicial);

        if(isNaN(valorParseadoAEntero)) throw new Error(`'${valorInicial}' no es un número`);

        return valorParseadoAEntero;
    },
    ejecutarPromptYParsearAFlotante: (mensajePrompt) => {
        let valorInicial = prompt(mensajePrompt);
        let valorParseadoAFlotante = parseFloat(valorInicial);

        if(isNaN(valorParseadoAFlotante)) throw new Error(`'${valorInicial}' no es un número flotante`);

        return valorParseadoAFlotante;
    },
    ejecutarPromptYObtenerCadena: (mensajePrompt) => prompt(mensajePrompt),
    ejecutarPromptYObtenerEnteros: (cantidadNumeros) => {
        let arrayNumeros = [];

        for (let i = 0; i < cantidadNumeros; i++) {
            arrayNumeros.push(Utils.ejecutarPromptYParsearAEntero(`Ingrese el número de la posición: ${i + 1}: `))
        }
        
        return arrayNumeros;
    },
    ejecutarPromptYObtenerEnterosDel0Al9: (cantidadNumeros) => {
        let arrayNumeros = [];

        for (let i = 0; i < cantidadNumeros; i++) {
            let numeroIngresado = Utils.ejecutarPromptYParsearAEntero(`Ingrese el número de la posición: ${i + 1}: `);
            if (Utils.evaluarExpresionRegular(/^[0-9]$/, numeroIngresado)) {
                arrayNumeros.push(numeroIngresado);
            } else {
                throw new Error(`Debe ingresar un número entre el rango: 0 - 9`);
            }
        }
        
        return arrayNumeros;
    },
    ejecutarPromptYObtenerCadenas: (cantidadCadenas) => {
        let arrayCadena = [];

        for (let i = 0; i < cantidadCadenas; i++) {
            arrayCadena.push(Utils.ejecutarPromptYObtenerCadena(`Ingrese el valor de la posición: ${i + 1}: `))
        }
        
        return arrayCadena;
    },
    obtenerAreaTriangulo: (base, altura) => (base * altura) / 2,
    detectarTipoDato: (valorASerEvaluado) => isNaN(valorASerEvaluado) ? 'string' : 'number',
    evaluarExpresionRegular: (expresionRegular, valor) => expresionRegular.test(valor)
}