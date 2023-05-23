
//ejercicio 1
const ejercicio1 = () => {

    let ej1var1 = document.getElementById('ej1var1').value;
    let ej1var2 = document.getElementById('ej1var2').value;
    let ej1var3 = document.getElementById('ej1var3').value;
    
    let ej1rpta = `Hola mi nombre es ${ej1var1} ${ej1var2} y mi edad es ${ej1var3}.`
    
    document.getElementById("ej1rpta").innerHTML = ej1rpta;
    
    }

//ejercicio 2
let ej2numbers=[];

function ejercicio2(){
    let pow3 = ej2numbers.reduce(pow3_reducer,0);
    document.getElementById("ej2rpta").innerHTML = "La suma de cubo de los numeros es: "+pow3;
}

//ejercicio2  adicionales
function ejercicio2ingresar(){
    ej2numbers.push(parseInt(document.getElementById('ej2num1').value));
    document.getElementById("ej2numeros").innerHTML = "Los numeros ingresados son: "+(ej2numbers.join(", "));
}

function ejercicio2reset(){
    ej2numbers=[];
    document.getElementById("ej2numeros").innerHTML = "Se han borrado todos los numeros";
    document.getElementById("ej2rpta").innerHTML = "";
}

function pow3_reducer(accumulator, currentValue){
    return (accumulator + Math.pow(currentValue, 3));
}

//EJERCICIO 03
function ejercicio3(){

    let ej3var1 = document.getElementById('ej3var1').value;
    let dataType

    if (isNaN(ej3var1)) {
        dataType = "string";
      } else {
        dataType = "number";
      }

    document.getElementById("ej3rpta").innerHTML = "El tipo de dato es: "+dataType+". Para otro tipo de dato usar la consola";
}

//EJERCICIO O4
let ej4numbers=[];

function ejercicio4(...args){
    args=ej4numbers;
    let sum = args.reduce(sum_reducer, 0);
    document.getElementById("ej4rpta").innerHTML = "La suma de los numeros es: "+sum;
}

//ejercicio4  adicionales
function ejercicio4ingresar(){
    ej4numbers.push(parseInt(document.getElementById('ej4num1').value));
    document.getElementById("ej4numeros").innerHTML = "Los numeros ingresados son: "+(ej4numbers.join(", "));
}

function ejercicio4reset(){
    ej4numbers=[];
    document.getElementById("ej4numeros").innerHTML = "Se han borrado todos los numeros";
    document.getElementById("ej4rpta").innerHTML = "";
}

function sum_reducer(accumulator, currentValue){
    return (accumulator + currentValue);
}


//EJERCICIO 05

let letras=[];
let numeros=[];

function ejercicio5(){
    console.log(letras);
    console.log(numeros);
    document.getElementById("ej5rpta").innerHTML = "Los numeros son: "+(numeros.join(", "))+"<br>Los string son: "+(letras.join(", "));
    letras=[];
    numeros=[];
}

//ejercicio5  adicionales
function ejercicio5ingresar(){

    let ej5var1 = document.getElementById('ej5var1').value;

    if (isNaN(ej5var1)) {
        letras.push(ej5var1);
      } 
    
     else {
        numeros.push(ej5var1);
      }
      document.getElementById('ej5var1').value='';
}

function ejercicio5reset(){
    letras=[];
    numeros=[];
    document.getElementById("ej5rpta").innerHTML = "";
}


//EJERCICIO O6
let ej6numeros=[];

function ejercicio6(...args){
    args=ej6numeros;
    console.log(args);
    let ej6min=Math.min(...args);
    let ej6max=Math.max(...args);
    console.log(ej6min)

    document.getElementById("ej6rpta").innerHTML = "el numero menor del arreglo es "+ej6min+" y el numero mayor del arreglo es "+ej6max
    ej6numeros=[];
    document.getElementById('ej6var1').value="";
}

//ejercicio6  adicionales
function ejercicio6ingresar(){

    let ej6var1 = document.getElementById('ej6var1').value;

    if (isNaN(ej6var1)) {
        document.getElementById("ej6rpta").innerHTML = "No es un numero. Ingrese numeros";
      } 
    
     else {
        ej6numeros.push(parseInt(ej6var1));
      }

    document.getElementById('ej6var1').value='';
}

