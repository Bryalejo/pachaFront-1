console.log("sincronzado")
function ej11(evento){
    evento.preventDefault()
    let anios=document.getElementById("anios")
    let res =document.getElementById("res11")

    if (anios<1){
        res.innerHTML ="no tiene ningun bono"
    }else if(anio=1){
        let bono=100
        res.innerHTML= bono
    }else if(anio=2){
        let bono=200
        res.innerHTML= bono
}else if(anio=3){
    let bono=300
    res.innerHTML= bono
}else if(anio=4){
    let bono=400
    res.innerHTML= bono
}else if(anio=5){
    let bono=500
    res.innerHTML= bono
}else if(anio>5){
    let bono=1000
    res.innerHTML= bono
}


}
let bono=document.getElementById("bono")
bono.addEventListener("click",ej11)