class Dropdown {
    constructor() {
      this.dropdownBtn = document.getElementById('dropdown-btn');
      this.dropdownList = document.getElementById('dropdown-list');
  
      this.dropdownBtn.addEventListener('click', this.toggleDropdown.bind(this));
      document.addEventListener('click', this.closeDropdown.bind(this));
    }


    toggleDropdown() {
        this.dropdownList.style.display = (this.dropdownList.style.display === 'none') ? 'block' : 'none';
    }

    closeDropdown(event) {
        if (!event.target.matches('#dropdown-btn')) {
          this.dropdownList.style.display = 'none';
        }
    }
}

const dropdown = new Dropdown();