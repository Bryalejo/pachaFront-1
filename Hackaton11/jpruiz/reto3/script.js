const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filterSelect');

form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  if (taskText.trim() === '') return;

  const taskRow = document.createElement('tr');
  taskRow.innerHTML = `
    <td>${taskText}</td>
    <td>Incompleto</td>
    <td>
      <button class="completeBtn">Completar</button>
      <button class="deleteBtn">Eliminar</button>
    </td>
  `;

  const completeBtn = taskRow.querySelector('.completeBtn');
  completeBtn.addEventListener('click', toggleTaskStatus);

  const deleteBtn = taskRow.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', deleteTask);

  taskList.appendChild(taskRow);
  taskInput.value = '';
}

function deleteTask() {
  const taskRow = this.parentNode.parentNode;
  taskRow.remove();
}


function toggleTaskStatus() {
  const taskRow = this.parentNode.parentNode;
  const taskStatus = taskRow.querySelector('td:nth-child(2)');

  if (taskStatus.textContent === 'Incompleto') {
    taskStatus.textContent = 'Completo';
    taskStatus.classList.add('completed');
  } else {
    taskStatus.textContent = 'Incompleto';
    taskStatus.classList.remove('completed');
  }
}


filterSelect.addEventListener('change', filterTasks);


function filterTasks() {
  const filterValue = filterSelect.value;
  const tasks = taskList.getElementsByTagName('tr');

  for (let i = 0; i < tasks.length; i++) {
    const taskStatus = tasks[i].querySelector('td:nth-child(2)').textContent;

    if (filterValue === 'completed' && taskStatus === 'Completo') {
      tasks[i].style.display = '';
    } else if (filterValue === 'incomplete' && taskStatus === 'Incompleto') {
      tasks[i].style.display = '';
    } else if (filterValue === 'all') {
      tasks[i].style.display = '';
    } else {
      tasks[i].style.display = 'none';
    }
  }
}
