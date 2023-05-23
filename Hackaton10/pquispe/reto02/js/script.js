
// --- Funciones Arrow ---
const datosPersona = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}.`;

const sumOfCubes = (...nums) => nums.reduce((acumulador, num) => acumulador + Math.pow(num, 3), 0);

const tipoValor = (valor) => typeof valor;

const sumaNvalores = (...nums) => nums.reduce((acumulador, num) => acumulador + num, 0);

const filtrarStrings = (array) => array.filter((valor) => typeof valor != "string");

const minMax = (array) => [Math.min(...array), Math.max(...array)];

const formatPhoneNumber = (array) => {
    let telefono = "";
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            telefono += "(";
        } else if (i === 3) {
            telefono += ") ";
        } else if (i === 6) {
            telefono += "-";
        };
        telefono += array[i];
    };
    return telefono;
};

const findLargestNums = (array) => {
    let largestNums = [];
    for (let i = 0; i < array.length; i++) {
      largestNums.push(Math.max(...array[i]));
    };
    return largestNums;
};

const charIndex = (palabra, caracter) => {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        };
    };
    if (indices.length === 0) {
        return "El caracter no se encuentra en la palabra";
    } else {
        return [indices[0], indices[indices.length - 1]];
    };
};

const objectToArray = (objeto) => Object.entries(objeto);

const getBudgets = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i].budget;
    };
    return suma;
};

const getStudentNames = (estudiantes) => estudiantes.map(estudiante => estudiante.name);

const squaresSum = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += Math.pow(i, 2);
    };
    return suma;
};

const multiplyByLength = array => array.map(numero => numero * array.length);

const countdown = (numero) => {
    let numeros = [];
    for (let i = numero; i >= 0; i--) {
      numeros.push(i);
    };
    return numeros;
};

const diffMaxMin = array => Math.max(...array) - Math.min(...array);

const filterList = array => array.filter(numero => Number.isInteger(numero));

const repeat = (elemento, tiempos) => Array(tiempos).fill(elemento);

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
};

const findNemo = (cadena) => {
    let palabras = cadena.split(" ");
    let nemoIndex = palabras.findIndex(palabra => palabra === "Nemo");
    return nemoIndex >= 0 ? `I found Nemo at ${nemoIndex + 1}!` : "I can't find Nemo";
};

const capLast = (cadena) => {
    return cadena.replace(/\b(\w+)\b/g, (coincidencia, palabra) => {
        let ultimaLetra = palabra.slice(-1).toUpperCase();
        let restoLetras = palabra.slice(0, -1);
        return restoLetras + ultimaLetra;
    });
};




// --- Selección de elementos del DOM ---
const btn01 = document.querySelector('#btn01');
const btn02 = document.querySelector('#btn02');
const btn03 = document.querySelector('#btn03');
const btn04 = document.querySelector('#btn04');
const btn05 = document.querySelector('#btn05');
const btn06 = document.querySelector('#btn06');
const btn07 = document.querySelector('#btn07');
const btn08 = document.querySelector('#btn08');
const btn09 = document.querySelector('#btn09');
const btn10 = document.querySelector('#btn10');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');
const btn13 = document.querySelector('#btn13');
const btn14 = document.querySelector('#btn14');
const btn15 = document.querySelector('#btn15');
const btn16 = document.querySelector('#btn16');
const btn17 = document.querySelector('#btn17');
const btn18 = document.querySelector('#btn18');
const btn19 = document.querySelector('#btn19');
const btn20 = document.querySelector('#btn20');
const btn21 = document.querySelector('#btn21');
const btn22 = document.querySelector('#btn22');

const result01 = document.querySelector('#resultado01');
const result02 = document.querySelector('#resultado02');
const result03 = document.querySelector('#resultado03');
const result04 = document.querySelector('#resultado04');
const result05 = document.querySelector('#resultado05');
const result06 = document.querySelector('#resultado06');
const result07 = document.querySelector('#resultado07');
const result08 = document.querySelector('#resultado08');
const result09 = document.querySelector('#resultado09');
const result10 = document.querySelector('#resultado10');
const result11 = document.querySelector('#resultado11');
const result12 = document.querySelector('#resultado12');
const result13 = document.querySelector('#resultado13');
const result14 = document.querySelector('#resultado14');
const result15 = document.querySelector('#resultado15');
const result16 = document.querySelector('#resultado16');
const result17 = document.querySelector('#resultado17');
const result18 = document.querySelector('#resultado18');
const result19 = document.querySelector('#resultado19');
const result20 = document.querySelector('#resultado20');
const result21 = document.querySelector('#resultado21');
const result22 = document.querySelector('#resultado22');




// --- Algoritmo Ejercicio 01 ---
btn01.addEventListener("click", () => {
    let nombreIngresado = prompt("Ingrese su nombre:");
    let apellidoIngresado = prompt("Ingrese su apellido:");
    let edadIngresada = parseInt(prompt("Ingrese su edad:"));

    try {
        if (!isNaN(edadIngresada)) {
            let resultado = datosPersona(nombreIngresado, apellidoIngresado, edadIngresada);

            window.alert(resultado);
            result01.innerHTML = 
                `
                <br><br>
                Resultado:<br><br>
                datosPersona(${nombreIngresado}, ${apellidoIngresado}, ${edadIngresada}) => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 02 ---
