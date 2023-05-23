function ejercicio1(){

    let nombre = '';
    let apellido = '';
    let edad = '';

    nombre = prompt("Ingresar Nombre");
    apellido = prompt("Ingresar Apellido");
    edad = prompt("Ingresar Edad");

    const concatenarInformacion = (nombre, apellido, edad) => {
        return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
    }

    const nombreCompleto = concatenarInformacion(nombre, apellido, edad);

    alert(nombreCompleto);
}

function ejercicio2(){
    function sumOfCubes() {
        var numbers = [];
        
        var input = prompt("Ingresa los números separados por comas:"); 
        
        var inputArray = input.split(",");
        
        
        for (var i = 0; i < inputArray.length; i++) {
            numbers.push(parseInt(inputArray[i]));
        }
        
        
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += Math.pow(numbers[i], 3);
        }
        
        
        alert("La suma de los cubos es: " + sum);
    }
    
    sumOfCubes();
}

function ejercicio3(){

    let valorIngresado = '';

    valorIngresado = prompt("Ingrese un valor:");

    const obtenerTipoValor = (valor) => {
        const tipo = typeof valor;
      
        if (tipo === 'string') {
          if (!isNaN(parseFloat(valor))) {
            return 'number';
          }
        }
      
        return tipo;
    }
      
      
      const tipoValor = obtenerTipoValor(valorIngresado);
      alert("El tipo de valor ingresado es: " + tipoValor);

}

function ejercicio4() {

    let numeros = prompt("Ingrese los números a sumar separados por comas:");
    numeros = numeros.split(",");
  
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
      total += parseInt(numeros[i]);
    }
  
    alert("El resultado de la suma es: " + total);
    return total;
}

function ejercicio5(){
    const filtrarStrings = () => {
    const valores = [];
    let valorIngresado = prompt("Ingrese un valor (o escriba 'salir' para terminar):");
    
    while (valorIngresado && valorIngresado.toLowerCase() !== "salir") {
        valores.push(valorIngresado);
        valorIngresado = prompt("Ingrese un valor (o escriba 'salir' para terminar):");
    }
    
    const valoresStrings = valores.filter(valor => typeof valor === "string");
    const valoresNumericos = valores.filter(valor => !isNaN(parseFloat(valor)) && !Array.isArray(valor));
    return {
        strings: valoresStrings,
        numericos: valoresNumericos
    };
    }
    
    const resultados = filtrarStrings();
    alert("Valores de tipo string: " + resultados.strings.join(", "));
    alert("Valores numéricos: " + resultados.numericos.join(", "));
}

function ejercicio6(){
    function minMax(numeros) {
        var min = Math.min(...numeros); // Encuentra el número mínimo utilizando el operador de propagación
        var max = Math.max(...numeros); // Encuentra el número máximo utilizando el operador de propagación    
    
        alert("El número mínimo es: " + min + "\nEl número máximo es: " + max);
    }
      
    
      var input = prompt("Ingresa los números separados por comas:");
      var inputArray = input.split(",");
      var numeros = [];

    for (var i = 0; i < inputArray.length; i++) {
        numeros.push(parseInt(inputArray[i]));
    }  
    
    minMax(numeros);

}

function ejercicio7(){
    const formatPhoneNumber = () => {
    const numeros = [];
    
    for (let i = 0; i < 10; i++) {
        let numeroIngresado = prompt(`Ingrese el número ${i + 1} (entre 0 y 9):`);
        numeros.push(numeroIngresado);
    }
    
    const telefono = `(${numeros.slice(0, 3).join("")}) ${numeros.slice(3, 6).join("")}-${numeros.slice(6).join("")}`;
    return telefono;
    }
    
    const numeroTelefono = formatPhoneNumber();
    alert(numeroTelefono);
}

