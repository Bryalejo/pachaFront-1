
function Modal(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.acceptButton = this.modalElement.querySelector('#modal-accept');
    this.cancelButton = this.modalElement.querySelector('#modal-cancel');
  
    this.acceptCallback = null;
    this.cancelCallback = null;
  
    this.acceptButton.addEventListener('click', this.handleAccept.bind(this));
    this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
  }
  
  
  Modal.prototype.open = function() {
    this.modalElement.style.display = 'block';
  };
  
  
  Modal.prototype.close = function() {
    this.modalElement.style.display = 'none';
  };
  
  
  Modal.prototype.onAccept = function(callback) {
    this.acceptCallback = callback;
  };
  
  
  Modal.prototype.onCancel = function(callback) {
    this.cancelCallback = callback;
  };
  
  
  Modal.prototype.handleAccept = function() {
    if (typeof this.acceptCallback === 'function') {
      this.acceptCallback();
    }
    this.close();
  };

  Modal.prototype.handleCancel = function() {
    if (typeof this.cancelCallback === 'function') {
      this.cancelCallback();
    }
    this.close();
  };
  
  
  var myModal = new Modal('modal');
  
  
  var openModalBtn = document.getElementById('openModalBtn');
  openModalBtn.addEventListener('click', myModal.open.bind(myModal));
  
  myModal.onAccept(function() {
    console.log('Botón Aceptar presionado');
  });
  
  myModal.onCancel(function() {
    console.log('Botón Cancelar presionado');
  });