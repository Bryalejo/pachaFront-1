class AcordeonItem {
    constructor(itemElement) {
      this.itemElement = itemElement;
      this.titulo = itemElement.querySelector('.titulo');
      this.contenido = itemElement.querySelector('.contenido');
      this.titulo.addEventListener('click', () => this.toggle());
    }
  
    toggle() {
      const isOpen = this.contenido.style.display === 'block';
  
      this.closeAll(); // Cerramos todos los elementos antes de decidir qué hacer con el actual
  
      if (!isOpen) {
        this.contenido.style.display = 'block';
      }
    }
  
    closeAll() {
      const acordeonItems = document.querySelectorAll('.acordeon .item');
      acordeonItems.forEach(item => {
        const contenido = item.querySelector('.contenido');
        contenido.style.display = 'none';
      });
    }
  }
  
  const items = document.querySelectorAll('.acordeon .item');
  items.forEach(item => new AcordeonItem(item));