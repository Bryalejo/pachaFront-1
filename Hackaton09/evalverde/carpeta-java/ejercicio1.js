console.log("sincronzado")
function ej01(evento){ // capuramos el evento que estamos ejecutando con el click
  console.log("sincronzado")// 
  let num1=document.getElementById("primero");
  let num2=document.getElementById("segundo")
  let res = document.getElementById("res01")



let suma = Number(num1.value) + Number(num2.value)

res.innerHTML = suma


}

let suma = document.getElementById("suma")

suma.addEventListener("click", ej01)