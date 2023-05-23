console.log("sincronizado")
function ej06(evento){
    evento.preventDefault()
    let horas=document.getElementById("horas")
    let res= document.getElementById("res06")
    let pago = Number(horas.value)*12
    res.innerHTML=pago
}
let pago = document.getElementById("pago")
pago.addEventListener("click",ej06)