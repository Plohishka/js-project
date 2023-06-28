'use strict';




const elem = document.querySelector('#elem');
const btn = document.querySelector('#btn');
const body = document.querySelector('body');

let days = ['вс', 'пн', 'вт', 'ср', 
	'чт', 'пт', 'сб'];

const date = new Date();


function func(event) {
  if (date.getDay() % 2 !== 0) {
    event.stopPropagation();
    console.log('!!!');
  }

}


btn.addEventListener('click', function() {
  console.log(`Сегодня ${days[date.getDay()]}`);
});

body.addEventListener('click', func, {capture: true});