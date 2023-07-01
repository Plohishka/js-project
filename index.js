'use strict';







const doing = document.querySelector('#doing');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');


btn.addEventListener('click', createList);



function createList() {
  const elem = document.createElement('li');

  const inp = document.createElement('input');
  inp.classList.add('text');

  const del = document.createElement('button');
  del.classList.add('remove');


  inp.value = doing.value;
  doing.value = '';
  del.textContent = 'Remove';

  list.append(elem);
  elem.append(inp, del);
  


  del.addEventListener('click', function() {
    elem.remove();
  })

}



