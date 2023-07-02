'use strict';







const doing = document.querySelector('#doing');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');


btn.addEventListener('click', createList);



function createList() {
  const elem = document.createElement('li');

  const inp = document.createElement('input');
  inp.classList.add('text');

  const redact = document.createElement('button');
  const del = document.createElement('button');


  inp.value = doing.value;
  inp.setAttribute('disabled', 'true');
  doing.value = '';
  redact.textContent = 'Redact';
  del.textContent = 'Remove';

  list.append(elem);
  elem.append(inp, redact, del);
  
  
  redact.addEventListener('click', function() {
    inp.removeAttribute('disabled');
    inp.focus();
  })

  inp.addEventListener('blur', function() {
    inp.setAttribute('disabled', 'true');
  })

  del.addEventListener('click', function() {
    elem.remove();
  })

}



