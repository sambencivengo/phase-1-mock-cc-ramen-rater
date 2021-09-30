// URls
const mainURL = 'http://localhost:3000/ramens';

// Page elements
const ramenContainer = document.getElementById('ramen-menu');
//
fetch(mainURL)
  .then((response) => response.json())
  .then((data) => data.forEach(renderRamen));

const renderRamen = (data) => {
  const image = document.createElement('img');
  image.src = data.image;
  ramenContainer.append(image);
};
