function Dropdown(dropdownElement) {
    this.dropdownElement = dropdownElement;
    this.dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
  
    this.dropdownElement.addEventListener('click', this.toggle.bind(this));
  }
  
  Dropdown.prototype.toggle = function() {
    if (this.dropdownMenu.style.display === 'none') {
      this.show();
    } else {
      this.hide();
    }
  };
  
  
  Dropdown.prototype.show = function() {
    this.dropdownMenu.style.display = 'block';
  };
  
  
  Dropdown.prototype.hide = function() {
    this.dropdownMenu.style.display = 'none';
  };
  
  
  var dropdownElements = document.querySelectorAll('.dropdown');
  
  
  dropdownElements.forEach(function(dropdownElement) {
    new Dropdown(dropdownElement);
  });