btn02.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            sumOfCubes(1, 5, 9) => ${sumOfCubes(1, 5, 9)}<br><br>
            sumOfCubes(8, 6, -2, 10) => ${sumOfCubes(8, 6, -2, 10)}<br><br>
            sumOfCubes(20, 5.5) => ${sumOfCubes(20, 5.5)}<br><br>
            sumOfCubes(9, 6, -5 ) => ${sumOfCubes(9, 6, -5)}
        `;

    result02.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 03 ---
btn03.addEventListener("click", () => {
    let tiposDeValores = ["Hola", 123, true, undefined, null, {}, [], function(){}, new Date(), /regex/];
    let resultado = `<br><br>`;

    tiposDeValores.forEach(valor => {
        resultado += `${tipoValor(valor)}<br>`;
    });

    result03.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 04 ---
btn04.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            sumaNvalores(...nums)<br><br>
            sumaNvalores(8, 6, 50) = ${sumaNvalores(8, 6, 50)}<br><br>
            sumaNvalores(30, 8, 15, 2, 18) = ${sumaNvalores(30, 8, 15, 2, 18)}<br><br>
            sumaNvalores(20, 2.3, -8) = ${sumaNvalores(20, 2.3, -8)}<br><br>
            sumaNvalores() = ${sumaNvalores()}
        `;

    result04.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 05 ---
