
function Accordion(accordionElement) {
    this.accordionElement = accordionElement;
    this.accordionHeader = accordionElement.querySelector('.accordion-header');
    this.accordionContent = accordionElement.querySelector('.accordion-content');
  
    this.accordionHeader.addEventListener('click', this.toggle.bind(this));
  }
  

  Accordion.prototype.toggle = function() {
    if (this.accordionContent.style.display === 'none') {
      this.show();
      this.closeOthers();
    } else {
      this.hide();
    }
  };
  

  Accordion.prototype.show = function() {
    this.accordionContent.style.display = 'block';
  };
  

  Accordion.prototype.hide = function() {
    this.accordionContent.style.display = 'none';
  };
  

  Accordion.prototype.closeOthers = function() {
    var allAccordions = document.querySelectorAll('.accordion');
    allAccordions.forEach(function(accordion) {
      if (accordion !== this.accordionElement) {
        var accordionContent = accordion.querySelector('.accordion-content');
        accordionContent.style.display = 'none';
      }
    }, this);
  };
  

  var accordionElements = document.querySelectorAll('.accordion');
  

  accordionElements.forEach(function(accordionElement) {
    new Accordion(accordionElement);
  });