function ejercicio01() {
    try {
        const primerNumero = Utils.ejecutarPromptYParsearAEntero("Ingrese el primer número: ");
        const segundoNumero = Utils.ejecutarPromptYParsearAEntero("Ingrese el segundo número: ");

        let sumarNumeros = (primerNumero, segundoNumero) => primerNumero + segundoNumero;

        const sumaNumeros = sumarNumeros(primerNumero, segundoNumero);

        alert(`La suma de: ${primerNumero} & ${segundoNumero} es: ${sumaNumeros}`)

    } catch (error) {
        alert(error);
    }
}

function ejercicio02() {

    try {
        const potencia = Utils.ejecutarPromptYParsearAEntero("Ingrese la potencia: ");
        const numeroAPotenciar = Utils.ejecutarPromptYParsearAEntero("Ingrese el número a potenciar: ");

        const resultadoPotencia = Math.pow(numeroAPotenciar, potencia);

        alert(`La potencia de: ${numeroAPotenciar} elevado a ${potencia} es: ${resultadoPotencia}`)
    } catch (error) {
        alert(error);
    }
}

function ejercicio03() {

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

function ejercicio04() {
    try {
        const base = Utils.ejecutarPromptYParsearAEntero("Ingrese la base del triángulo: ");
        const altura = Utils.ejecutarPromptYParsearAEntero("Ingrese la altura del triángulo: ");

        const resultado = Utils.obtenerAreaTriangulo(base, altura);

        alert(`El área del triángulo es: ${resultado}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio05() {
    try {
        const operacionMatematica = Utils.ejecutarPromptYObtenerCadena("Ingrese la operación matemática (+,-,/,x,%)): ");
        const primerNumero = Utils.ejecutarPromptYParsearAEntero("Ingrese el primer número: ");
        const segundoNumero = Utils.ejecutarPromptYParsearAEntero("Ingrese el segundo número: ");

        let resultadoOperacion = 0;

        switch (operacionMatematica) {
            case "+":
                resultadoOperacion = primerNumero + segundoNumero;
                break;
            case "-":
                resultadoOperacion = primerNumero - segundoNumero;
                break;
            case "/":
                resultadoOperacion = primerNumero / segundoNumero;
                break;
            case "x":
                resultadoOperacion = primerNumero * segundoNumero;
                break;
            case "%":
                resultadoOperacion = primerNumero % segundoNumero;
                break;
            default:
                throw new Error('Operación matemática no soportada');
        }

        alert(`El resultado de ${primerNumero} ${operacionMatematica} ${segundoNumero} es: ${resultadoOperacion}`);

    } catch (error) {
        alert(error);
    }
}