btn05.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            filtrarStrings([1, "lunes", true, "martes", 5.4, "miércoles"]) => ${filtrarStrings([1, "lunes", true, "martes", 5.4, "miercoles"])}<br><br>
            filtrarStrings([function(){}, 99, 1.2, "Hola", false, "mundo"]) => ${filtrarStrings([function(){}, 99, 1.2, "Hola", false, "mundo"])}<br><br>
            filtrarStrings([4, "cuatro", 5, "cinco"]) => ${filtrarStrings([4, "cuatro", 5, "cinco"])}<br><br>
            filtrarStrings(["manezana", 5, "pera", -8.6, {}]) => ${filtrarStrings(["manezana", 5, "pera", -8.6, {}])}
        `;
    
    result05.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 06 ---
btn06.addEventListener("click", () => {
    let numeros = [];
    let datosInvalidos;

    let solicitarCantidad = parseInt(prompt("Cantidad de números que desee ingresar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad > 0) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                datosInvalidos = numeros.filter((valor) => isNaN(valor));

                if (datosInvalidos.length != 0) {
                    throw new Error("Los datos ingresados no son válidos.");
                };
            };

            let resultado = minMax(numeros);
            window.alert(resultado);
            result06.innerHTML = 
            `   
                <br><br>
                Resultado:<br><br>
                minMax([${numeros}]) => ${resultado}
            `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 07 ---
btn07.addEventListener("click", () => {
    let numeros = [];
    let datosInvalidos;

    try {
        for (let i = 0; i < 10; i++) {
            numeros.push(Math.abs(parseInt(prompt(`Ingrese el número ${i + 1} del teléfono:`))))

            datosInvalidos = numeros.filter((valor) => isNaN(valor));

            if (datosInvalidos.length != 0) {
                throw new Error("Los datos ingresados no son válidos.");
            };
        };

        let resultado = formatPhoneNumber(numeros);

        window.alert(resultado);
        result07.innerHTML = 
            `   
                <br><br>
                Resultado:<br><br>
                formatPhoneNumber([${numeros}]) => ${resultado}
            `;
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 08 ---
btn08.addEventListener("click", () => {
    let arrays = [];
    let numeros = [];
    let datosInvalidos;
    result08.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            findLargestNums([`;

    let solicitarCantidad = parseInt(prompt("Cantidad de matrices que desee ingresar"));

    try {
        if (!isNaN(solicitarCantidad)) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                let cantidadNumeros = parseInt(prompt(`Ingrese la cantidad de números para la matriz ${i}`));

                if (!isNaN(cantidadNumeros)) {
                    for (let i = 1; i <= cantidadNumeros; i++) {
                        numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                        datosInvalidos = numeros.filter((valor) => isNaN(valor));

                        if(datosInvalidos.length != 0) {
                            result08.innerHTML = "";
                            throw new Error("Los datos ingresados no son válidos.");
                        };
                    };
                }
                else {
                    result08.innerHTML = "";
                    throw new Error("Los datos ingresados no son válidos.");
                };

                arrays.push(numeros);
                result08.innerHTML += `[${numeros}]`;
                numeros = [];
            };

            let resultado = findLargestNums(arrays);

            window.alert(resultado);
            result08.innerHTML += `]) => ${resultado}`;
        }
        else {
            result08.innerHTML = "";
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 09 ---
btn09.addEventListener("click", () => {
    let palabraIngresada = prompt("Ingrese una palabra:");
    let buscarCaracter = prompt("Ingrese el caracter para buscar en la palabra:");

    let resultado = charIndex(palabraIngresada, buscarCaracter);

    window.alert(resultado);
    result09.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            charIndex(${palabraIngresada}, ${buscarCaracter}) => ${resultado}
        `;
});



// --- Algoritmo Ejercicio 10 ---
btn10.addEventListener("click", () => {
    let valorA = parseFloat(prompt("Ingrese el valor de 'a'"));
    let valorB = parseFloat(prompt("Ingrese el valor de 'b'"));

    try {
        if (!isNaN(valorA) && !isNaN(valorB)) {

            class Objeto {
                constructor(a, b) {
                    this.a = a;
                    this.b = b;
                };
            };

            let objeto = new Objeto(valorA, valorB);
            let resultado = objectToArray(objeto);

            window.alert(resultado);
            result10.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    toArray({a: ${valorA}, b: ${valorB}}) => [[${resultado[0]}], [${resultado[1]}]]
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 11 ---
btn11.addEventListener("click", () => {
    let personas = [];
    let nombreIngresado;
    let edadIngresada;
    let presupuestoIngresado;
    let persona;
    result11.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            getBudgets([<br>
        `;

    let solicitarCantidad = parseInt(prompt("Cantidad de personas que desee ingresar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad > 0) {

            class Persona {
                constructor(name, age, budget) {
                    this.name = name;
                    this.age = age;
                    this.budget = budget;
                };
            };

            for (let i = 1; i <= solicitarCantidad; i++) {
                nombreIngresado = prompt(`Ingresa el nombre de la persona ${i}`);
                edadIngresada = parseInt(prompt(`Ingresa la edad de la persona ${i}`));
                presupuestoIngresado = parseFloat(prompt(`Ingrese el presupuesto de la persona ${i}`));

                if (isNaN(edadIngresada) || isNaN(presupuestoIngresado) || edadIngresada < 0 || presupuestoIngresado < 0) {
                    result11.innerHTML = "";
                    throw new Error("Los datos ingresados no son válidos.");
                };

                persona = new Persona(nombreIngresado, edadIngresada, presupuestoIngresado);
                personas.push(persona);

                result11.innerHTML += `{name: ${persona.name}, age: ${persona.age}, budget: ${persona.budget}},<br>`;
            };

            let resultado = getBudgets(personas);
            window.alert(resultado);
            result11.innerHTML += `]) => ${resultado}`;
        }
        else {
            result11.innerHTML = "";
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 12 ---
btn12.addEventListener("click", () => {
    let estudiantes = [];
    let nombreIngresado;
    let estudiante;
    result12.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            getStudentNames([<br>
        `;

    let solicitarCantidad = parseInt(prompt("Cantidad de estudiantes que desee registrar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad > 0) {

            class Estudiante {
                constructor(name) {
                    this.name = name;
                };
            };

            for (let i = 1; i <= solicitarCantidad; i++) {
                nombreIngresado = prompt(`Ingrese el nombre del estudiante ${i}`);

                estudiante = new Estudiante(nombreIngresado);
                estudiantes.push(estudiante);

                result12.innerHTML += `{name: ${estudiante.name}},<br>`
            };

            let resultado = getStudentNames(estudiantes);
            window.alert(resultado);
            result12.innerHTML += `]) => ${resultado}`;
        }
        else {
            result12.innerHTML = "";
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 13 ---
btn13.addEventListener("click", () => {
    let likesIngresados = Math.abs(parseInt(prompt("Ingrese la cantidad de likes:")));
    let dislikesIngresados = Math.abs(parseInt(prompt("Ingrese la cantidad de dislikes:")));
    let followersIngresados = Math.abs(parseInt(prompt("Ingrese la cantidad de followers:")));

    try {
        if (!isNaN(likesIngresados) && !isNaN(dislikesIngresados) && !isNaN(followersIngresados)) {

            class Publicacion {
                constructor(likes, dislikes, followers) {
                    this.likes = likes;
                    this.dislikes = dislikes;
                    this.followers = followers;
                };
            };

            let publicacion = new Publicacion(likesIngresados, dislikesIngresados, followersIngresados);
            let resultado = objectToArray(publicacion);

            window.alert(resultado);
            result13.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    objectToArray({<br>
                    likes: ${likesIngresados},<br>
                    dislikes: ${dislikesIngresados},<br>
                    followers: ${followersIngresados},<br>
                    }) => [[${resultado[0]}], [${resultado[1]}], [${resultado[2]}]]
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 14 --- 
btn14.addEventListener("click", () => {
    let numeroIngresado = parseInt(prompt("Ingrese un número entero positivo:"));

    try {
        if(!isNaN(numeroIngresado) && numeroIngresado >= 0) {
            let resultado = squaresSum(numeroIngresado);

            window.alert(resultado);
            result14.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    squaresSum(${numeroIngresado}) => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 15 --- 
btn15.addEventListener("click", () => {
    let numeros = [];
    let datosInvalidos;

    let solicitarCantidad = parseInt(prompt("Cantidad de numeros que desee ingresar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad >= 0) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                datosInvalidos = numeros.filter((valor) => isNaN(valor));

                if(datosInvalidos.length != 0) {
                    throw new Error("Los datos ingresados no son válidos.");
                };
            };

            let resultado = multiplyByLength(numeros);
            window.alert(resultado);
            result15.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    multiplyByLength([${numeros}]) => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 16 --- 
btn16.addEventListener("click", () => {
    let numeroIngresado = parseInt(prompt("Ingrese un numero positivo o neutro:"));

    try {
        if (!isNaN(numeroIngresado) && numeroIngresado >= 0) {
            let resultado = countdown(numeroIngresado);

            window.alert(resultado);
            result16.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    countdown(${numeroIngresado}) => [${resultado}]
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 17 --- 
btn17.addEventListener("click", () => {
    let numeros = [];
    let datosInvalidos;

    let solicitarCantidad = parseInt(prompt("Cantidad de números que desee ingresar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad > 0) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                datosInvalidos = numeros.filter((valor) => isNaN(valor));

                if(datosInvalidos.length != 0) {
                    throw new Error("Los datos ingresados no son válidos.");
                };
            };

            let resultado = diffMaxMin(numeros);
            window.alert(resultado);
            result17.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    diffMaxMin([${numeros}]) => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error)
    };
});



// --- Algoritmo Ejercicio 18 --- 
btn18.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            filterList([1, 2, 3, "x", "y", 10]) => ${filterList([1, 2, 3, "x", "y", 10])}<br><br>
            filterList([5, 6.5, 8, 99.5]) => ${filterList([5, 6.5, 8, 99.5])}<br><br>
            filterList([{}, 99, 0, -8, 1.1, "string"]) => ${filterList([{}, 99, 0, -8, 1.1, "string"])}<br><br>
            filterList([5, 50, "a", "b", "c", 1, 2, 3]) => ${filterList([5, 50, "a", "b", "c", 1, 2, 3])}
        `;
    
    result18.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 19 --- 
btn19.addEventListener("click", () => {
    let elementoIngresado = parseFloat(prompt("Ingrese un numero para repetirse:"));
    let tiemposIngresados = parseInt(prompt("Ingrese la cantidad de veces que será repetido:"));

    try {
        if (!isNaN(elementoIngresado) && !isNaN(tiemposIngresados)) {
            let resultado = repeat(elementoIngresado, tiemposIngresados);

            window.alert(resultado);
            result19.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    repeat(${elementoIngresado}, ${tiemposIngresados}) => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error)
    };
});



// --- Algoritmo Ejercicio 20 ---
btn20.addEventListener("click", () => {
    let cadenaIngresada = prompt("Ingrese una frase:")
    let cambiarVocal = prompt("Ingrese una vocal para reemplazar las demás:")

    try {
        if (cambiarVocal == "a" ||  cambiarVocal == "e" ||  cambiarVocal == "i" ||  cambiarVocal == "o" || cambiarVocal == "u") {
            let resultado = cadenaIngresada.vreplace(cambiarVocal);

            window.alert(resultado);
            result20.innerHTML = 
                `
                    <br><br>
                    Resultado:<br><br>
                    "${cadenaIngresada}".vreplace("${cambiarVocal}") => ${resultado}
                `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 21 ---
btn21.addEventListener("click", () => {
    let cadenaIngresada = prompt("Ingrese una frase:");

    let resultado = findNemo(cadenaIngresada);
    window.alert(resultado);
    result21.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            findNemo("${cadenaIngresada}") => ${resultado}
        `;
});



// --- Algoritmo Ejercicio 22 ---
btn22.addEventListener("click", () => {
    let cadenaIngresada = prompt("Ingrese una palabra o una frase");

    let resultado = capLast(cadenaIngresada);
    window.alert(resultado);
    result22.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            capLast("${cadenaIngresada}") => ${resultado}
        `;
});
