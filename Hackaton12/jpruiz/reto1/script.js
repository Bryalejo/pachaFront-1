function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none") {
        console.log("Mostrando menú desplegable");
        dropdownMenu.style.display = "block";
    } else {
        console.log("Ocultando menú desplegable");
        dropdownMenu.style.display = "none";
    }
}
