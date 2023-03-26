// secret
const secretImage = "https://i.ibb.co/5jdbH4m/secret.png";

// cardsImages
const cardsImages = document.getElementsByClassName("cards__images");
const imagesArray = [
  "https://i.ibb.co/D8vZbWX/cat.jpg",
  "https://i.ibb.co/wdJMRWx/cat.jpg",
  "https://i.ibb.co/kGhKYyw/dog.jpg",
  "https://i.ibb.co/wCyPK5M/dog.jpg",
  "https://i.ibb.co/096x08r/elephant.jpg",
  "https://i.ibb.co/5Rtx1yq/elephant.jpg",
  "https://i.ibb.co/5Tfxymp/horse.jpg",
  "https://i.ibb.co/N1xcY63/horse.jpg",
  "https://i.ibb.co/XF8wZZD/kangaroo.jpg",
  "https://i.ibb.co/6HMvvrW/kangaroo.jpg",
  "https://i.ibb.co/q1Xtp1D/monkey.jpg",
  "https://i.ibb.co/HD30n00/monkey.jpg",
  "https://i.ibb.co/BGHMNXX/parrot.jpg",
  "https://i.ibb.co/N1QZjtL/parrot.jpg",
  "https://i.ibb.co/kmSL353/zebra.jpg",
  "https://i.ibb.co/SBVqKCw/zebra.jpg",
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
let firstCard = "";
let firstCardId = "";
let firstCardSrc = "";
let secondCard = "";
let secondCardId = "";
let secondCardSrc = "";

for (let i = 0; i < cardsImages.length; i++) {
  cardsImages[i].addEventListener("click", (e) => {
    // console.log(e.target.src.includes("monkey"));
    if (firstCard == "") {
      firstCard = document.getElementById(e.target.id);
      firstCardId = firstCard.getAttribute("id");
      firstCardSrc = firstCard.getAttribute("src");
      console.log(`first card ${firstCardId},${firstCardSrc}`);
      firstCard.classList.add("img__active");
      // works
    } else {
      secondCard = document.getElementById(e.target.id);
      secondCardId = secondCard.getAttribute("id");
      secondCardSrc = secondCard.getAttribute("src");
      console.log(`second card ${secondCardId},${secondCardSrc}`);
      // works
      // alert if clicked the same card + reset
      if (firstCardId === secondCardId) {
        console.log("You have to find the other card!");
        firstCard.classList.remove("img__active");
        firstCard = "";
        // works
      } else {
        // check if images are cats
        if (firstCardSrc.includes("cat")) {
          if (secondCardSrc.includes("cat")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are dog
        if (firstCardSrc.includes("dog")) {
          if (secondCardSrc.includes("dog")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are elephant
        if (firstCardSrc.includes("elephant")) {
          if (secondCardSrc.includes("elephant")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are horse
        if (firstCardSrc.includes("horse")) {
          if (secondCardSrc.includes("horse")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are kangaroos
        if (firstCardSrc.includes("kangaroo")) {
          if (secondCardSrc.includes("kangaroo")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are monkeys
        if (firstCardSrc.includes("monkey")) {
          if (secondCardSrc.includes("monkey")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are parrots
        if (firstCardSrc.includes("parrot")) {
          if (secondCardSrc.includes("parrot")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
        // check if images are zebras
        if (firstCardSrc.includes("zebra")) {
          if (secondCardSrc.includes("zebra")) {
            firstCard.classList.remove("img__active");
            firstCard.remove();
            secondCard.remove();
            firstCard = "";
            secondCard = "";
          } else {
            firstCard.classList.remove("img__active");
            firstCard = "";
            secondCard = "";
          }
        }
      }
      // works
    }
  });
}
