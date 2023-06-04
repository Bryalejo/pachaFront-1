
const app = function () {
    let arrayPerros = [];
    let datosPerros;
    let modalForm;
    let añadirPerro;

    function mostrarCarga() {
        const body = document.getElementById('body');
        const carga = document.createElement('div');
        carga.setAttribute('id', 'carga')
        carga.style.width = '100%'
        carga.style.minHeight = '100vh'
        carga.style.backgroundColor = 'red'
        carga.style.position = 'fixed'
        body.appendChild(carga)
        console.log('mostrar modal')
    };

    function ocultarCarga() {
        const body = document.getElementById('body');
        const carga = document.getElementById('carga');
        body.removeChild(carga)
        console.log('ocultar modal')
    };

    function traerDatosPerros() {
        const main = document.getElementById('main');
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'containerCards');

        datosPerros = JSON.parse(sessionStorage.getItem('informacionPerros'));

        datosPerros.forEach((perro, index) => {
            const li = document.createElement('li');
            const divEdit = document.createElement('div');
            const imgEdit = document.createElement('img');
            const spanEdit = document.createElement('span');
            const divDelete = document.createElement('div');
            const imgDelete = document.createElement('img');
            const spanDelete = document.createElement('span');
            const imgFoto = document.createElement('img');
            const h3Nombre = document.createElement('h3');
            const pContact = document.createElement('p');
            const pPais = document.createElement('p');
            const pAbout = document.createElement('p');

            li.setAttribute('class', 'itemCard');
            divEdit.setAttribute('class', 'editContainer');
            imgEdit.setAttribute('class', 'editContainer__icon');
            imgEdit.setAttribute('src', './assets/edit.svg')
            imgEdit.setAttribute('alt', 'Edit Icon')
            spanEdit.setAttribute('class', 'editContainer__title');
            divDelete.setAttribute('class', 'deleteContainer');
            imgDelete.setAttribute('class', 'deleteContainer__icon');
            imgDelete.setAttribute('src', './assets/delete.svg')
            imgDelete.setAttribute('alt', 'Delete Icon')
            spanDelete.setAttribute('class', 'deleteContainer__title');
            imgFoto.setAttribute('class', 'itemCard__image');
            imgFoto.setAttribute('src', perro.fotografia);
            imgFoto.setAttribute('alt', perro.nombre);
            h3Nombre.setAttribute('class', 'itemCard__name');
            pContact.setAttribute('class', 'itemCard__contact');
            pPais.setAttribute('class', 'itemCard__country');
            pAbout.setAttribute('class', 'itemCard__about');

            spanEdit.textContent = 'Edit';
            spanDelete.textContent = 'Delete'
            h3Nombre.textContent = perro.nombre;
            pContact.textContent = perro.telefono + " | " + perro.raza;
            pPais.textContent = perro.pais;
            pAbout.textContent = perro.descripcion;

            divEdit.appendChild(imgEdit);
            divEdit.appendChild(spanEdit);
            divDelete.appendChild(imgDelete);
            divDelete.appendChild(spanDelete);
            li.appendChild(divEdit);
            li.appendChild(divDelete);
            li.appendChild(imgFoto);
            li.appendChild(h3Nombre);
            li.appendChild(pContact);
            li.appendChild(pPais);
            li.appendChild(pAbout);
            ul.appendChild(li);

            divEdit.addEventListener('click', () => {
                modalEditar(perro.nombre, perro.apellido, perro.raza, perro.telefono, perro.pais, perro.fotografia, perro.descripcion, index);
            });

            divDelete.addEventListener('click', () => {
                modalEliminar(index);
            });
        });

        main.appendChild(ul);
    };

    function infoPerro(nombre, apellido, raza, telefono, pais, fotografia, descripcion, index) {
        añadirPerro = new Perro()
            .setNombre(nombre)
            .setApellido(apellido)
            .setRaza(raza)
            .setTelefono(telefono)
            .setPais(pais)
            .setFotografia(fotografia)
            .setDescripcion(descripcion)
            .build();

        if (index === null) {
            arrayPerros.push(añadirPerro);
            sessionStorage.setItem('informacionPerros', JSON.stringify(arrayPerros));
            cargarInformacionInicial();
        }
        else {
            arrayPerros[index] = añadirPerro;
            sessionStorage.setItem('informacionPerros', JSON.stringify(arrayPerros));
            cargarInformacionInicial();
        };
    };

    function eliminarInfoPerro (index) {
        arrayPerros.splice(index, 1);
        sessionStorage.setItem('informacionPerros', JSON.stringify(arrayPerros));
        cargarInformacionInicial();
    };

    function modalEliminar (index) {
        modalForm = new Modal()
            .setMensajeModal('Estas seguro que  quieres eliminar a esta mascota??')
            .modalEliminar(index)
            .build();
    };

    function modalEditar(nombre, apellido, raza, telefono, pais, fotografia, descripcion, index) {
        modalForm = new Modal()
            .setMensajeModal('Editar Mascota')
            .setInputNombre(nombre)
            .setInputApellido(apellido)
            .setInputRaza(raza)
            .setInputTelefono(telefono)
            .setInputPais(pais)
            .setInputFotografia(fotografia)
            .setInputDescripcion(descripcion)
            .completarFormulario(index)
            .build();
    };

    function modalAgregar() {
        modalForm = new Modal()
            .setMensajeModal('Agregar Mascota')
            .completarFormulario(null)
            .build();
    };

    function cargarInformacionInicial() {
        datosPerros = JSON.parse(sessionStorage.getItem('informacionPerros'));

        if (datosPerros != null && datosPerros.length != 0) {
            const main = document.getElementById('main');
            main.innerHTML = '';
            main.classList.remove('main--containerButton');
            main.classList.add('main--containerCards');

            const traerBoton = document.querySelector('.header__button');

            if (!traerBoton) {
                const header = document.getElementById('header');
                const button = document.createElement('button');
                button.setAttribute('type', 'button');
                button.setAttribute('class', 'header__button');
                button.textContent = 'Agregar mascota';

                header.appendChild(button);

                button.addEventListener('click', () => {
                    modalAgregar();
                });
            };

            traerDatosPerros();
        }
        else {
            const main = document.getElementById('main');
            main.innerHTML = '';
            main.classList.remove('main--containerCards');
            main.classList.add('main--containerButton');

            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'main__button');
            button.textContent = 'Agregar mascota';

            main.appendChild(button);

            button.addEventListener('click', () => {
                modalAgregar();
            });
        };
    };

    return {
        init: function () {
            cargarInformacionInicial();
        },
        infoPerro,
        eliminarInfoPerro
    };
}();

app.init();