function ejercicio6reset(){
    ej6numeros=[];
    document.getElementById("ej6rpta").innerHTML = "";
}


//EJERCICIO O7
let ej7numeros=[];

function ejercicio7(...args){
    args=ej7numeros;
    console.log(args);

    document.getElementById("ej7rpta").innerHTML = `(${ej7numeros.slice(0, 3).join("")}) ${ej7numeros.slice(3, 6).join("")}-${ej7numeros.slice(6).join("")}`;


}
//ejercicio7  adicionales
function ejercicio7ingresar(){    
        let ej7var1 = document.getElementById('ej7var1').value;

        if (isNaN(ej7var1)) {
            document.getElementById("ej7rpta").innerHTML = "No es un numero. Ingrese numeros";
        } 
        
        else {
            ej7var1=parseInt(ej7var1)

            if (ej7var1<0 || ej7var1>9) 
            {
                document.getElementById("ej7rpta").innerHTML = "El numero no esta en el rango";
            }  
            else {
                ej7numeros.push(ej7var1);
            }
        }
    
        document.getElementById('ej7var1').value='';    

        if ((Object.keys(ej7numeros).length)==10){ 
            ejercicio7();
            ej7numeros=[];
        }        
}

//EJERCICIO 8

let ej8arrayofarrays=[];
let ej8array=[];

function ejercicio8(...args){
    args=ej8arrayofarrays;
    let maxValues = args.map(function(item) {
        return Math.max.apply(null, item);
      });

    document.getElementById("ej8rpta").innerHTML = "Los numeros mayores "+maxValues
    ej8array=[];
    ej8arrayofarrays=[];
    document.getElementById('ej8var1').value="";
}

//ejercicio8  adicionales
function ejercicio8ingresar(){

    let ej8var1 = document.getElementById('ej8var1').value;

    if (isNaN(ej8var1)) {
        document.getElementById("ej8rpta").innerHTML = "No es un numero. Ingrese numeros";
      } 
    
     else {
        ej8array.push(parseInt(ej8var1));
      }

    document.getElementById('ej8var1').value='';
}

function ejercicio8newarray(){
    document.getElementById("ej8arr").innerHTML = document.getElementById("ej8arr").value + "<br>"+ej8array 
    ej8arrayofarrays.push(ej8array);
    ej8array=[];
    document.getElementById("ej8arr").innerHTML = ej8arrayofarrays.join("<br>") 
}

function ejercicio8reset(){
    ej8arrayofarrays=[];
    ej8array=[]
    document.getElementById("ej8rpta").innerHTML = "";
    document.getElementById("ej8arr").innerHTML = "";
}

//EJERCICIO 9

function ejercicio9() {

    let inputString = document.getElementById("ej9var1").value.trim();
	let inputChar = document.getElementById("ej9var2").value.trim();

	// Validar la entrada del usuario
	if (!inputString.match(/^[a-zA-Z]+$/) || inputChar.length !== 1) {
		document.getElementById("ej9rpta").innerHTML = "Ingrese datos validos"
		return;
	}

	// Calcular los índices del carácter en la palabra
	let result = firstLastIndex(inputString, inputChar);

	document.getElementById("ej9rpta").innerHTML = "La letra '"+inputChar+"' se ubica primero en el index "+result[0]+" y ultimo en el index "+result[1];
}

function firstLastIndex(str, char) {
    var firstIndex = str.indexOf(char);
    var lastIndex = str.lastIndexOf(char);
    
    if (firstIndex === -1 || lastIndex === -1) {
      // El carácter no se encuentra en la cadena
      return null;
    } else {
      // El carácter se encuentra en la cadena
      return [firstIndex, lastIndex];
    }
  }

  //EJERCICIO 10
let  obj = {};
function ejercicio10() {
    const arr = toArray(obj);
    console.log(arr);
    document.getElementById("ej10rpta").innerHTML = arr;
}

function ejercicio10ingresar(){
      const key = document.getElementById("ej10var1").value;
      const value = document.getElementById("ej10var2").value;
      obj[key] = value;
      document.getElementById("ej10var1").value = "";
      document.getElementById("ej10var2").value = "";
      const item = document.createElement("li");
      item.textContent = `${key}: ${value}`;
      document.getElementById("list").appendChild(item);
}

