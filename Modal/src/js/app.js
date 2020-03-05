function Modal(element, callbackClose, callbackAccept, callbackCancel) {
  this.element = document.querySelector(element);
  this.elementClose = this.element.querySelector('.js_close');
  this.elementAccept = this.element.querySelector('.js_accept');
  this.elementCancel = this.element.querySelector('.js_cancel');

  this.registerEvents(callbackClose, callbackAccept, callbackCancel);
}

Modal.prototype.open = function() {
  this.element.classList.add('active');
}

Modal.prototype.close = function() {
  this.element.classList.remove('active');
}

Modal.prototype.registerEvents = function(callbackClose, callbackAccept, callbackCancel) {
  this.elementClose.addEventListener('click', () => {
    callbackClose();
    this.close();
  })
  this.elementAccept.addEventListener('click', () => {
    callbackAccept();
    this.close();
  })
  this.elementCancel.addEventListener('click', () => {
    callbackCancel();
    this.close();
  })
}

let modal_1 = new Modal('.js_modal_1',function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
});

let modal_2 = new Modal('.js_modal_2',function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
});

let modal_3 = new Modal('.js_modal_3',function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
}, function() {
  openModalBtn_1.classList.remove('active');
  openModalBtn_2.classList.remove('active');
  openModalBtn_3.classList.remove('active');
  container.classList.remove('active');
});

let openModalBtn_1 = document.querySelector('.openModal_1');
let openModalBtn_2 = document.querySelector('.openModal_2');
let openModalBtn_3 = document.querySelector('.openModal_3');
let container = document.querySelector('.container');

openModalBtn_1.addEventListener('click', function() {
  modal_1.open();
  container.classList.add('active');
  openModalBtn_1.classList.add('active');
  openModalBtn_2.classList.add('active');
  openModalBtn_3.classList.add('active');
})

openModalBtn_2.addEventListener('click', function() {
  modal_2.open();
  container.classList.add('active');
  openModalBtn_1.classList.add('active');
  openModalBtn_2.classList.add('active');
  openModalBtn_3.classList.add('active');
})

openModalBtn_3.addEventListener('click', function() {
  modal_3.open();
  container.classList.add('active');
  openModalBtn_1.classList.add('active');
  openModalBtn_2.classList.add('active');
  openModalBtn_3.classList.add('active');
})
