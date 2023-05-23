const todos = JSON.parse(localStorage.getItem('todoList')) || [];
const addTodos = (todo) => {
	if (Object.entries(todo) !== 0) {
		todos.push(todo);
		localStorage.setItem('todoList', JSON.stringify(todos));
		console.log(todos);
	}
};

const finishTodo = (todoList) => {
	localStorage.setItem('todoList', JSON.stringify(todoList));
};
const deleteTodo = (todoList) => {
	localStorage.setItem('todoList', JSON.stringify(todoList));
};
const editTodo = (todoList) => {
	localStorage.setItem('todoList', JSON.stringify(todoList));
};
export { todos, addTodos, finishTodo, deleteTodo, editTodo };

// const todoRealizados = () => {
// 	const todosComplados = todos.filter((task) => task.terminado === true);
// 	// console.log(todosComplados);
// 	tableComTodos.innerHTML = '';
// 	todosComplados.forEach((todo) => {
// 		tableTodos.innerHTML += `
// 	  <tr>
// 	    <th>
// 	      <label>
// 	        <input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
// 	      </label>
// 	    </th>
// 	    <td>
// 	      <div class="flex items-center space-x-3">
// 	        <div>
// 	          <div id="namTodo" class="font-bold">${todo.nomTodo}</div>
// 	        </div>
// 	      </div>
// 	    </td>
// 	    <td>${todo.fechaTodo}</td>
// 	    <td id="fechaFinTodos">${todo.fechaFin}</td>
// 	    <td id="estado">
// 	      ${todo.terminado ? checkStatus : uncheckStatus}
// 	    </td>
// 	    <th>
// 	      <label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
// 	      <button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
// 	    </th>
// 	  </tr>
// 	  `;
// 	});
// };
// const todoNoRealizados = () => {
// 	const todosNoComplados = todos.filter((task) => task.terminado === false);
// 	// console.log(todosNoComplados);
// 	tableNoComTodos.innerHTML = '';
// 	todosNoComplados.forEach((todo) => {
// 		tableTodos.innerHTML += `
// 	  <tr>
// 	    <th>
// 	      <label>
// 	        <input ${todo.terminado ? 'checked' : ''} id="toggleTodo" type="checkbox" class="checkbox" />
// 	      </label>
// 	    </th>
// 	    <td>
// 	      <div class="flex items-center space-x-3">
// 	        <div>
// 	          <div id="namTodo" class="font-bold">${todo.nomTodo}</div>
// 	        </div>
// 	      </div>
// 	    </td>
// 	    <td>${todo.fechaTodo}</td>
// 	    <td id="fechaFinTodos">${todo.fechaFin}</td>
// 	    <td id="estado">
// 	      ${todo.terminado ? checkStatus : uncheckStatus}
// 	    </td>
// 	    <th>
// 	      <label for="my-modal-2" id="btnEditar" class="btn btn-ghost btn-xs">Editar</label>
// 	      <button id="btnEliminar" class="btn btn-ghost btn-xs">Eliminar</button>
// 	    </th>
// 	  </tr>
// 	  `;
// 	});
// };
