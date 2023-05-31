
class Accordions {
  constructor () {
    this.titulos = []
    this.contenidos = []
  }
}

Accordions.prototype.addTitulos = function (addTitulos) {
  this.titulos = addTitulos
  return this
}

Accordions.prototype.addContenidos = function (addContenidos) {
  this.contenidos = addContenidos
  return this
}

Accordions.prototype.build = function () {
  return {
    titulos: this.titulos,
    contenidos: this.contenidos
  }
}

Accordions.prototype.toggleAccordion = function () {
  this.titulos.forEach((titulo, indexTitulo) => {
    const tituloId = document.getElementById(titulo)

    tituloId.addEventListener('click', () => {
      this.contenidos.forEach((contenido, indexContenido) => {
        const contenidoId = document.getElementById(contenido)

        if (indexTitulo !== indexContenido) {
          $('#' + contenidoId.id).slideUp()
        } else if (contenidoId.style.display !== 'none') {
          $('#' + contenidoId.id).slideUp()
        } else {
          $('#' + contenidoId.id).slideDown()
        }
      })
    })
  })
  return this
}

const accordion01 = new Accordions()
  .addTitulos(['title01accordion01', 'title02accordion01', 'title03accordion01'])
  .addContenidos(['content01accordion01', 'content02accordion01', 'content03accordion01'])
  .toggleAccordion()
  .build()

const accordion02 = new Accordions()
  .addTitulos(['title01accordion02', 'title02accordion02', 'title03accordion02', 'title04accordion02'])
  .addContenidos(['content01accordion02', 'content02accordion02', 'content03accordion02', 'content04accordion02'])
  .toggleAccordion()
  .build()

const accordion03 = new Accordions()
  .addTitulos(['title01accordion03', 'title02accordion03', 'title03accordion03', 'title04accordion03', 'title05accordion03'])
  .addContenidos(['content01accordion03', 'content02accordion03', 'content03accordion03', 'content04accordion03', 'content05accordion03'])
  .toggleAccordion()
  .build()
