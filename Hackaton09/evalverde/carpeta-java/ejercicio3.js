console.log("sincronizado")
function ej03(evento){
    evento.preventDefault()
    let base =document.getElementById("base")
    let altura = document.getElementById("altura")
    let res = document.getElementById("res03")

   let  area =( Number(base.value)) * (Number(altura.value))
    res.innerHTML = area

}
let area =document.getElementById("area")
area.addEventListener("click",ej03)