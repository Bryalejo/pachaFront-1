console.log("sincronizado")
function ej05(evento){
    evento.preventDefault()
    let radio = document.getElementById("radio")
    let res = document.getElementById("res05")
    let calculo= Number(radio.value) * Number(radio.value)
    res.innerHTML= calculo
}
let calculo = document.getElementById("calculo")
calculo.addEventListener("click",ej05)