function CollapsibleGroup(groupClass) {
    var collapsibles = document.getElementsByClassName(groupClass);

    function toggleContent() {
    var content = this.nextElementSibling;
    var isActive = content.style.display === "block";

      // Ocultar todos los contenidos
    for (var i = 0; i < collapsibles.length; i++) {
        collapsibles[i].nextElementSibling.style.display = "none";
    }

      // Mostrar el contenido del elemento clicado si no estaba activo
    if (!isActive) {
        content.style.display = "block";
    }
    }
    for (var i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", toggleContent);
    }
}
  // Crear una instancia del grupo collapsible y registrar el evento
    var collapsibleGroup = new CollapsibleGroup("collapsible");