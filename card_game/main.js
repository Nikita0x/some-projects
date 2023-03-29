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
    divs[i].style.cursor = "pointer";
    cardsImages[i].classList.add("img__active");
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
        // cats

        if (firstDivSrc.includes("cat")) {
          if (secondDivSrc.includes("cat")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");
            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // dogs
        if (firstDivSrc.includes("dog")) {
          if (secondDivSrc.includes("dog")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");
            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");
              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // elephant
        if (firstDivSrc.includes("elephant")) {
          if (secondDivSrc.includes("elephant")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // horse
        if (firstDivSrc.includes("horse")) {
          if (secondDivSrc.includes("horse")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // kangaroos
        if (firstDivSrc.includes("kangaroo")) {
          if (secondDivSrc.includes("kangaroo")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // monkeys
        if (firstDivSrc.includes("monkey")) {
          if (secondDivSrc.includes("monkey")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // parrots
        if (firstDivSrc.includes("parrot")) {
          if (secondDivSrc.includes("parrot")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();

            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
        // zebras
        if (firstDivSrc.includes("zebra")) {
          if (secondDivSrc.includes("zebra")) {
            console.log("it is a match!");
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";
            firstDivChild.classList.replace("img__active", "img__matched");
            secondDivChild.classList.replace("img__active", "img__matched");
            divsNotClickable();
            setTimeout(function () {
              firstDiv.remove();
              secondDiv.remove();
              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1700);
          } else {
            let secondDivChild = secondDiv.children[0];
            secondDivChild.style.display = "block";

            console.log("images do not match!");
            divsNotClickable();
            secondDivChild.classList.replace("img__active", "img__wrong");

            setTimeout(function () {
              secondDivChild.style.display = "none";
              secondDivChild.classList.replace("img__wrong", "img__active");

              firstDivChild.style.display = "none";

              firstDiv = "";
              secondDiv = "";
              divsClickable();
            }, 1500);
          }
        }
      }
    }
  });
}

// divs not clickable
function divsNotClickable() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.add("disabled");
  }
}
// divs clickable
function divsClickable() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("disabled");
  }
}

if (scoreCounter === 8) {
  alert("Good Job! You Won!");
}
