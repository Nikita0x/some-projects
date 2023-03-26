// secret
const secretImage = "https://i.ibb.co/5jdbH4m/secret.png";

// cardsImages
const cardsImages = document.getElementsByClassName("cards__images");
const imagesArray = [
  "https://i.ibb.co/D8vZbWX/1.jpg",
  "https://i.ibb.co/kGhKYyw/2.jpg",
  "https://i.ibb.co/q1Xtp1D/3.jpg",
  "https://i.ibb.co/5Tfxymp/4.jpg",
  "https://i.ibb.co/BGHMNXX/5.jpg",
  "https://i.ibb.co/XF8wZZD/6.jpg",
  "https://i.ibb.co/kmSL353/7.jpg",
  "https://i.ibb.co/096x08r/8.jpg",
  "https://i.ibb.co/D8vZbWX/1.jpg",
  "https://i.ibb.co/kGhKYyw/2.jpg",
  "https://i.ibb.co/q1Xtp1D/3.jpg",
  "https://i.ibb.co/5Tfxymp/4.jpg",
  "https://i.ibb.co/BGHMNXX/5.jpg",
  "https://i.ibb.co/XF8wZZD/6.jpg",
  "https://i.ibb.co/kmSL353/7.jpg",
  "https://i.ibb.co/096x08r/8.jpg",
];
// randomized images on load
window.addEventListener("load", () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Used like so
  shuffle(imagesArray);

  for (i = 0; i < cardsImages.length; i++) {
    let src = cardsImages[i].setAttribute("src", imagesArray[i]);
  }
});

// game's logic
let firstImage = "";
let secondImage = "";
let firstImageId = "";
let secondImageId = "";
let firstCard = "";
let firstCardId = "";
let firstCardSrc = "";
let secondCard = "";
let secondCardId = "";
let secondCardSrc = "";

for (let i = 0; i < cardsImages.length; i++) {
  cardsImages[i].addEventListener("click", (e) => {
    if (firstImage === "") {
      firstImage = e.target.src;
      // console.log(`first image is ${firstImage}`);
      console.log("First Image");
    } else {
      secondImage = e.target.src;
      // console.log(`second image is ${secondImage}`);
      if (firstImage === secondImage) {
        console.log("Match!");
        firstImage = "";
        secondImage = "";
      } else {
        console.log("images do not match!");
        firstImage = "";
        secondImage = "";
      }
    }
  });
  cardsImages[i].addEventListener("click", (e) => {
    if (firstImageId === "") {
      firstImageId = e.target.id;
      // console.log(`first image id is ${firstImageId}`);
    } else {
      secondImageId = e.target.id;
      // console.log(`second image id is ${secondImageId}`);
      if (firstImageId === secondImageId) {
        alert("You have to find the other card!");
      }
      firstImageId = "";
      secondImageId = "";
    }
  });
  // if a match, matched cards are deleted
  cardsImages[i].addEventListener("click", (e) => {
    if (firstCard == "") {
      firstCard = document.getElementById(e.target.id);
      firstCardId = firstCard.getAttribute("id");
      firstCardSrc = firstCard.getAttribute("src");
      // console.log(firstCardId, firstCardSrc);
    } else {
      secondCard = document.getElementById(e.target.id);
      secondCardId = secondCard.getAttribute("id");
      secondCardSrc = secondCard.getAttribute("src");
      // console.log(secondCardId, secondCardSrc);
      if (firstCardSrc == secondCardSrc && firstCardId != secondCardId) {
        firstCard.remove();
        secondCard.remove();
        firstCard = "";
        secondCard = "";
      }
    }
  });
}
