function Dropdown(element) {
  this.element = document.querySelector(element);
  this.element.addEventListener('click', () => {
    this.toggle();
    console.log(`Se presiono el boton ${this.element.textContent}`)
  })
}

Dropdown.prototype.toggle = function() {
  return this.element.classList.toggle('active');
}

let dropdown_1 = new Dropdown('.js_dropdown_1');
let dropdown_2 = new Dropdown('.js_dropdown_2');
let dropdown_3 = new Dropdown('.js_dropdown_3');