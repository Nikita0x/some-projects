// https://github.com/wh-iterabb-it/meowfacts

const button = document.querySelector(".btn");
let image = document.querySelector(".image");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
const catFactsContainer = document.querySelector(".facts");

// languages
const uaButton = document.querySelector(".grid__item-1");
const deButton = document.querySelector(".grid__item-2");
const ruButton = document.querySelector(".grid__item-3");
const ptButton = document.querySelector(".grid__item-4");
const esButton = document.querySelector(".grid__item-5");
const czButton = document.querySelector(".grid__item-6");
const flButton = document.querySelector(".grid__item-7");
const urduButton = document.querySelector(".grid__item-8");

const url = "https://aws.random.cat/meow";
const cachedImage = document.querySelector("#cachedImage");
let data1 = [];
let data2 = [];
let data3 = [];

let clicksCount = 0;

// get images
function fetchImage1() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data1 = json;
      console.log(data1);
      image.src = data1.file;
    })
    .catch((err) => console.error(err));
}

function fetchImage2() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data2 = json;
      console.log(data2);
      image2.src = data2.file;
    })
    .catch((err) => console.error(err));
}

function fetchImage3() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data3 = json;
      console.log(data3);
      image3.src = data3.file;
    })
    .catch((err) => console.error(err));
}

// images change
function imagesChange() {
  clicksCount++;
  if (clicksCount == 1) {
    fetchImage1();
    fetchImage2();
    fetchImage3();
    image.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
  } else if (clicksCount == 2) {
    image.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
  } else if (clicksCount == 3) {
    image.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
  } else {
    clicksCount = 1;
    fetchImage1();
    fetchImage2();
    fetchImage3();
    image.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
  }
  console.log(clicksCount);
}

// // button click listener
// button.addEventListener("click", () => {

// });

// logic for catFacts
button.addEventListener("click", () => {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
  imagesChange();
});

// langauges functions
// ua
function ukrLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=ukr`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
uaButton.addEventListener("click", () => {
  ukrLangauge();
  imagesChange();
});

// de

function deLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=ger`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
deButton.addEventListener("click", () => {
  deLangauge();
  imagesChange();
});

// ru
function ruLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=rus`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
ruButton.addEventListener("click", () => {
  ruLangauge();
  imagesChange();
});

// pt
function ptLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=por`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
ptButton.addEventListener("click", () => {
  ptLangauge();
  imagesChange();
});

// es
function esLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=esp`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
esButton.addEventListener("click", () => {
  esLangauge();
  imagesChange();
});

// cz
function czLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=ces-cz`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
czButton.addEventListener("click", () => {
  czLangauge();
  imagesChange();
});

// fl
function flLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=tl-fil`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
flButton.addEventListener("click", () => {
  flLangauge();
  imagesChange();
});

// urdu
function urduLangauge() {
  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }
  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?lang=urd-ur`)
      .then((response) => response.json())
      .then((json) => {
        let facts = json;
        console.log(facts.data[0]);
        let catFactText = document.createElement("p");
        catFactText.setAttribute("class", "catFact");
        catFactText.textContent = facts.data[0];
        catFactsContainer.appendChild(catFactText);
      });
  }
  catFacts();
}
urduButton.addEventListener("click", () => {
  urduLangauge();
  imagesChange();
});
