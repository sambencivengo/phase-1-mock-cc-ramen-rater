// ==============================================================================
// Main elements
// ==============================================================================
const ramenRestaurant = document.querySelector('.restaurant');
const ramenImage = document.querySelector('.detail-image');
const mainURL = 'http://localhost:3000/ramens';
const ramenMenuDiv = document.getElementById('ramen-menu');
const ramenName = document.querySelector('#ramen-detail .name');
const ramenRating = document.getElementById('rating-display');
const ramenComment = document.getElementById('comment-display');
// ==============================================================================
// Form elements
// ==============================================================================
const ramenForm = document.getElementById('new-ramen');

// fetch the data
fetch(mainURL)
  .then((resp) => resp.json()) // converting to JSON
  .then((ramen) => ramen.forEach(displayRamen));
//iterating through the array of ramens,
//each ramen object is having displayName() fired at it
//grab some elements

function displayRamen(ramen) {
  const image = document.createElement('img');
  image.src = ramen.image;
  image.addEventListener('click', () => ramenClick(ramen));
  // ramenClick even is acting on each element
  // we are using an anonymous ƒ because we need to pass in the
  // argument from displayRamen(). ramenClick() would invoke it and
  // ramenClick without '()' returns nothing
  ramenMenuDiv.append(image);
}

function ramenClick(ramen) {
  /*
    // this function is bei`ng called
    // by the listener event inside of displayRamen()
  */
  // pull restaraunt name, ramen name, rating and comment
  ramenName.textContent = ramen.name;
  //page element         //JSON data property
  ramenImage.src = ramen.image;
  //page element  //JSON data property
  ramenRestaurant.textContent = ramen.restaurant;
  //page element                //JSON data property
  ramenRating.textContent = ramen.rating;
  //page element             //JSON data property
  ramenComment.textContent = ramen.comment;
  //page element             //JSON data property
}

// Create new ramen event, passing the values of the forms into a new object
ramenForm.addEventListener('submit', createRamen);

function createRamen(e) {
  e.preventDefault();

  // creating a new empty object
  const image = {};

  // assigning key:value pairs to the empty object
  image.name = ramenForm[0].value;
  image.restaurant = ramenForm[1].value;
  image.image = ramenForm[2].value;
  image.rating = ramenForm[3].value;
  image.comment = ramenForm[4].value;

  // passing the new object as an argument for our displayRamen() machine
  displayRamen(image);
  // reset form so that you can put in new input
  ramenForm.reset();
}
