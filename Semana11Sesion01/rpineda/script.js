
function ejecutar(){
    //const element = document.activeElement.tagName;
    // console.log(element);
    // let base = document.baseURI;
    // console.log(base);
    // encoding = document.characterSet;
    // console.log(encoding)
    // const myElement = document.getElementById("myp");
    // myElement.style.color = "red";

    // const collection = document.getElementsByClassName("myclassp");
    // console.log(collection)
    // collection[2].style.color = "blue"
    // let elements = document.getElementsByName("nombre1");
    // console.log(elements)
    // elements[1].checked = true;
    // elements[2].disabled = true;
    // const collection = document.getElementsByTagName("*");
    // console.log(collection)
    // collection[0].disabled = true
    // const para = document.createElement("p");
    // para.innerText = "This is a paragraph";
    // document.body.appendChild(para);
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode("Hello World");
    h1.appendChild(textNode);
    document.body.appendChild(h1)

    const select  = document.createElement("select")
    const op1 = document.createElement("option")
    const op2 = document.createElement("option")
    const op3 = document.createElement("option")
    op1.value = 1
    op1.innerText = "bmw"
    op1.id = "id1"
    op2.value = 2
    op2.innerText = "mercedes"
    op3.value = 3
    op3.innerText = "jaguar"
    select.id = "select1"
    select.appendChild(op1)
    select.appendChild(op2)
    select.appendChild(op3)
    document.body.appendChild(select)

    let strHtml = '<select><option value="1">bmw</option><option value="2">mercedes</option><option value="3">jaguar</option></select>'
    let div = document.getElementById('divselect')
    div.innerHTML = strHtml

    let zaku = document.getElementById('zaku3')
    let url = zaku.src;
    console.log(url)
    zaku.src = "https://files.cults3d.com/uploaders/17090299/illustration-file/64e4abb7-98b3-4bd1-8235-b2452187c278/zaku-iii-2.jpg"
    document.title = "Mira mi nuevo Zaku 3";

    const collection = document.getElementsByTagName("*");
    console.log(collection)
    let select1  = document.getElementById("select1")
    select1.addEventListener("change", function(){
        console.log("cambio de auto")
    });
    
}

let boton = document.getElementById('ejecutar')
boton.addEventListener("click", ejecutar);
boton.addEventListener("blur", onblurRP);


function onblurRP(){
    console.log("paso por onblur")
}
let email = document.getElementById('email')
email.addEventListener("copy", function(){
    console.log("Hizo copy ctrl + c")
});

let imagen = document.getElementById('zaku3')
imagen.addEventListener("copy", function(){
    console.log("Hizo copy ctrl + c")
});

//pass1

let pass1 = document.getElementById('pass1')
pass1.addEventListener("paste", function(){
    console.log("Hizo pegar ctrl + v")
    alert("Debes digitar la contrasena")
    document.getElementById('pass1').setAttribute('value','')
});

//object.onkeydown = function(){myScript};
let pass2 = document.getElementById('pass2')
pass2.onkeydown = function(event){
    console.log(event.keyCode)
    if (event.keyCode == '16' || event.keyCode == '20'){
       alert("No puedes poner mayusculas")
    }
};

window.onload = function(){ 
    console.log("Termino de cargar la pagina")
    img = document.getElementById("zaku3")
    img.addEventListener("mouseover", mouse);
};

function mouse(){
    console.log("Paso el mouse por aqui")
}
let formulario = document.getElementById("myform")
formulario.addEventListener("reset", resetForm);
function resetForm(){
    console.log("Reseteo el formulario")
}

// document.addEventListener("dragstart", function(event) {
//     // The dataTransfer.setData() method sets the data type and the value of the dragged data
//     event.dataTransfer.setData("Text", event.target.id);
  
//     // Output some text when starting to drag the p element
//     document.getElementById("demo").innerHTML = "Started to drag the p element.";
  
//     // Change the opacity of the draggable element
//     event.target.style.opacity = "0.4";
//   });
  
//   // While dragging the p element, change the color of the output text
//   document.addEventListener("drag", function(event) {
//     document.getElementById("demo").style.color = "red";
//   });
  
//   // Output some text when finished dragging the p element and reset the opacity
//   document.addEventListener("dragend", function(event) {
//     document.getElementById("demo").innerHTML = "Finished dragging the p element.";
//     event.target.style.opacity = "1";
//   });
  
  
//   // Events fired on the drop target
  
//   // When the draggable p element enters the droptarget, change the DIVS's border style
//   document.addEventListener("dragenter", function(event) {
//     if ( event.target.className == "droptarget" ) {
//       event.target.style.border = "3px dotted red";
//     }
//   });
  
//   // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
//   document.addEventListener("dragover", function(event) {
//     event.preventDefault();
//   });
  
//   // When the draggable p element leaves the droptarget, reset the DIVS's border style
//   document.addEventListener("dragleave", function(event) {
//     if ( event.target.className == "droptarget" ) {
//       event.target.style.border = "";
//     }
//   });
  
//   /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
//   Reset the color of the output text and DIV's border color
//   Get the dragged data with the dataTransfer.getData() method
//   The dragged data is the id of the dragged element ("drag1")
//   Append the dragged element into the drop element
//   */
//   document.addEventListener("drop", function(event) {
//     event.preventDefault();
//     if ( event.target.className == "droptarget" ) {
//       document.getElementById("demo").style.color = "";
//       event.target.style.border = "";
//       var data = event.dataTransfer.getData("Text");
//       event.target.appendChild(document.getElementById(data));
//     }
//   });
  