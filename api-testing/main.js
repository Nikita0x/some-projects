const button = document.querySelector(".btn");
const image = document.querySelector(".image");
const url = "https://aws.random.cat/meow";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
    console.log(image.src);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  fetchHandler();
});
