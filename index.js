'use strict';



const elem = document.querySelector('input');
const res = document.querySelector('#res');

elem.addEventListener('blur', function() {
  res.textContent = Number(elem.value) ** 2;
})




