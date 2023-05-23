# Reto 1

## Lectura

Lee el siguinete artículo: https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS Uno de los conceptos más usados en Javascript es la Programación Orientada a Objetos. Se debe aprender muy bien todos los conceptos y definiciones que abarcan estos.

## Preguntas

- ¿Por qué se crean los objetos? .- Los objetos se crean con la finalidad de optimizar codigo, como una funcion pero se alladen mas cosas, los objetos tienen atributos y funciones; un ejemplo basico de un Objeto:

  - Carro

    - Atributos
      - cantidad de llantas
      - color
      - cantidad de Puertas
      - motor
      - parabrisas
      - paracoches
      - cantidad de asientos
    - Funciones
      - encederMotor()
      - Avanzar()
      - AumentarVelocidad()
      - DisminuirVelocidad()
      - Frenar()

    Como vemos esta es una clase pero si nosotros creamos un objeto carro nesecitamos personalizar la plantilla carro dependiento de nuestra nesecidad, de ahi para adelante el objeto es unico y deferente a otros, y esto nos podria servir para crear clases como usuario, administrador,etc; que nos va permitir optimizar codigo que no se puede repetir.
- ¿Qué hubiera pasado si agregaba otra propiedad? .- ¿Que pasa si agregamos una propiedad a un objeto?, si agrega una propiedad o atributos se almacenara en el objeto y se podra acceder con normalidad al objeto, pero funciones que fueron declaradas solo trabajaran con las propiedades declaradas al comienzo que fue declaradas.
- ¿Se puede generar de otra manera algún objeto? .- En javascript hay muchas maneras de generar un objeto, a continuacion varios ejemplos de estas maneras:

  - Notación literal del Objeto: se declara una variable q contiene al objeto, este mismo va entre corchetes.

    ```
    const miObjeto = {
      clave1: valor1,
      clave2: valor2,
      clave3: valor3
    };

    ```
  - Constructor de Objeto: pódemos usar una funcion contructura para inicializar un objeto, y se utilizara la palabra `new` cuando declaremos el objeto.

    ```
    function MiObjeto(clave1, clave2) {
      this.clave1 = clave1;
      this.clave2 = clave2;
    }

    const instanciaObjeto = new MiObjeto(valor1, valor2);

    ```
  - Object.create() .- podemos utilizar el metodo `Object.create()` para crear un nuevo objeto utilizando como prototipo un ejemplo existente.

    ```
    const prototipoObjeto = {
      clave1: valor1,
      clave2: valor2
    };

    const nuevoObjeto = Object.create(prototipoObjeto);

    ```
  - Clases .- Apartir de ECMAScript 2015 (ES6), JS introdujo la sintaxsis para crear clases, las clases son como plantillas de objetos, que podemos personalizar.

    ```
    class MiClase {
      constructor(clave1, clave2) {
        this.clave1 = clave1;
        this.clave2 = clave2;
      }

      miMetodo() {
        // Código del método
      }
    }

    const instanciaClase = new MiClase(valor1, valor2);

    ```
