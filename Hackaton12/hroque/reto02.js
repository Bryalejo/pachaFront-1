function Accordion () {
  
  this.toggle = function (i) {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');
    this.content = document.getElementById(`content${i}`);
    this.content.style.maxHeight = this.content.style.maxHeight ? null : this.content.scrollHeight + 'px';
    if(i === 1){
      content2.style.maxHeight = null;
      content3.style.maxHeight = null;
    } else if(i === 2){
      content1.style.maxHeight = null;
      content3.style.maxHeight = null;
    } else if(i === 3){
      content1.style.maxHeight = null;
      content2.style.maxHeight = null;
    }
  }
}

const reto02 = new Accordion();