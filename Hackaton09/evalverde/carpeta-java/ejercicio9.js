console.log("sincroniozado")
function ej09(evento){
    evento.preventDefault()
    let anio=document.getElementById("anio")
    let res=document.getElementById("res09")

    let edad=2023 - Number(anio.value)
    res.innerHTML=edad
}
let edad =document.getElementById("edad")
edad.addEventListener("click",ej09)