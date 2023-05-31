// Obtener elementos del DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterButtons = document.getElementsByClassName('filter-buttons')[0];

// Eventos
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', handleTodoItemClick);
filterButtons.addEventListener('click', handleFilterButtonClick);

// Lista de tareas
let todos = [];

// Función para agregar una tarea
function addTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };

    todos.push(todo);

    renderTodos();
    todoInput.value = '';
  }
}

// Función para eliminar una tarea
function deleteTodoById(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Función para marcar o desmarcar una tarea como completada
function toggleTodoCompletedById(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      };
    }
    return todo;
  });
  renderTodos();
}

// Función para renderizar las tareas en la lista
function renderTodos() {
  const filter = document.querySelector('.filter-buttons .active');
  const filteredTodos = filter
    ? todos.filter(todo =>
        filter.id === 'completed' ? todo.completed : !todo.completed
      )
    : todos;

  todoList.innerHTML = '';

  filteredTodos.forEach(todo => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.dataset.id = todo.id;
    todoItem.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''}>
      <span>${todo.text}</span>
      <button class="delete-button">Eliminar</button>
    `;
    todoList.appendChild(todoItem);
  });
}

// Función para manejar el evento de clic en un elemento de la lista
function handleTodoItemClick(event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const todoItem = event.target.closest('.todo-item');
    const todoId = parseInt(todoItem.dataset.id);
    toggleTodoCompletedById(todoId);
  } else if (event.target.matches('.delete-button')) {
    const todoItem = event.target.closest('.todo-item');
    const todoId = parseInt(todoItem.dataset.id);
    deleteTodoById(todoId);
  }
}

// Función para manejar el evento de clic en los botones de filtro
function handleFilterButtonClick(event) {
  if (event.target.matches('button')) {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
      button.classList.remove('active');
    });

    event.target.classList.add('active');
    renderTodos();
  }
}

// Renderizar las tareas inicialmente
renderTodos();