function ejercicio10reset(){
    obj={};
    arr=[];
    document.getElementById("ej10rpta").innerHTML = "";
    document.getElementById("list").innerHTML = "";
}

function toArray(obj) {
    return Object.entries(obj);
}

//EJERCICIO 11
let  ej11obj = {};
let ej11arr  = [];
function ejercicio11() {
    let totalBudgets = 0;
    for (let i = 0; i < ej11arr.length; i++) {
      totalBudgets += ej11arr[i].budget;
    }
    document.getElementById("ej11rpta").innerHTML = "Total budget: " +totalBudgets;
}

function ejercicio11ingresar(){
      ej11obj = {name: document.getElementById("ej11var1").value,
                age: parseInt(document.getElementById("ej11var2").value),
                budget: parseInt(document.getElementById("ej11var3").value)}
      ej11arr.push(ej11obj);
      document.getElementById("ej11var1").value = "";
      document.getElementById("ej11var2").value = "";
      document.getElementById("ej11var3").value = "";
      document.getElementById("ej11arr").innerHTML = JSON.stringify(ej11arr)
      

}

function ejercicio11reset(){
    ej11obj={};
    ej11arr=[];
    document.getElementById("ej11rpta").innerHTML = "";
    document.getElementById("ej11arr").innerHTML = "";
}

//EJERCICIO12
let  ej12obj = {};
let ej12arr  = [];
function ejercicio12() {

    const studentNames = getStudentNames(ej12arr);

    document.getElementById("ej12rpta").innerHTML = studentNames;
}

function ejercicio12ingresar(){
      ej12obj = {name: document.getElementById("ej12var1").value}
      ej12arr.push(ej12obj);
      document.getElementById("ej12var1").value = "";
      document.getElementById("ej12arr").innerHTML = JSON.stringify(ej12arr)
}

function ejercicio11reset(){
    ej12obj={};
    ej12arr=[];
    document.getElementById("ej12rpta").innerHTML = "";
    document.getElementById("ej12arr").innerHTML = "";
}

function getStudentNames(students) {
    return students.map(student => student.name);
  }


//EJERCICIO 13
let  ej13obj = {};
let ej13arr  = [];
function ejercicio13() {

    ej13obj = {name: document.getElementById("ej13var1").value,
    age: parseInt(document.getElementById("ej13var2").value),
    budget: parseInt(document.getElementById("ej13var3").value)}
    
    document.getElementById("ej13var1").value = "";
    document.getElementById("ej13var2").value = "";
    document.getElementById("ej13var3").value = "";
    document.getElementById("ej13arr").innerHTML = JSON.stringify(ej13obj)

    const ej13arr = objectToArray(ej13obj);
    document.getElementById("ej13rpta").innerHTML = ej13arr.join("<br>");
}

function ejercicio13reset(){
    ej13obj={};
    ej13arr=[];
    document.getElementById("ej13rpta").innerHTML = "";
    document.getElementById("ej13arr").innerHTML = "";
}

function objectToArray(obj) {
    return Object.entries(obj);
  }

//EJERCICIO 14
function ejercicio14(){

    const ej14var=parseInt(document.getElementById("ej14var1").value);
    const ej14rpta=sumofsquares(ej14var);

    document.getElementById("ej14rpta").innerHTML = "La suma de los primeros "+ej14var+" cuadrados es "+ej14rpta;
}

function sumofsquares(n){
    const resultado = n*(n+1)*(2*n+1)/6;
    return resultado;
}

//EJERCICIO15
let ej15arr  = [];
function ejercicio15() {
    const newej15arr = ej15arr.flatMap((x) => x * ej15arr.length);
    document.getElementById("ej15rpta").innerHTML = newej15arr
}

function ejercicio15ingresar(){
      const ej15var1 = parseInt(document.getElementById("ej15var1").value)
      ej15arr.push(ej15var1);
      document.getElementById("ej15var1").value = "";
      document.getElementById("ej15arr").innerHTML = ej15arr
}

function ejercicio15reset(){
    ej15arr = [];
    document.getElementById("ej15rpta").innerHTML = "";
    document.getElementById("ej15arr").innerHTML = "";
}

