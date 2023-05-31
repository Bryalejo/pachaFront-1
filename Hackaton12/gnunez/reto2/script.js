function Accordion(accordionElement) {
    this.accordionElement = accordionElement;
    this.accordionHeader = accordionElement.querySelector('.accordion-header');
    this.accordionContent = accordionElement.querySelector('.accordion-content');
  
    this.accordionHeader.addEventListener('click', this.toggle.bind(this));
  }
  
  Accordion.prototype.toggle = function() {
    if (this.accordionContent.classList.contains('active')) {
      this.hide();
    } else {
      this.show();
      this.closeOthers();
    }
  };
  
  Accordion.prototype.show = function() {
    this.accordionContent.classList.add('active');
    this.accordionContent.style.display = 'block';
  };
  
  Accordion.prototype.hide = function() {
    this.accordionContent.classList.remove('active');
    this.accordionContent.style.display = 'none';
  };
  
  Accordion.prototype.closeOthers = function() {
    var allAccordions = document.querySelectorAll('.accordion');
    allAccordions.forEach(function(accordion) {
      var accordionContent = accordion.querySelector('.accordion-content');
      if (accordion !== this.accordionElement && accordionContent.classList.contains('active')) {
        accordionContent.classList.remove('active');
        accordionContent.style.display = 'none';
      }
    }, this);
  };
  
  var accordionElements = document.querySelectorAll('.accordion');
  accordionElements.forEach(function(accordionElement) {
    new Accordion(accordionElement);
  });
  