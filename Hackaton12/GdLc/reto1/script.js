const contenedors = document.querySelectorAll('.contenedor');

contenedors.forEach(contenedor => {

    const select = contenedor.querySelector('.select');
    const icono = contenedor.querySelector('.icono');
    const dropdown = contenedor.querySelector('.dropdown');
    const options = contenedor.querySelector('.dropdown li');

    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');

        icono.classList.toggle('icono-rotate');

        dropdown.classList.toggle('dropdown-open');
    });


    options.forEach(option => {

        option.addEventListener('click', () => {

            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');

            icono.classList.remove('icono-rotate');

            dropdown.classList.remove('dropdown-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });

});