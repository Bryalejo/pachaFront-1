console.log("sincronizado")
function ej07(evento){
    evento.preventDefault()
    let pulgadas=document.getElementById("pulgadas")
    let res =document.getElementById("res07")

    let metros= 0.0254* Number(pulgadas.value)
    res.innerHTML=metros
}
let metros=document.getElementById("metros")
metros.addEventListener("click",ej07)