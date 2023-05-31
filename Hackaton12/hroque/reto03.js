const modal = document.getElementById('modal');
function Modal () {
  this.open = function () {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  }
  this.close = function () {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  }
  this.accept = function () {
    alert('Aceptado!')
    this.close();
  }
  this.cancel = function () {
    alert('Cancelado!')
    modal.style.opacity = "0";
    this.close();
  }
}
const reto03 = new Modal();