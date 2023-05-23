const idFormTodoList = document.getElementById('formTodoList');
const idTablaTodoList = document.getElementById('tablaBodyTodoList');

idFormTodoList.addEventListener('submit', (event) => {

    const idFila = idTablaTodoList.rows.length + 1;
    const tarea = idFormTodoList.elements['descripcionTarea'];
    const fechaEntrega = idFormTodoList.elements['fechaEntrega'];
    const estadoTarea = true;

    const tareaObject = {
        'idFila' : idFila,
        'tarea' : tarea.value,
        'fechaEntrega' : fechaEntrega.value,
        'estadoTarea' : estadoTarea
    };
    agregarFila(idTablaTodoList, tareaObject);

    event.preventDefault();
    idFormTodoList.reset();
});


function agregarFila(idTabla, tareaObject) {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${tareaObject.idFila}</td>
        <td>${tareaObject.tarea}</td>
        <td>${tareaObject.fechaEntrega}</td>
        <td>
            <div class="form-check">
                <input id="checkTodo" class="form-check-input" type="checkbox" data-id="${tareaObject.idFila}" checked>
                <label class="form-check-label" for="checkTodo">Listo</label>
            </div>
        </td>
        <td>
            <button class="btn btn-danger btn-eliminar" data-id="${tareaObject.idFila}">Eliminar</button>
        </td>
    `;

    idTabla.appendChild(fila);
}

function eliminarFila() {

}