const dropdown = document.getElementById('dropdown');
function Dropdown () {
  this.toggle = function () {
    dropdown.classList.toggle("invisible");
  }
}
const reto01 = new Dropdown();
