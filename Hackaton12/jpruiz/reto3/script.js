function Modal(callbackClose, callbackCancel) {
    var modal = document.getElementById('modal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var cancelModalBtn = document.getElementById('cancelModalBtn');
    var closeSpan = document.getElementsByClassName('close')[0];

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
        console.log('Modal abierto');
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        if (typeof callbackClose === 'function') {
            callbackClose();
        }
    });

    cancelModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        if (typeof callbackCancel === 'function') {
            callbackCancel();
        }
    });

    closeSpan.addEventListener('click', function () {
        modal.style.display = 'none';
        if (typeof callbackClose === 'function') {
            callbackClose();
        }
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            if (typeof callbackClose === 'function') {
                callbackClose();
            }
        }
    });
}

// Ejemplo de uso de la función 
var myModal = new Modal(
    function () {
        console.log('Modal cerrado');
    },
    function () {
        console.log('Modal cancelado');
    }
);
