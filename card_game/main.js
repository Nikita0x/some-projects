const score = document.getElementById("score");
let scoreCounter = 0;
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
const divs = document.getElementsByClassName("div__wrapper");
// randomized images on load
window.addEventListener("load", () => {
  function shuffle(array) {
    let currentIndex = array.length - 1,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 1) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex) + 1;
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex + 1], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex + 1],
      ];
    }

    return array;
  }

  // Used like so
  shuffle(imagesArray);
  console.log("Shuffled array: ", imagesArray);

  for (i = 0; i < cardsImages.length; i++) {
    cardsImages[i].setAttribute("src", imagesArray[i]);
    divs[i].setAttribute("src", imagesArray[i]);
    cardsImages[i].style.display = "none";
  }
});

// logic for divs

let firstDiv = "";
let firstDivSrc = firstDiv.src;
let firstDivChild = "";
let firstDivChildSrc = "";

let secondDiv = "";
let secondDivSrc = secondDiv.src;
let secondDivChildSrc = "";
let secondDivChild = "";

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", (e) => {
    if (firstDiv == "") {
      firstDiv = e.target;
      let firstDivSrc = firstDiv.getAttribute("src");
      firstDivChild = firstDiv.children[0];
      firstDivChildSrc = firstDivChild.src;
      firstDivChild.style.display = "block";
      firstDivChild.classList.add("img__active");
      // console.log(`firstDivSrc = ${firstDivSrc}`);
      // console.log(`firstDivChildSrc = ${firstDivChildSrc}`);
    } else {
      secondDiv = e.target;
      let firstDivSrc = firstDiv.getAttribute("src");
      let secondDivSrc = secondDiv.getAttribute("src");
      console.log(firstDivSrc, secondDivSrc);
      if (firstDivSrc == secondDivSrc) {
        alert("You have to find the other image!");
        firstDivChild.style.display = "none";
        firstDiv = "";
        secondDiv = "";
      } else {
        // if images are not the same
        if (firstDivSrc.includes("cat")) {
          if (secondDivSrc.includes("cat")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDiv.classList.add("img__matched");
            secondDiv.classList.add("img__matched");
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
            }, 3000);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            secondDiv.classList.add("img__wrong");
            console.log("images do not match!");
            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDiv.classList.remove("img__wrong");
              firstDivChild.style.display = "none";
              firstDiv.classList.remove("img__active");
              firstDiv = "";
              secondDiv = "";
            }, 1500);
          }
        }
      }
      // console.log(`secondDivSrc = ${secondDivSrc}`);
      // console.log(`secondDivChildSrc = ${secondDivChildSrc}`);
    }
  });
}

// for (let i = 0; i < cardsImages.length; i++) {
//   cardsImages[i].addEventListener("click", (e) => {
//     if (firstCard == "") {
//       e.stopPropagation();

//       firstCard = document.getElementById(e.target.id);
//       firstCardId = firstCard.getAttribute("id");
//       firstCardSrc = firstCard.getAttribute("src");
//       console.log(`first card ${firstCardId},${firstCardSrc}`);
//       firstCard.classList.add("img__active");
//       // works
//     } else {
//       e.stopPropagation();

//       secondCard = document.getElementById(e.target.id);
//       secondCardId = secondCard.getAttribute("id");
//       secondCardSrc = secondCard.getAttribute("src");
//       console.log(`second card ${secondCardId},${secondCardSrc}`);
//       // works
//       // alert if clicked the same card + reset
//       if (firstCardId === secondCardId) {
//         alert("You have to find the other card!");
//         firstCard.classList.remove("img__active");
//         firstCard.style.display = "none";
//         firstCard = "";
//         // works
//       } else {
//         // check if images are cats
//         if (firstCardSrc.includes("cat")) {
//           if (secondCardSrc.includes("cat")) {
//             console.log("It is a match!");
//             firstCard.parentNode.remove();
//             secondCard.parentNode.remove();
//             firstCard = "";
//             secondCard = "";
//             div = "";
//           } else {
//             console.log(firstCard);
//             firstCard.style.display = "none";
//             secondCard.style.display = "none";
//             firstCard = "";
//             secondCard = "";
//           }
//         }
//         // check if images are dog
//         if (firstCardSrc.includes("dog")) {
//           if (secondCardSrc.includes("dog")) {
//             console.log("It is a match!");
//             firstCard.parentNode.remove();
//             secondCard.parentNode.remove();
//             firstCard = "";
//             secondCard = "";
//           } else {
//             firstCard.style.display = "none";
//             secondCard.style.display = "none";
//             firstCard = "";
//             secondCard = "";
//           }
//         }
//         // check if images are elephant
//         if (firstCardSrc.includes("elephant")) {
//           if (secondCardSrc.includes("elephant")) {
//             console.log("It is a match!");
//             firstCard.parentNode.remove();
//             secondCard.parentNode.remove();
//             firstCard = "";
//             secondCard = "";
//           }
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // check if images are horse
//       if (firstCardSrc.includes("horse")) {
//         if (secondCardSrc.includes("horse")) {
//           console.log("It is a match!");
//           firstCard.parentNode.remove();
//           secondCard.parentNode.remove();
//           firstCard = "";
//           secondCard = "";
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // check if images are kangaroos
//       if (firstCardSrc.includes("kangaroo")) {
//         if (secondCardSrc.includes("kangaroo")) {
//           console.log("It is a match!");
//           firstCard.parentNode.remove();
//           secondCard.parentNode.remove();
//           firstCard = "";
//           secondCard = "";
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // check if images are monkeys
//       if (firstCardSrc.includes("monkey")) {
//         if (secondCardSrc.includes("monkey")) {
//           console.log("It is a match!");
//           firstCard.parentNode.remove();
//           secondCard.parentNode.remove();
//           firstCard = "";
//           secondCard = "";
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // check if images are parrots
//       if (firstCardSrc.includes("parrot")) {
//         if (secondCardSrc.includes("parrot")) {
//           console.log("It is a match!");
//           firstCard.parentNode.remove();
//           secondCard.parentNode.remove();
//           firstCard = "";
//           secondCard = "";
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // check if images are zebras
//       if (firstCardSrc.includes("zebra")) {
//         if (secondCardSrc.includes("zebra")) {
//           console.log("It is a match!");
//           firstCard.parentNode.remove();
//           secondCard.parentNode.remove();
//           firstCard = "";
//           secondCard = "";
//         } else {
//           firstCard.style.display = "none";
//           secondCard.style.display = "none";
//           firstCard = "";
//           secondCard = "";
//         }
//       }
//       // works
//     }
//   });
// }
