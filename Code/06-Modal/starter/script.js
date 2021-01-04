'use strict';

// first we select all the elements that will be used.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// When we use the querySelector with a with a selector that mathces multiple elements it will only select the first one.
// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal);

// So we need to use querySelectorAll in this case. It returns a NodeList that has the same behavior as an array.

const btnsOpenModal = document.querySelectorAll('.show-modal');

// If we are going to use the same function in multiple event listeners we need to specify the fucntion as a separate one and then pass it as an argument.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  // Remove a class from an element in css, using the elements selected previously.
  // modal.style.display = 'block'; This is the same as the next line
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// When clicking the 'X' or the overlay we close the modal.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling keyboard events
// We pass the event that is happening as an argument
document.addEventListener('keyup', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
