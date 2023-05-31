
class Dropdowns {
  constructor () {
    this.contenedor = null
    this.boton = null
    this.flecha = null
    this.opciones = []
    this.mostrandoOpciones = false
  }
}

Dropdowns.prototype.setContenedorId = function (contenedorId) {
  this.contenedor = document.getElementById(contenedorId)
  return this
}

Dropdowns.prototype.setBotonId = function (botonId) {
  this.boton = document.getElementById(botonId)
  return this
}

Dropdowns.prototype.setFlecha = function (flechaId) {
  this.flecha = document.getElementById(flechaId)
  return this
}

Dropdowns.prototype.addOpciones = function (addOpciones) {
  this.opciones = addOpciones
  return this
}

Dropdowns.prototype.build = function () {
  return {
    contenedor: this.contenedor,
    boton: this.boton,
    flecha: this.flecha,
    opciones: this.opciones,
    mostrandoOpciones: this.mostrandoOpciones
  }
}

Dropdowns.prototype.mostrarOpciones = function () {
  const ul = document.createElement('ul')
  ul.classList.add('optionsList')

  this.opciones.forEach(opcion => {
    const li = document.createElement('li')
    li.classList.add('optionsList__item')
    ul.appendChild(li)

    const a = document.createElement('a')
    a.setAttribute('href', '#')
    a.textContent = opcion
    li.appendChild(a)

    a.addEventListener('click', (e) => {
      e.preventDefault()
      this.boton.textContent = opcion
      this.boton.appendChild(this.flecha)
      this.ocultarOpciones()
      this.mostrandoOpciones = !this.mostrandoOpciones
    })
  })

  this.contenedor.appendChild(ul)
  this.flecha.setAttribute('class', 'toTop')
  return this
}

Dropdowns.prototype.ocultarOpciones = function () {
  const ul = document.querySelector('#' + this.contenedor.id + ' ul')
  this.contenedor.removeChild(ul)
  this.flecha.setAttribute('class', 'toDown')
  return this
}

Dropdowns.prototype.toggleDropdown = function () {
  this.boton.addEventListener('click', () => {
    if (this.mostrandoOpciones) {
      this.ocultarOpciones()
    } else {
      this.mostrarOpciones()
    }
    this.mostrandoOpciones = !this.mostrandoOpciones
  })
  return this
}

const dropdown01 = new Dropdowns()
  .setContenedorId('dropdown01')
  .setBotonId('dropdown01-btn')
  .setFlecha('arrow01')
  .addOpciones(['Rojo', 'Azul', 'Verde'])
  .toggleDropdown()
  .build()

const dropdown02 = new Dropdowns()
  .setContenedorId('dropdown02')
  .setBotonId('dropdown02-btn')
  .setFlecha('arrow02')
  .addOpciones(['Perú', 'Italia', 'Costa Rica', 'Australia'])
  .toggleDropdown()
  .build()

const dropdown03 = new Dropdowns()
  .setContenedorId('dropdown03')
  .setBotonId('dropdown03-btn')
  .setFlecha('arrow03')
  .addOpciones(['Manzana', 'Naranja', 'Plátano', 'Uva', 'Piña'])
  .toggleDropdown()
  .build()
