console.log("sincronizado")
function ej10(evento){
    evento.preventDefault()
    let edad =document.getElementById("edad")
    let res = document.getElementById("res10")

    if(Number(edad.value) <18){
        res.innerHTML= "Menos de edad"
    }else {res.innerHTML= "Mayor de edad"}
    } 
let menor = document.getElementById("menor")
menor.addEventListener("click",ej10)