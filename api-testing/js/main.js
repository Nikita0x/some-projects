const button = document.querySelector(".btn");
let image = document.querySelector(".image");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
const catFactsContainer = document.querySelector(".facts")

const url = "https://aws.random.cat/meow";
const cachedImage = document.querySelector("#cachedImage")
let data1 = [];
let data2 = [];
let data3 = [];

let clicksCount = 0;



// get images
function fetchImage1() {

  fetch(url)
  .then(response => response.json())
  .then(json => {
    data1 = json;
    console.log(data1);
    image.src = data1.file;
  })
  .catch(err => console.error(err));
}

function fetchImage2() {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    data2 = json;
    console.log(data2);
    image2.src = data2.file;
  })
  .catch(err => console.error(err));
}

function fetchImage3(){
  fetch(url)
  .then(response => response.json())
  .then(json => {
    data3 = json;
    console.log(data3);
    image3.src = data3.file;
  })
  .catch(err => console.error(err));
}

// get facts



// button click listener
button.addEventListener("click", () => {
  clicksCount++;
  if (clicksCount == 1) {
    fetchImage1();
    fetchImage2()
    fetchImage3()
    image.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
  } else if (clicksCount == 2) {
    image.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
  } else if (clicksCount == 3) {
    image.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
  }
    else {
      clicksCount = 1;
      fetchImage1();
      fetchImage2()
      fetchImage3()
      image.style.display = 'block';
      image2.style.display = 'none';
      image3.style.display = 'none';
    }
    console.log(clicksCount);
});
button.addEventListener('click', () => {
  let randomId = Math.floor(Math.random() * 90);

  // Remove the last cat fact before adding a new one
  const lastCatFact = catFactsContainer.lastChild;
  if (lastCatFact && lastCatFact.classList.contains("catFact")) {
    catFactsContainer.removeChild(lastCatFact);
  }


  function catFacts() {
    fetch(`https://meowfacts.herokuapp.com/?id=${randomId}`)
    .then(response => response.json())
    .then(json => {
      let facts = json;
      console.log(facts.data[0]);
      let catFactText = document.createElement('p');
      catFactText.setAttribute('class', 'catFact')
      catFactText.textContent = facts.data[0];
      catFactsContainer.appendChild(catFactText);
    })
  }
  catFacts();
  catFactsContainer.removeChild(catFactText);

});
