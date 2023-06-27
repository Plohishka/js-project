'use strict';



const res = document.querySelector('#res');
const step = document.querySelector('#step');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function() {
  res.value = Number(res.value) - Number(step.value);
})

btn2.addEventListener('click', function() {
  res.value = Number(res.value) + Number(step.value);
})



