// // write your code here
// ------------------------------------------------------------------
// My code!!!!
// ------------------------------------------------------------------

// const mainURL = 'http://localhost:3000/ramens/';

// function start() {
//   getRamen();
// }

// function getRamen() {
//   fetch(mainURL)
//     .then((response) => response.json())
//     .then((ramenData) => ramenData.forEach(renderRamen));
// }

// //return a usable object that we can iterate

// //grab div where the images will be stored
// const ramenMenu = document.getElementById('ramen-menu');
// function renderRamen(ramen) {
//   // let ramenPic = document.createElement('img');
//   // ramenPic.src = ramen.image;
//   // ramenPic.className = 'ramen-image';
//   // ramenMenu.appendChild(ramenPic);
//   console.log(ramen);
// }

// renderRamen();
// window.addEventListener('DOMContentLoaded', start());

// ------------------------------------------------------------------
// class review
// ------------------------------------------------------------------

// URLs
const mainURL = 'http://localhost:3000/ramens';

// Global Variables

const ramenMenuElement = document.getElementById('ramen-menu');
const detailElement = document.getElementById('ramen-detail');

// Functions
const newRamenForm = document.getElementById('new-ramen');

newRamenForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

function ramenClick(theRamen) {
  console.log(theRamen);
  console.log(detailElement);
  // add theRamen's attributes to the div

  // an img that needs and image
  const img = detailElement.querySelector('img');
  // we can use a query selector on the previously declared detailElement
  // query selcetor returns the first matching element, in this case the image.
  // we assign the element to img. let's do the same with h2 and h3
  img.src = theRamen.image;
  // an h2 that needs the name
  const h2 = detailElement.querySelector('h2');
  h2.textContent = theRamen.name;
  // we are doing the same as above. creating an h2 variable by grabbing the h2
  // inside of the detailElement (div)

  // an h3 that needs the restaurant
  const h3 = detailElement.querySelector('h3');
  h3.textContent = theRamen.restaurant;

  //now we need to add the ratings and the comment
  document.getElementById('rating-display').textContent = theRamen.rating;
  document.getElementById('comment-display').textContent = theRamen.comment;
}

function renderRamenToMenu(ramenObject) {
  //
}
fetch(mainURL)
  .then((response) => response.json())
  .then((ramens) => {
    /*
    display the image for each of the ramen using an img tag
    inside the #ramen-menu div
    */

    //instead of console.logging the data or ramens, we are immediately acting on the data
    // it is an array and therefore we can iterate through it with forEach.
    ramens.forEach((ramen) => {
      // inside of the forEach we can do most of the work, we are already iterating over each
      // object so we can just create a bunch of images
      const newImg = document.createElement('img');
      // we can add an event listener inside of this loop, as it will add
      // the event to each image
      newImg.addEventListener('click', () => ramenClick(ramen));
      newImg.src = ramen.image;
      ramenMenuElement.append(newImg);
      // console.log(ramen);
    });
  });

// make and img element
// assign the src attribute to each img element
// append to the ramen menu element