//EJERCICIO 16
function ejercicio16(){
    let ej16rpta=[];
    const ej16var=parseInt(document.getElementById("ej16var1").value);
    ej16rpta=countdown(ej16var);

    document.getElementById("ej16rpta").innerHTML = ej16rpta;
}

function countdown(n){
    let resultado=[];
    while(n>=0){
        resultado.push(n);
        n=n-1;
    }
    
    return resultado;
}

//EJERCICIO 17
let ej17arr  = [];
function ejercicio17() {
    const ej17rpta=diffMaxMin(ej17arr);
    document.getElementById("ej17rpta").innerHTML = "La diferencia entre el maximo y el minimo es "+ej17rpta;
}

function ejercicio17ingresar(){
      const ej17var1 = parseInt(document.getElementById("ej17var1").value)
      ej17arr.push(ej17var1);
      document.getElementById("ej17var1").value = "";
      document.getElementById("ej17arr").innerHTML = ej17arr
}

function ejercicio17reset(){
    ej17arr=[];
    document.getElementById("ej17rpta").innerHTML = "";
    document.getElementById("ej17arr").innerHTML = "";
}

function diffMaxMin(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const resultado = max-min
    return resultado;
}

//EJERCICIO 18
let ej18arr  = [];
function ejercicio18() {
    const ej18rpta=filterList(ej18arr);
    document.getElementById("ej18rpta").innerHTML = "Arreglo filtrado solo numeros "+ej18rpta;
}

function ejercicio18ingresar(){
      const ej18var1 = document.getElementById("ej18var1").value;
      let aux18= isNaN(ej18var1) ? ej18var1 : parseInt(ej18var1,10);
      ej18arr.push(aux18);
      document.getElementById("ej18var1").value = "";
      document.getElementById("ej18arr").innerHTML = "Arreglo ingresado "+ej18arr
}

function ejercicio18reset(){
    ej18arr=[];
    document.getElementById("ej18rpta").innerHTML = "";
    document.getElementById("ej18arr").innerHTML = "";
}

function filterList(arr) {
    return arr.filter(item => {
      const num = parseInt(item);
      return Number.isInteger(num);
    });
  }

//EJERCICIO19

function ejercicio19() {

    let ej19arr  = [];
    const ej19var1 = parseInt(document.getElementById("ej19var1").value);
    const ej19var2 = parseInt(document.getElementById("ej19var2").value);
    const ej19rpta=repeat(ej19var1, ej19var2);
    document.getElementById("ej19rpta").innerHTML = ej19rpta;
}

function repeat(num,repeat){
    let arr=[];
    while(repeat>0){
        arr.push(num);
        repeat=repeat-1;
    }
    return arr;
}

//EJERCICIO 20
function ejercicio20() {

    const ej20var1 = document.getElementById("ej20var1").value;
    const ej20var2 = document.getElementById("ej20var2").value;

    if(ej20var2==='a'||ej20var2==="e"||ej20var2==="i"||ej20var2==="o"||ej20var2==="u"){
            ej20rpta=ej20var1.vreplace(ej20var2);
    }
    else {
        ej20rpta= "Valor incorrecto, ingrese una vocal"
    }
    
    document.getElementById("ej20rpta").innerHTML = ej20rpta;
}

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
  }

//EJERCICIO21
function ejercicio21() {

    const ej21var1 = document.getElementById("ej21var1").value;

    const ej21rpta=findNemo(ej21var1);
    
    document.getElementById("ej21rpta").innerHTML = ej21rpta;
}

function findNemo(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() === "nemo") {
        return `Encontre a Nemo en ${i + 1}!`;
      }
    }
    return "No encontre a Nemo";
  }


//EJERCICIO22
function ejercicio22() {

    const ej22var1 = document.getElementById("ej22var1").value;

    const ej22rpta=capLast(ej22var1);
    
    document.getElementById("ej22rpta").innerHTML = ej22rpta;
}

function capLast(str) {
    const words = str.split(" ");
    const palabrasMayus = words.map(word => {
      const ultimaLetra = word.slice(-1).toUpperCase();
      const restoPalabra = word.slice(0, -1);
      return restoPalabra + ultimaLetra;
    });
    return palabrasMayus.join(" ");
  }