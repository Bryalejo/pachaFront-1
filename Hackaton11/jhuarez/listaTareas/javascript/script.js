//Hackaton 11

document.addEventListener("DOMContentLoaded", function() {
    var taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function(event) {

      event.preventDefault(); // Evitar que el formulario se envíe

      // Obtener los valores de los campos de entrada
      let datepickerValue = document.getElementById('datepicker').value;
      datepickerValue = moment(datepickerValue).format('DD/MM/YYYY HH:mm');
      let descriptionValue = document.getElementById('description').value;

      // imprimirlos en la consola
      console.log("Fecha:", datepickerValue);
      console.log("Descripción:", descriptionValue);

      // Crear un nuevo elemento de lista
      let listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex';

      // Crear un elemento de checkbox
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // Crear un botón para borrar la tarea
      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.innerHTML = '&#10060;'; // Usamos un símbolo de "X" para el botón

      // Crear un elemento de párrafo para el texto de la lista
      let listItemText = document.createElement('p');
      listItemText.className = 'task-text';
      listItemText.innerText = datepickerValue + ': ' + descriptionValue;

      // Agregar el checkbox y el elemento de texto al elemento de lista
      listItem.appendChild(checkbox);
      listItem.appendChild(listItemText);
      listItem.appendChild(deleteButton);

     

      // Agregar el nuevo elemento de lista a la lista existente
      taskList.appendChild(listItem);


      // Limpiar los campos de entrada
      document.getElementById('datepicker').value = '';
      document.getElementById('description').value = '';

//ver el cambio en el checkbox para completar una tarea

      checkbox.addEventListener('change', function() {
        if (this.checked) {
          listItemText.classList.add('completed');
  
          // Obtener la fecha y hora actual
          var completedDatetime = new Date();
          var formattedCompletedDatetime = moment(completedDatetime).format('DD/MM/YYYY HH:mm');
  
          // Crear un elemento de párrafo para mostrar la fecha y hora de finalización
          var completedText = document.createElement('p');
          completedText.className = 'task-completed';
          completedText.innerText = 'Completado el: ' + formattedCompletedDatetime;
  
          // Agregar el elemento de fecha y hora de finalización debajo del elemento de texto de la tarea
          listItem.appendChild(completedText);
        } else {
          listItemText.classList.remove('completed');
  
          // Remover el elemento de fecha y hora de finalización si el checkbox no está marcado
          var completedText = listItem.querySelector('.task-completed');
          if (completedText) {
            listItem.removeChild(completedText);
          }
        }
      });
    // Agregar evento de escucha al botón de borrado para eliminar la tarea

        deleteButton.addEventListener('click', function() {
        listItem.remove();
      });
    });
  });