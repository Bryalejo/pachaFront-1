console.log("sincronizado")
let formulario=document.getElementById(`formulario`)

let agregar=document.getElementById(`agregar`)

const handlerFormulario = (evento)=>{
    evento.preventDefault()
    
    let tabla = document.getElementById("tablaDatos");

    let fila = tabla.insertRow();

    // Insertar celdas con los datos
    let celdaTarea = fila.insertCell();
    let celdaFecha = fila.insertCell();
    let celdaCompletado = fila.insertCell();
    let celdaAcciones = fila.insertCell();
  
    celdaTarea.textContent = evento.target.semana.value;
    celdaFecha.textContent = evento.target.date.value;
    celdaCompletado.innerHTML = '<input type="checkbox">';
    celdaAcciones.innerHTML = '<button class="eliminar">Eliminar</button>';


    console.log(evento.target.semana.value)
    console.log(evento.target.date.value)


    
    }

    document.getElementById("tablaDatos").addEventListener("click", function(event) {
        if (event.target.classList.contains("eliminar")) {
          var fila = event.target.parentNode.parentNode;
          fila.parentNode.removeChild(fila);
        }
      });


formulario.addEventListener(`submit`, handlerFormulario)










