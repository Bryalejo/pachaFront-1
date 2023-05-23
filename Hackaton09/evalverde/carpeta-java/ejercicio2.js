console.log ("sincronozado")
function ej02(evento){
    evento.preventDefault()
    let voto1=document.getElementById("voto1")
    let voto2=document.getElementById("voto2")
    let voto3=document.getElementById("voto3")
    let voto4=document.getElementById("voto4")
    let res =document.getElementById("res02")

    let media = ((Number(voto1.value) + Number(voto2.value)+Number(voto3.value)+Number(voto4.value)) / 4)
    res.innerHTML = media

}
let media = document.getElementById("media")
media.addEventListener("click",ej02) 