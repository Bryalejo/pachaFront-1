document.querySelectorAll('input')
    .forEach(element => element.addEventListener('click', () => {
        const inputResultado = document.getElementById('inputResultado');
        const elementValueSeleccionado = element.value;

        switch (elementValueSeleccionado) {
            case '=':
                const resultado = realizarCalculo(agregarEspacioSiNoEsNumero(inputResultado.value));

                if (isNaN(resultado)) {
                    break;
                }
                inputResultado.value = resultado;
                break;
            case 'C':
                inputResultado.value = '0';
                break;
            default:
                inputResultado.value = (inputResultado.value === '0')
                    ? elementValueSeleccionado
                    : `${inputResultado.value}${elementValueSeleccionado}`;
        }
    }));

function realizarCalculo(cadena) {
    const operadoresYCalculos = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const expresiones = cadena.split(' ');
    const numeros = [];
    const operadores = [];

    expresiones.forEach(expresion => {
        if (operadoresYCalculos.hasOwnProperty(expresion)) {
            operadores.push(expresion);
        } else {
            numeros.push(parseFloat(expresion));
        }
    });

    operadores.forEach(operador => {
        const a = numeros.shift();
        const b = numeros.shift();
        const resultado = operadoresYCalculos[operador](a, b);
        numeros.unshift(resultado);
    });

    return numeros.pop();
}

function agregarEspacioSiNoEsNumero(cadena) {
    let resultado = '';

    for (let i = 1; i <= cadena.length; i++) {
        const caracter = cadena[i - 1];
        resultado += i == cadena.length ? `${caracter}` : `${caracter} `;
    }

    return resultado;
}