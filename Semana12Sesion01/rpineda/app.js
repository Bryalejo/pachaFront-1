class Personas {
    constructor(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numIdentificacion = numIdentificacion;
        this.sexo = sexo;
        this.fechNacimiento = fechNacimiento;
        this.direccion = direccion;
    }

    registarVisita(fecha) {
        console.log("Visita registrada en: " + fecha)
    }
}

class Usuarios extends Personas {

    constructor(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion, username, email, password) {
        super(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion);
        this.username = username;
        this.email = email;
        this._password = password
    }

    get passwordGet() {
        return this.password
    }

    /**
     * @param {string} value
     */
    set passwordSet(value) {
        this.password = value;
    }

    ingresarPagina(password) {
        if (password == this.password)
            console.log(`Login de la persona ${this.email}`)
        else
            console.log(`El password es incorrecto`)
    }

    registarVisita(fecha) {
        console.log("Visita del usuario registrada en: " + fecha)
    }
}

class Clientes extends Personas {
    constructor(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion, codCliente) {
        super(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion);
        this.codCliente = codCliente;
    }

    comprar(modelo) {
        console.log(`se compro el modelo: ${modelo}`)
    }

    devolver(modelo) {
        console.log(`Devolvio el modelo: ${modelo}`)
    }
}

class Proveedores extends Personas {
    constructor(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion, codProveedor) {
        super(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion);
        this.codProveedor = codProveedor;
    }

    vender(modelo) {
        console.log(`Nos vendieron el siguiente modelo ${modelo}`)
    }
    devolver(modelo) {
        console.log(`Devolvimos el siguiente modelo ${modelo}`)
    }
}

class Coleccionistas extends Personas {
    constructor(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion, codColeccionista) {
        super(nombre, apellido, tipoIdentificacion, numIdentificacion, sexo, fechNacimiento, direccion);
        this.codColeccionista = codColeccionista;
    }
    comprar(modelo, proveedor) {
        console.log(`se compro un modelo nuevo: ${modelo.nombre} al proveedor: ${proveedor.nombre}`)
    }
    armar(modelo) {
        console.log(`se esta armando un modelo: ${modelo.nombre}`)
        let nroPartes = modelo.nroPartes;
        for (let index = 0; index < nroPartes; index++) {
            console.log(`armando la pieza ${index}`);
        }
        console.log(`se termino de armar el modelo: ${modelo.nombre}`)
    }
    pintar(modelo) {
        console.log(`se esta pintando el modelo: ${modelo.nombre}`)
        let nroPartes = modelo.nroPartes;
        for (let index = 0; index < nroPartes; index++) {
            console.log(`pintando la pieza ${index}`);
        }
        console.log(`se termino de pintar el modelo: ${modelo.nombre}`)
    }
    vender(modelo, cliente) {
        console.log(`se vendio el modelo: ${modelo.nombre} al Cliente: ${cliente.nombre}`)
    }
}

class Modelos {
    constructor(nombre, tipo, escala, marca, nroPartes) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.marca = marca;
        this.escala = escala;
        this.nroPartes = nroPartes
    }

}
const objColeccionista = new Coleccionistas("Roberto", "Pineda", "CE", "001575291", "Masculino", "1983-08-28", "Lince", "0001");
const date = new Date()
objColeccionista.registarVisita(date)

const objProveedor = new Proveedores("David","Lopez", "RUC", "1234567890123", "Masculino", "2020-01-21", "La Victoria", "PROV-001")
const objCliente = new Clientes("Karen", "Lam", "DNI", "87876543", "Femenino", "1996-09-24", "Chiclayo", "CLI-001")
const objModelo = new Modelos("Lockheed Martin F-22A Raptor", "Military Aircraft", "1:72", "Revell", 116)
objColeccionista.comprar(objModelo, objProveedor)
objColeccionista.armar(objModelo)
objColeccionista.pintar(objModelo)
objColeccionista.vender(objModelo, objCliente)

// const objPersona = new Personas("Roberto", "Pineda", "CE", "001575291", "Masculino", "1983-08-28", "Lince");

// const objPersona2 = new Personas("Karen", "Lam", "DNI", "42304934", "Femenino", "1993-09-24", "Chiclayo")

// const date = new Date();
// objPersona2.registarVisita(date)


// console.log(objPersona.nombre)
// console.log(objPersona2.nombre)

// const objUsuario = new Usuarios("Roberto", "Pineda", "CE", "001575291", "Masculino", "1983-08-28", "Lince", "rpineda", "rpineda@x-codec.net", "123456");

// const objUsuario2 = new Usuarios("Karen", "Lam", "DNI", "42304934", "Femenino", "1993-09-24", "Chiclayo", "klam", "klam@x-codec.net", "654321")

// console.log("Nombre: " + objUsuario.nombre + " Apellido: " + objUsuario.apellido + " Email: " + objUsuario.email)

// objUsuario2.registarVisita(date)
// objUsuario2.ingresarPagina("654322")

// objUsuario.passwordSet = "123456"
// console.log(objUsuario)
// console.log(objUsuario.passwordGet)
// objUsuario._password = 1212

// console.log(objUsuario.passwordGet)

// objUsuario.passwordSet = 1212
