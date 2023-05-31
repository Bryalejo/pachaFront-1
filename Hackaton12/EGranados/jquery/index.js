function Dropdown(menuId, btnId) {
    var menu = document.getElementById(menuId);
    var btn = document.getElementById(btnId);
  
    function toggleMenu() {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      } else {
        menu.classList.add("show");
      }
    }
  
    function hideMenu() {
      menu.classList.remove("show");
    }
  
    btn.addEventListener("click", toggleMenu);
    document.addEventListener("click", function (event) {
      var targetElement = event.target; // Elemento clicado
  
      // Comprobar si el elemento clicado está dentro del menú o el botón
      var insideMenu = menu.contains(targetElement);
      var insideBtn = btn.contains(targetElement);
  
      // Si se hace clic fuera del menú o el botón, ocultarlo
      if (!insideMenu && !insideBtn) {
        hideMenu();
      }
    });
  }
  
  // Crear una instancia del menú desplegable y registrar el evento
  var dropdown = new Dropdown("dropdown-menu", "dropdown-btn");
  