function ejercicio8(){

    let matriz = [];
    let filas = prompt("Ingresa el número de filas de la matriz:");
    let columnas = prompt("Ingresa el número de columnas de la matriz:");
  
    for (let i = 0; i < filas; i++) {
      matriz.push([]);
      for (let j = 0; j < columnas; j++) {
        matriz[i].push(prompt(`Ingresa el valor de la fila ${i+1} y columna ${j+1}:`));
      }
    }
  
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
      let mayor = matriz[i][0];
      for (let j = 1; j < matriz[i].length; j++) {
        if (matriz[i][j] > mayor) {
          mayor = matriz[i][j];
        }
      }
      resultado.push(mayor);
    }
    
    alert(`El resultado es: ${resultado}`);
}

function ejercicio9(){
    const charIndex = () => {
    const palabra = prompt("Ingrese una palabra:");
    const caracter = prompt("Ingrese un carácter:");
    
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    
    const indices = [primerIndice, ultimoIndice];
    return indices;
    }
    
    const indicesCaracter = charIndex();
    alert("Primer índice: " + indicesCaracter[0] + ", Último índice: " + indicesCaracter[1]);
}

function ejercicio10(){
    function toArray(objeto) {
        var matriz = [];
      
        for (var clave in objeto) {
          if (objeto.hasOwnProperty(clave)) {
            matriz.push([clave, objeto[clave]]);
          }
        }
      
        alert(JSON.stringify(matriz));

    }
      
      
    var input = prompt("Ingresa el objeto en formato JSON:");
      
      
    var objeto = JSON.parse(input);
      
      
    toArray(objeto);
}

function ejercicio11(){
    const getBudgets = () => {
    const personas = [];
    let continuar = true;
    
    while (continuar) {
        const nombre = prompt("Ingrese el nombre de la persona:");
        const edad = parseInt(prompt("Ingrese la edad de la persona:"));
        const presupuesto = parseInt(prompt("Ingrese el presupuesto de la persona:"));
    
        const persona = {
        name: nombre,
        age: edad,
        budget: presupuesto
        };
    
        personas.push(persona);
    
        const respuesta = prompt("¿Desea ingresar otra persona? (Sí/No)").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }
    
    const sumaPresupuestos = personas.reduce((total, persona) => total + persona.budget, 0);
    return sumaPresupuestos;
    }
    
    const sumaTotal = getBudgets();
    alert("La suma de los presupuestos de las personas es: " + sumaTotal);
}

