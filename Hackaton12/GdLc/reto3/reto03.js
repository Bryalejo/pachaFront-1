function Modal() {
    const modal = document.getElementById("modal");
    const abrirModalBtn = document.getElementById("abrir-modal-btn");
    const cerrarModalBtn = document.getElementsByClassName("cerrar")[0];
    const acceptlBtn = document.getElementById("accept-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    function abrirModal(){
        modal.style.display = "block";
    }

    function cerrarModal(){
        modal.style.display = "none";
    }
    
    function Accept(){
        alert('Aceptado!');
        modal.style.display = "none";
    }

    function Cancel(){
        modal.style.display = "none";
    }

    abrirModalBtn.addEventListener("click", abrirModal);
    cerrarModalBtn.addEventListener("click", cerrarModal);
    acceptlBtn.addEventListener("click", Accept);
    cancelBtn.addEventListener("click", Cancel);
}
const modal = new Modal();