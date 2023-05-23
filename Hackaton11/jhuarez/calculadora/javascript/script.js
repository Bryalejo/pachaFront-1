// Obtiene los elementos del DOM
const result = document.querySelector('.calculator-screen');
const buttons = Array.from(document.getElementsByClassName('btn'));

result.value = '0';

buttons.map(function(button) {
    button.addEventListener('click', function(e) {
      // Obtiene el valor del botón presionado
      var value = e.target.innerText;

      if (value === '=') {
        // Evalúa la expresión matemática
        try {
          result.value = eval(result.value.replace(/\^/g, '**'));
        } catch (error) {
          result.value = 'Error';
        }
      } else if (value === 'AC') {
          result.value = '0';
      } else {
        if (result.value === '0') {
          result.value = value;
        } else {
          result.value += value;
        }
      }
    });
  });