function ejercicio12() {
    let nombresEstudiantes = [];
    let numEstudiantes = prompt("Ingrese el número de estudiantes:");

    for (let i = 0; i < numEstudiantes; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i+1}:`);
        nombresEstudiantes.push(nombre);
    }

    alert(`Los nombres de los estudiantes son: ${nombresEstudiantes}`);
}

function ejercicio13(){
    const objectToArray = () => {
    const objeto = {};
    
    while (true) {
        const clave = prompt("Ingrese una clave (o escriba 'salir' para terminar):");
    
        if (clave.toLowerCase() === "salir") {
        break;
        }
    
        const valor = prompt(`Ingrese el valor para la clave "${clave}":`);
        objeto[clave] = valor;
    }
    
    const matriz = Object.entries(objeto);
    return matriz;
    }
    
    const resultado = objectToArray();
    alert("La matriz de claves y valores es: " + JSON.stringify(resultado));
}

function ejercicio14(){
    function squaresSum(n) {
        var suma = 0;
      
        
        for (var i = 1; i <= n; i++) {
          suma += Math.pow(i, 2);
        }
      
        
        alert("La suma de los números cuadrados es: " + suma);
    }
      
    
    var input = prompt("Ingresa un número:");
    
    
    var numero = parseInt(input);
    
    
    squaresSum(numero);
}

function ejercicio15(){
    const multiplyByLength = () => {
    const valores = [];
    let continuar = true;
    
    while (continuar) {
        const valor = parseFloat(prompt("Ingrese un valor numérico (o escriba 'salir' para terminar):"));
    
        if (isNaN(valor)) {
        break;
        }
    
        valores.push(valor);
    
        const respuesta = prompt("¿Desea ingresar otro valor? (Sí/No)").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }
    
    const multiplicados = valores.map(valor => valor * valores.length);
    return multiplicados;
    }
    
    const resultado = multiplyByLength();
    alert("El resultado de multiplicar cada valor por la cantidad de valores en la matriz es: " + resultado);
}

function ejercicio16(){
    let num = prompt("Ingrese un número:");
    let numeros = [];
  
    for (let i = num; i >= 0; i--) {
      numeros.push(i);
    }
  
    alert(`La matriz de números es: ${numeros}`);
}

function ejercicio17(){
    const diffMaxMin = () => {
    const valores = [];
    let continuar = true;
    
    while (continuar) {
        const valor = parseFloat(prompt("Ingrese un valor numérico (o escriba 'salir' para terminar):"));
    
        if (isNaN(valor)) {
        break;
        }
    
        valores.push(valor);
    
        const respuesta = prompt("¿Desea ingresar otro valor? (Sí/No)").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const diferencia = max - min;
    return diferencia;
    }
    
    const resultado = diffMaxMin();
    alert("La diferencia entre el número más grande y el más pequeño es: " + resultado);
}

function ejercicio18(){
    function filterList(lista) {
        var enteros = [];
      
    
        for (var i = 0; i < lista.length; i++) {
          if (typeof lista[i] === "number") {
            enteros.push(lista[i]);
          }
        }
      
    
        alert("La lista filtrada de enteros es: " + enteros);
      }
      
    
    var input = prompt("Ingresa los valores separados por comas:");
    
    
    var inputArray = input.split(",");
    
    
    var lista = [];
    for (var i = 0; i < inputArray.length; i++) {
    var valor = inputArray[i].trim();
    if (!isNaN(valor)) {
        lista.push(parseFloat(valor));
    }
    }
    
    
    filterList(lista);
}

function ejercicio19(){
    const repeat = () => {
    const elemento = parseFloat(prompt("Ingrese el elemento que desea repetir:"));
    const veces = parseInt(prompt("Ingrese la cantidad de veces que desea repetir el elemento:"));
    
    const resultado = Array(veces).fill(elemento);
    return resultado;
    }
    
    const arrayResultado = repeat();
    alert("El resultado de repetir el elemento es: " + arrayResultado);
}

function ejercicio20(){
    let cadena = prompt("Ingrese un texto:");
    let vocal = prompt("Ingrese una vocal:");
  
    let nuevaCadena = cadena.replace(/[aeiou]/gi, vocal);
  
    alert(`La nueva cadena es: ${nuevaCadena}`);
}

function ejercicio21(){
    const findNemo = () => {
    const cadena = prompt("Ingrese una cadena de palabras:");
    
    const palabras = cadena.split(" ");
    const indice = palabras.findIndex(palabra => palabra.toLowerCase() === "nemo");
    
    if (indice !== -1) {
        const orden = indice + 1;
        const resultado = `¡Encontré a Nemo en la palabra número ${orden}!`;
        return resultado;
    } else {
        return "Nemo no se encontró en la cadena proporcionada.";
    }
    }
    
    const resultado = findNemo();
    alert(resultado);
}

function ejercicio22(){
    function capLast(cadena) {
        var palabras = cadena.split(" ");
      
        for (var i = 0; i < palabras.length; i++) {
          var palabra = palabras[i];
          var ultimaLetra = palabra.charAt(palabra.length - 1);
          var nuevaUltimaLetra = ultimaLetra.toUpperCase();
          palabras[i] = palabra.slice(0, -1) + nuevaUltimaLetra;
        }
      
        alert("La cadena con la última letra de cada palabra capitalizada es: " + palabras.join(" "));
    }
    
    
    var input = prompt("Ingresa una cadena:");
    
    
    capLast(input);
}