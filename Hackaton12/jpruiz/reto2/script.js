var modulos = document.querySelectorAll('.modulo');

modulos.forEach(function (modulo) {
    var title = modulo.querySelector('.title');
    var toggle = title.querySelector('.toggle');
    var content = modulo.querySelector('.content');
    var closeButton = content.querySelector('.close-button');

    title.addEventListener('click', function () {
        if (content.style.display === 'none') {
            console.log('Mostrando contenido');
            content.style.display = 'block';
            toggle.textContent = 'x';
            closeButton.style.display = 'block';
        } else {
            console.log('Ocultando contenido');
            content.style.display = 'none';
            toggle.textContent = '+';
            closeButton.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function () {
        console.log('Cerrando contenido');
        content.style.display = 'none';
        toggle.textContent = '+';
        closeButton.style.display = 'none';
    });
});
