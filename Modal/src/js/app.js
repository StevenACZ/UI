function Modal(element) {
  this.element = document.querySelector(element);
  this.elementClose = this.element.querySelector('.js_close');
  this.elementAccept = this.element.querySelector('.js_accept');
  this.elementCancel = this.element.querySelector('.js_cancel');

  this.registerEvents();
}

Modal.prototype.open = function() {
  this.element.classList.add('active');
}

Modal.prototype.close = function() {
  this.element.classList.remove('active');
}

Modal.prototype.registerEvents = function() {
  this.elementClose.addEventListener('click', () => {
    this.close();
  })
  this.elementAccept.addEventListener('click', () => {
    this.close();
  })
  this.elementCancel.addEventListener('click', () => {
    this.close();
  })
}

let modal_1 = new Modal('.js_modal_1');

let openModalBtn = document.querySelector('.openModal');
openModalBtn.addEventListener('click', function() {
  modal_1.open();
})