// secret
const secretImage = "https://i.ibb.co/5jdbH4m/secret.png";

let cards = document.querySelectorAll(".grid__item");
// cardsImages
const cardsImages = document.getElementsByClassName("cards__images");

// new array images
let newArray = [...cardsImages];
let newArrayURLS = [];

// new array IDs
let cardsIds = [...cards];
let cardIdsNew = [];

// cards shown on click
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    currentImageId = e.target.id;
    let cardsImagesCurrent = cardsImages[currentImageId - 1];
    cardsImagesCurrent.style.zIndex = "1";
    console.log(newArrayURLS[currentImageId]);
  });
});

// image randomizer on load
window.addEventListener("load", () => {
  // images from HTML Collection to Array; then looping to retrieve URLS and store in newArrayURLS

  for (i = 0; i < newArray.length; i++) {
    let empty = newArray[i].src;
    newArrayURLS.push(empty);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  shuffleArray(newArrayURLS);

  for (i = 0; i < cardsImages.length; i++) {
    cardsImages[i].src = newArrayURLS[i];
  }
});
