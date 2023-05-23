console.log("sincronzado")

function ej08(evento){
    evento.preventDefault()
    let soles=document.getElementById("soles")
    let res =document.getElementById("res08")

    let cambio=3.8 *Number(soles.value)
   res.innerHTML= cambio
}
let cambio=document.getElementById("cambio")
cambio.addEventListener("click",ej08)