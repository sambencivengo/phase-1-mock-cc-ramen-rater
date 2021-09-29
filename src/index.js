// write your code here

const mainURL = 'http://localhost:3000/ramens/';

function start() {
  getRamen();
}

function getRamen() {
  fetch(mainURL)
    .then((response) => response.json())
    .then((ramenData) => ramenData.forEach(renderRamen));
}

//return a usable object that we can iterate

//grab div where the images will be stored
const ramenMenu = document.getElementById('ramen-menu');
function renderRamen(ramen) {
  // let ramenPic = document.createElement('img');
  // ramenPic.src = ramen.image;
  // ramenPic.className = 'ramen-image';
  // ramenMenu.appendChild(ramenPic);
  console.log(ramen);
}

renderRamen();
window.addEventListener('DOMContentLoaded', start());
