
function calculadora() {
    let primerNumero = 0;
    let segundoNumero = 0;
    let operacion = "";
    let respuesta = 0;

    primerNumero = parseInt(prompt("Escriba el primer numero")); //prompt mostrar en pantalla una ventana que pide un dato como string, parseint es para pasarlo a integer
    segundoNumero = parseInt(prompt("Escribir el segundo numero"));

    operacion = prompt("La operacion (suma, resta, multiplicacion, division)");

    // if (operacion == "suma") {
    //     respuesta = primerNumero + segundoNumero;
    // }
    // else if (operacion == "resta") {
    //     respuesta = primerNumero - segundoNumero;
    // }
    // else if (operacion == "multiplicacion") {
    //     respuesta = primerNumero * segundoNumero;
    // }
    // else if (operacion == "division") {
    //     respuesta = primerNumero / segundoNumero;
    // }

    switch (operacion) {
        case 'suma':
            respuesta = primerNumero + segundoNumero;
            break;
        case 'resta':
            respuesta = primerNumero - segundoNumero;
            break;
        case 'multiplicacion':
            respuesta = primerNumero * segundoNumero;
            break;
        case 'division':
            respuesta = primerNumero * segundoNumero;
            break;
        
    }


    alert("La " + operacion + " entre " + primerNumero + " y " + segundoNumero + " es " + respuesta);
}

function edad(anoNacimiento){
    let respuesta = 2023 - anoNacimiento;
    return respuesta;
}

function traerEdad(){
    let anios = parseInt( prompt("Escribe el anio de nacimeinto"));
    let retorno = edad(anios);
    let isMember = false;
    console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"));

    alert("Tu edad es: "+ retorno);

}

let arrComidas = ["ceviche","arroz con pollo", "taku taku", "pizza", 12, 2.3, true, false];

arrComidas.pop();
arrComidas.push("Hamburguesa")
let arrjoin = arrComidas.join('|')
console.log(arrjoin)

arrComidas.forEach(element => {
    console.log(element);
});

for (let index = 0; index < arrComidas.length; index++) {
    const element = arrComidas[index];
    console.log(element); 
}


const ages = [3, 10, 18, 20, 42];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("midiv").innerHTML = ages.find(checkAge);
}

//myFunction()

class Autos{
    constructor(Marca){
        this.Marca = Marca;
    }
    getMarca(){
        return this.Marca
    }
    setMarca(nuevaMarca){
        this.Marca = nuevaMarca;
    }
    rodar(kph) {
        console.log("Estoy rodando a " + kph + "kph en mi "+ this.Marca);
    }
}

let carro = new Autos("BMW");
console.log(carro.Marca)
carro.rodar(50)
let segundoCarro = new Autos("AUDI")
segundoCarro.rodar(70)

console.log(carro.getMarca());
carro.setMarca("Mercedes");
console.log(carro.getMarca());

function prender(){
    document.getElementById('myImage').src='pic_bulbon.gif';
}
function apagar(){
    document.getElementById('myImage').src='pic_bulboff.gif'
}
function cambiar(){
    document.getElementById("midiv").style.height = "350px";
}

let valor1 = 50
let valor2  = "50"

if(valor1 == valor2){
    console.log("es igual ==")
}

if(valor1 === valor2){
    console.log("es igual ===")
}else{
    console.log("no es igual ===")
}

let avion = {
    modelo: "F-16",
    color: "Gris",
    techoVuelo : 16000,
    alcance: 3000,
    volar:function(){
        console.log("Estoy volando a "+ this.techoVuelo);
    },
    aterrizar : (aeropuerto) => {
        console.log("Estoy aterrizando en "+ aeropuerto);
      }
}



avion.volar()
avion.aterrizar("jorge chavez")