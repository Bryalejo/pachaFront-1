import moment from 'moment/min/moment-with-locales';
import { addTodos, deleteTodo, editTodo, finishTodo, todos } from './data';
const formTodo = document.getElementById('formTodo');
const formEdit = document.getElementById('formEdit');
const fechaTodo = document.getElementById('fechaTodo');
const fechaHoy = document.getElementById('fechaHoy');
const textTareas = document.getElementById('textTareas');

const indexId = document.getElementById('indexId');
const inputID = document.getElementById('uuid');
const nomEdit = document.getElementById('nomEdit');
const btnHome = document.getElementById('btnHome');
const btnCompletado = document.getElementById('btnCompletado');
const btnNoCompletado = document.getElementById('btnNoCompletado');
const tableTodos = document.getElementById('tableTodos');
const app = document.getElementById('app');

const checkStatus = `
<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5 13l4 4L19 7" stroke="#0f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
`;
const uncheckStatus = `
<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
`;

btnHome.addEventListener('click', () => {
	window.location.hash = '#todos';
	window.location.reload();
	document.getElementById('my-modal-2').checked = false;
});
btnCompletado.addEventListener('click', () => {
	window.location.hash = '#completados';
	window.location.reload();
	document.getElementById('my-modal-2').checked = false;
});
btnNoCompletado.addEventListener('click', () => {
	window.location.hash = '#sincompletar';
	window.location.reload();
	document.getElementById('my-modal-2').checked = false;
});

let fechaNow = moment().format('YYYY-MM-DD');
fechaTodo.value = fechaNow;
fechaHoy.textContent = fechaNow;

const statusTodos = (todosList) => {
	// console.log(todosList);
	if (todosList.length === 0) {
		app.hidden = true;
		textTareas.hidden = false;
	} else {
		textTareas.hidden = true;
		app.hidden = false;
	}
};
statusTodos(todos);

const tablaTodos = (url) => {
	tableTodos.innerHTML = '';
	if (url === '#completados') {
		todos.forEach((todo) => {
			tableTodos.innerHTML += `
			<tr class="${todo.terminado ? '' : 'hidden'}">
				<th>
					<label>
						<input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div>
							<div id="namTodo" class="font-bold">${todo.nomTodo}</div>
						</div>
					</div>
				</td>
				<td>${todo.fechaTodo}</td>
				<td id="fechaFinTodos">${todo.fechaFin}</td>
				<td id="estado">
					${todo.terminado ? checkStatus : uncheckStatus}
				</td>
				<th>
					<label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
					<button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
				</th>
			</tr>
			`;
		});
	} else if (url === '#sincompletar') {
		todos.forEach((todo) => {
			tableTodos.innerHTML += `
			<tr class="${todo.terminado ? 'hidden' : ''}">
				<th>
					<label>
						<input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div>
							<div id="namTodo" class="font-bold">${todo.nomTodo}</div>
						</div>
					</div>
				</td>
				<td>${todo.fechaTodo}</td>
				<td id="fechaFinTodos">${todo.fechaFin}</td>
				<td id="estado">
					${todo.terminado ? checkStatus : uncheckStatus}
				</td>
				<th>
					<label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
					<button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
				</th>
			</tr>
			`;
		});
	} else {
		todos.forEach((todo) => {
			tableTodos.innerHTML += `
			<tr>
				<th>
					<label>
						<input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div>
							<div id="namTodo" class="font-bold">${todo.nomTodo}</div>
						</div>
					</div>
				</td>
				<td>${todo.fechaTodo}</td>
				<td id="fechaFinTodos">${todo.fechaFin}</td>
				<td id="estado">
					${todo.terminado ? checkStatus : uncheckStatus}
				</td>
				<th>
					<label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
					<button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
				</th>
			</tr>
			`;
		});
	}
};

switch (window.location.hash) {
	case '#todos':
		btnHome.className = 'active';
		tablaTodos(window.location.hash);
		break;
	case '#completados':
		btnCompletado.className = 'active';

		tablaTodos(window.location.hash);

		break;
	case '#sincompletar':
		btnNoCompletado.className = 'active';

		tablaTodos(window.location.hash);

		break;

	default:
		window.location.hash = '#todos';
		break;
}

const generarId = () => {
	return Math.random().toString(36).substr(2, 9);
};

formTodo.addEventListener('reset', () => {
	fechaTodo.value = fechaNow;
});

