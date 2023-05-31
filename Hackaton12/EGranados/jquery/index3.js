function Modal() {
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("open-modal-btn");
    var closeModalBtn = document.getElementsByClassName("close")[0];
    var acceptBtn = document.getElementById("accept-btn");
    var cancelBtn = document.getElementById("cancel-btn");
  
    function openModal() {
      modal.style.display = "block";
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    function handleAccept() {
      alert('Aceptado!');
      modal.style.display = "none"
      // Aquí puedes realizar las acciones necesarias cuando se presione Aceptar
    }
  
    function handleCancel() {
      modal.style.display = "none"
      // Aquí puedes realizar las acciones necesarias cuando se presione Cancelar
    }
  
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    acceptBtn.addEventListener("click", handleAccept);
    cancelBtn.addEventListener("click", handleCancel);
  }
  
  // Crear una instancia del modal y registrar los eventos
  var modal = new Modal();
  