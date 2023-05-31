var dropdownToggle = document.getElementById('dropdownToggle');
var dropdownMenu = document.getElementById('dropdownMenu');
var dropdownSelected = document.querySelector('.dropdown-selected');

dropdownToggle.addEventListener('click', function() {
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

dropdownMenu.addEventListener('click', function(event) {
  var selectedItem = event.target.innerHTML;
  dropdownSelected.textContent = selectedItem;
  dropdownMenu.style.display = 'none';
});
