// write your code here

const mainURL = 'http://localhost:3000/ramens/';

function start() {
  getRamen();
}

function getRamen() {
  fetch(mainURL)
    .then((response) => response.json())
    .then((ramenData) => ramenData.forEach((ramen) => renderRamen(ramen)));
}

//return a usable object that we can iterate

//grab div where the images will be stored
const ramenMenu = document.getElementById('ramen-menu');
function renderRamen() {
  let ramenPic = document.createElement('img');
  ramenPic.src = `${getRamen}`;
  ramenPic.className = 'ramen-image';
  ramenMenu.appendChild(ramenPic);
}

renderRamen();
window.addEventListener('DOMContentLoaded', start());
