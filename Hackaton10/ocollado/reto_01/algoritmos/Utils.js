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
    obtenerAreaTriangulo: (base, altura) => (base * altura) / 2
}