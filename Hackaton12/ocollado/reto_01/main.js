function Dropdown(dropdownElement) {
    this.dropdownElement = dropdownElement;
    this.dropdownMenu = dropdownElement.querySelector('.dropdown-menu');

    this.dropdownElement.addEventListener('click', this.toggle.bind(this));
}

Dropdown.prototype.toggle = () => {
    const show = 'block';
    const hide = 'none';

    if (this.dropdownMenu.style.display === '') {
        this.dropdownMenu.style.display = show;
        return;
    }

    const isNone = this.dropdownMenu.style.display === 'none';
    this.dropdownMenu.style.display = isNone ? show : hide;
};

const dropdownElement = document.querySelector('.dropdown');

new Dropdown(dropdownElement);