formTodo.addEventListener('submit', (event) => {
	event.preventDefault(); // Evitar que la página se recargue

	const formData = new FormData(formTodo); // Obtener los valores del formulario
	const entries = formData.entries(); // Convertir los valores en un objeto iterable

	const data = {}; // Crear un objeto de array para almacenar los valores
	for (const [name, value] of entries) {
		data[name] = value; // Agregar cada valor al objeto de array
	}
	data.fechaFin = 'Indefinido';
	data.terminado = false;
	data.fechaTodo = fechaNow;
	data.uuid = generarId();
	addTodos(data);

	document.getElementById('my-modal-1').checked = false;
	formTodo.reset();
	fechaTodo.value = fechaNow;
	appendTodo(data);
	statusTodos(todos);
});
formEdit.addEventListener('submit', (event) => {
	event.preventDefault(); // Evitar que la página se recargue
	const namTodo = document.querySelectorAll('#namTodo');

	const formData = new FormData(formEdit); // Obtener los valores del formulario
	const entries = formData.entries(); // Convertir los valores en un objeto iterable

	const data = {}; // Crear un objeto de array para almacenar los valores
	for (const [name, value] of entries) {
		data[name] = value; // Agregar cada valor al objeto de array
	}
	console.log(data);
	document.getElementById('my-modal-2').checked = false;
	namTodo[data.indexId].textContent = data.nomTodo;
	const newListTodos = todos.map((task) => {
		if (task.uuid === data.uuid) {
			return { ...task, nomTodo: data.nomTodo };
		} else {
			return task;
		}
	});
	editTodo(newListTodos);
	// window.location.reload();
	formTodo.reset();
});

const appendTodo = (todo) => {
	const tr = document.createElement('tr');
	tr.innerHTML = `
  <tr>
    <th>
      <label>
        <input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
      </label>
    </th>
    <td>
      <div class="flex items-center space-x-3">
        <div>
          <div id="namTodo" class="font-bold">${todo.nomTodo}</div>
        </div>
      </div>
    </td>
    <td>${todo.fechaTodo}</td>
    <td id="fechaFinTodos">${todo.fechaFin}</td>
    <td id="estado">
      <svg
        width="24px"
        height="24px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
          stroke="#f00"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </td>
    <th>
      <label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
      <button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
    </th>
  </tr>
  `;
	tableTodos.append(...tableTodos.children, tr);
	tablaTodos(window.location.hash);

	checkTodos();
};

const checkTodos = () => {
	const checkboxTodos = document.querySelectorAll('#toggleTodo');
	const estadosTodo = document.querySelectorAll('#estado');
	const fechaFinTodos = document.querySelectorAll('#fechaFinTodos');
	const btnEditar = document.querySelectorAll('#btnEditar');
	const btnEliminar = document.querySelectorAll('#btnEliminar');

	checkboxTodos.forEach((check, i) => {
		check.addEventListener('change', () => {
			if (check.checked) {
				estadosTodo[i].innerHTML = checkStatus;
				fechaFinTodos[i].textContent = fechaNow;
				let taskIndex = todos.findIndex((task) => task.uuid === todos[i].uuid);
				todos[taskIndex].terminado = true;
				todos[taskIndex].fechaFin = fechaNow;
				finishTodo(todos);
				tablaTodos(window.location.hash);
				checkTodos();
				// window.location.reload();
			} else {
				estadosTodo[i].innerHTML = uncheckStatus;
				fechaFinTodos[i].textContent = 'Indefinido';
				let taskIndex = todos.findIndex((task) => task.uuid === todos[i].uuid);
				todos[taskIndex].terminado = false;
				todos[taskIndex].fechaFin = 'Indefinido';
				finishTodo(todos);
				tablaTodos(window.location.hash);
				checkTodos();
				// window.location.reload();
			}
		});
	});
	btnEliminar.forEach((btnDel, i) => {
		btnDel.addEventListener('click', () => {
			const confirmacion = confirm('Estas seguro que quieres eliminar este TODO?');
			if (confirmacion) {
				// let taskDelete = todos.findIndex((task) => task.uuid === todos[i].uuid);
				let taskIndex = todos.filter((task) => task.uuid !== todos[i].uuid);
				// console.log(taskDelete);
				localStorage.setItem('todoList', JSON.stringify(taskIndex));
				window.location.reload();
				// tableTodos.removeChild(document.getElementById('tableTodos').children[taskDelete]);
				// console.log(tableTodos);
			}
		});
	});

	btnEditar.forEach((btnEdit, i) => {
		btnEdit.addEventListener('click', () => {
			let taskIndex = todos.findIndex((task) => task.uuid === todos[i].uuid);
			console.log(taskIndex);
			getId(taskIndex);
		});
	});
};
checkTodos();

const getId = (id) => {
	indexId.value = '';
	indexId.value = id;
	nomEdit.value = '';
	nomEdit.value = todos[id].nomTodo;
	inputID.value = '';
	inputID.value = todos[id].uuid;
};
const todoIndex = (id) => {};
