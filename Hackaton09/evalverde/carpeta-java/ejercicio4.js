console.log("sincronizado")
function ej04(evento){
    evento.preventDefault()
    let base =document.getElementById("base")
    let altura = document.getElementById("altura")
    let res = document.getElementById("res04")

   let  area =((( Number(base.value)) * (Number(altura.value)))/2)
    res.innerHTML = area

}
let area =document.getElementById("area")
area.addEventListener("click",ej04)