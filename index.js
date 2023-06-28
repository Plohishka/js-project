'use strict';



const btns = document.querySelectorAll('button');

const img = document.querySelector('img');

for (let btn of btns) {
  btn.addEventListener('click', function() {
    img.src = this.getAttribute("data-img");
  })
}





