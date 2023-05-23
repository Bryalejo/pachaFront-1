console.log("sincronzado")
function ej15(evento){
    console.log("sincronzado")
    let edad=document.getElementById("edad")
    let res=document.getElementById("res15")

    if (Number(edad.value<18)){
        res.innerHTML ="no puede votar , es menor de edad"
    }else {
        res.innerHTML ="mayor de edad , puede votar"
    }

}
let votante=document.getElementById("edad")
votante.addEventListener("click",ej15)