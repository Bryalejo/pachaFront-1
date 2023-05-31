console.log('sincronizado')
//img1
class Opcion {
    constructor(value, text) {
      this.value = value;
      this.text = text;
    }
    
    crearElemento() {
      const optionElement = document.createElement('option');
      optionElement.value = this.value;
      optionElement.text = this.text;
      return optionElement;
    }
  }
   const selectElement = document.getElementById('dropdown');
  const opciones = [
    new Opcion('Dropdown', 'Dropdown'),
    new Opcion('option1', 'item 1'),
    new Opcion('option2', 'item 2'),
    new Opcion('option3', 'item 3')
  ];
  // Generar opciones dinámicamente
  opciones.forEach(opcion => {
    const optionElement = opcion.crearElemento();
    selectElement.appendChild(optionElement);
  });


//img2

 function array(titulo, testo) {
    this.titulo = titulo;
    this.testo = testo;
  }
  array.prototype.render = function() {
    const container = document.getElementById('libroContainer');
  
    const titulo = document.createElement('div');
    titulo.textContent = this.titulo;
    titulo.classList.add('titulo');
    container.appendChild(titulo);
  
    const testo = document.createElement('div');
    testo.textContent = this.testo;
    testo.classList.add('testo');
    testo.style.display = 'none';
    container.appendChild(testo);

    titulo.addEventListener('click', function() {
        if (testo.style.display === 'none') {
          testo.style.display = 'block'; 
        } else {
          testo.style.display = 'none'; 
        }
      });
  };


  const libro1 = new array("Juego de tronos de George R. R. Martin", "Es otoño en Westeros...");
  libro1.render();
  
  const libro2 = new array("Odisea de Homero", "Es fascinante leer sin edulcorantes...");
  libro2.render();
  
  const libro3 = new array("Moby Dick Autor: Herman Melville", "Moby Dick es una historia famosa...");
  libro3.render();
  //img3

const modal = document.getElementById("myModal");
const open = document.getElementById("openModal");


const clear = document.getElementById("clearModal");

open.onclick = function() {
  modal.style.display = "block";
}


clear.onclick = function() {
  modal.style.display = "none";
}

