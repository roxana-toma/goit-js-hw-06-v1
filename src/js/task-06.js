'use strict';

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const inputLength = validationInput.value.length;
  const requiredLength = Number(validationInput.dataset.length);

  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
