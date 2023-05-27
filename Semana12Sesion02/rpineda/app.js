// arrMiArray = []

// function hacerAlgo(){}
// console.log(hacerAlgo.prototype)

// // const hacerAlgo1 = function(){}

// // console.log(hacerAlgo1.prototype)

// hacerAlgo.prototype.comer = "Comida"
// console.log(hacerAlgo.prototype)

// let instancia = new hacerAlgo()
// instancia.data = true
// console.log(instancia)

// let a ={nombre:1}
// let b = Object.create(a)
// console.log(b.nombre)

// let c = Object.create(b)
// console.log(c)


function Persona(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.tipoIdentificacion = tipoIdentificacion;
    this.numIdentificacion = numIdentificacion;
    this.sexo = sexo;
    this.fechNacimiento = fechNacimiento;
    this.direccion = direccion;

    this.setNombre = function (value) {
        this.nombre = value
    }
    this.setApellido = function (value) {
        this.apellido = value
    }


    this.registarVisita = function (fecha) {
        console.log("Visita registrada en: " + fecha)
    }
}

function Cliente(codCliente) {
    this.codCliente = codCliente
    this.comprar = function (modelo) {
        console.log(`se compro el modelo: ${modelo}`)
    }

    this.devolver = function (modelo) {
        console.log(`Devolvio el modelo: ${modelo}`)
    }
}

console.log(Persona)

Cliente.prototype = new Persona()

let miCliente = new Cliente(123)
miCliente.setNombre("Roberto")
miCliente.setApellido("Pineda")

let ahora = Date()
miCliente.registarVisita(ahora)


function MakeSizer(tamano) {
    return function () {
        document.body.style.fontSize = tamano * 2 + "px"
    }
}

const tamano12 = MakeSizer(12)
const tamano14 = MakeSizer(14)
const tamano16 = MakeSizer(16)

document.getElementById('12').onclick = tamano12;
document.getElementById('14').onclick = tamano14;
document.getElementById('16').onclick = tamano16;


function saludar(nombre) {
    alert(`Hola ${nombre}`)
}

function despedir(nombre) {
    alert(`Ciao ${nombre}`)
}

function procesaData(callback) {
    let nombre = prompt("Escribe tu nombre")
    callback(nombre)
}

// procesaData(saludar)

// procesaData(despedir)


function traerDatos(callback) {

    let datos;
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            datos = data
            callback(datos)
        }
    });
    
}

function dibujarFoto(datos) {
    const image = document.createElement('img');
    image.setAttribute(
        'src',
        datos.results[0].picture.large,
    );


    const box = document.getElementById('box');
    box.appendChild(image);
}

function dibujarInfo(datos)
{
  const paraf = document.createElement('p')
  paraf.innerText = datos.results[0].email
  const box = document.getElementById('box')
  box.appendChild(paraf)
}

traerDatos(dibujarFoto)
traerDatos(dibujarInfo)