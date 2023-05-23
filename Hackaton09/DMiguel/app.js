var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url'); 


var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
var new_inputs = '<label for="dato_i">Datos _i</label><input id="dato_i" type="text" class="form-control">'

var miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    switch (peticion.url) {
        case "/":
            var html = fs
                .readFileSync(__dirname + "/templates/inicio.html")
            respuesta.end(html);
            break;
        case "/ejercicio/1":
            titulo = "Ejercicio 01"
            parrafo = "1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/2":
            titulo = "Ejercicio 02"
            parrafo = "2. Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 4);
            break;
        case "/ejercicio/3":
            titulo = "Ejercicio 03"
            parrafo = "3. Calcular el área de un rectángulo"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "4. Calcular el área de un triángulo"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        case "/ejercicio/6":
            titulo = "Ejercicio 06"
            parrafo = "6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/7":
            titulo = "Ejercicio 07"
            parrafo = "7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        case "/ejercicio/8":
            titulo = "Ejercicio 08"
            parrafo = "8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        case "/ejercicio/9":
            titulo = "Ejercicio 09"
            parrafo = "9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        case "/ejercicio/10":
            titulo = "Ejercicio 10"
            parrafo = "10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 6);
            break;
        case "/ejercicio/11":
            titulo = "Ejercicio 11"
            parrafo = "11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        case "/ejercicio/12":
            titulo = "Ejercicio 12"
            parrafo = "12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
            generarEjercicio(respuesta, titulo, parrafo, "", 1);
            break;
        case "/ejercicio/13":
            titulo = "Ejercicio 13"
            parrafo = "13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/14":
            titulo = "Ejercicio 14"
            parrafo = "14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 4);
            break;
        case "/ejercicio/15":
            titulo = "Ejercicio 15"
            parrafo = "15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");

function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function generarEjercicio(respuesta, titulo, parrafo, new_inputs, cant_inp) {
    new_inputs = repeatText(new_inputs, cant_inp)
    let html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%inputs%", new_inputs)
    respuesta.end(html)
}



