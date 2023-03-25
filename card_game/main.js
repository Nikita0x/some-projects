// secret
const secretImage = "https://i.ibb.co/5jdbH4m/secret.png";

const cards = document.querySelectorAll(".grid__item");
// cardsImages
const cardsImages = document.getElementsByClassName("cards__images");

// cards shown on click
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    currentImageId = e.target.id;
    let cardsImagesCurrent = cardsImages[currentImageId - 1];
    cardsImagesCurrent.style.zIndex = "1";
    console.log(currentImageId);
  });
});

let newArr = Array.from(cards);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    console.log(array);
  }
  return array;
}

window.addEventListener("load", shuffleArray(newArr));
