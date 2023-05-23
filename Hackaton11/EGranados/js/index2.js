const tareaInput = document.getElementById('tareaInput');
const agregarBtn = document.getElementById('agregarBtn');
const tareasLista = document.getElementById('tareasLista');

// Función para crear una nueva tarea
function crearTarea() {
  const tareaTexto = tareaInput.value.trim();

  if (tareaTexto !== '') {
    const nuevaTarea = document.createElement('li');
    const tareaCheckbox = document.createElement('input');
    tareaCheckbox.type = 'checkbox';
    tareaCheckbox.addEventListener('change', marcarTarea);
    const tareaLabel = document.createElement('label');
    tareaLabel.textContent = tareaTexto;
    const tareaEliminar = document.createElement('button');
    tareaEliminar.textContent = 'Eliminar';
    tareaEliminar.addEventListener('click', eliminarTarea);

    nuevaTarea.appendChild(tareaCheckbox);
    nuevaTarea.appendChild(tareaLabel);
    nuevaTarea.appendChild(tareaEliminar);
    tareasLista.appendChild(nuevaTarea);

    tareaInput.value = '';
  }
}

// // Función para marcar o desmarcar una tarea como completada
// function marcarTarea(event) {
//   const tareaSeleccionada = event.target.parentElement;
//   tareaSeleccionada.classList.toggle('completed');
// }

// Función para marcar o desmarcar una tarea como completada
function marcarTarea(event) {
    const tareaSeleccionada = event.target.parentElement;
  
    if (event.target.checked) {
      tareaSeleccionada.classList.add('completed');
    } else {
      tareaSeleccionada.classList.remove('completed');
    }
  }
  

// Función para eliminar una tarea
function eliminarTarea(event) {
  const tareaSeleccionada = event.target.parentElement;
  tareasLista.removeChild(tareaSeleccionada);
}

// Evento de clic para agregar una tarea
agregarBtn.addEventListener('click', crearTarea);
