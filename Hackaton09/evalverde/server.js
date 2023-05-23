const http = require('http');
const fs = require('fs')

let titulo= "hackaton 09"
let parrafo =" Respuestas de la hackaton 09"

console.log(__dirname)


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const url = req.url
    switch(url){
      case "/":
      let html = fs
      .readFileSync(__dirname + "/index.html")
      .toString()
      .replace("%titulo%", titulo)
      .replace("%parrafo%", parrafo);
      res.end(html)
      break;
      case("/Ejercicio01"):
     let html01 = fs
      .readFileSync(__dirname + "/ejercicios/ejercicio1.html")
      .toString()
      .replace("%titulo%", titulo)
      .replace("%parrafo%", parrafo);
      res.end(html01)
      break;

      case("/Ejercicio02"):
      let html02 = fs
       .readFileSync(__dirname + "/ejercicios/ejercicio2.html")
       .toString()
       .replace("%titulo%", titulo)
       .replace("%parrafo%", parrafo);
       res.end(html02)
       break;

       case("/Ejercicio03"):
       let html03 = fs
        .readFileSync(__dirname + "/ejercicios/ejercicio3.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo);
        res.end(html03)
        break;

        case("/Ejercicio04"):
        let html04 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio4.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html04)
         break;

         case("/Ejercicio05"):
        let html05 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio5.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html05)
         break;

         case("/Ejercicio06"):
        let html06 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio6.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html06)
         break;
         
         case("/Ejercicio07"):
        let html07 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio7.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html07)
         break;

         case("/Ejercicio08"):
         let html08 = fs
          .readFileSync(__dirname + "/ejercicios/ejercicio8.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo);
          res.end(html08)
          break;

          case("/Ejercicio09"):
        let html09 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio9.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html09)
         break;

         case("/Ejercicio10"):
        let html10 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio10.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html10)
         break;

         case("/Ejercicio11"):
         let html11 = fs
          .readFileSync(__dirname + "/ejercicios/ejercicio11.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo);
          res.end(html11)
          break;

          case("/Ejercicio12"):
          let html12 = fs
           .readFileSync(__dirname + "/ejercicios/ejercicio12.html")
           .toString()
           .replace("%titulo%", titulo)
           .replace("%parrafo%", parrafo);
           res.end(html12)
           break;

           case("/Ejercicio13"):
        let html13 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio13.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html13)
         break;

         case("/Ejercicio14"):
         let html14 = fs
          .readFileSync(__dirname + "/ejercicios/ejercicio14.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo);
          res.end(html14)
          break;

          case("/Ejercicio15"):
        let html15 = fs
         .readFileSync(__dirname + "/ejercicios/ejercicio15.html")
         .toString()
         .replace("%titulo%", titulo)
         .replace("%parrafo%", parrafo);
         res.end(html15)
         break;

      default:
        respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
           



    }
});


server.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});


