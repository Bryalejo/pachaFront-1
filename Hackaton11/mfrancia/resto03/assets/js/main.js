const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');


todoForm.addEventListener('submit', addTask);


function addTask(event) {
  event.preventDefault();


  const taskName = todoInput.value;

  if (taskName.trim() !== '') {

    const taskItem = document.createElement('li');


    const taskText = document.createElement('span');
    taskText.textContent = taskName;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', deleteTask);


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleComplete);


    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);


    taskList.appendChild(taskItem);


    todoInput.value = '';
  }
}

function deleteTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}


function toggleComplete() {
  const taskItem = this.parentNode;
  taskItem.classList.toggle('completed');
}