function Accordion(element) {
  this.element = document.querySelector(element);
  this.element.addEventListener('click', () => {
    this.toggle();
  });
}

Accordion.prototype.toggle = function() {
  this.element.parentNode.classList.toggle('active');
}

let item_1 = new Accordion('.item1 .btn_1'); 
let item_2 = new Accordion('.item2 .btn_2'); 
let item_3 = new Accordion('.item3 .btn_3'); 