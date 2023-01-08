const btn = document.querySelector(".btn");
const cards = Array.from(document.querySelectorAll(".card"));

function openCatalog() {
  btn.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("hidden"));
    btn.classList.add("hidden");
  });
}

function response1() {
  if (window.innerWidth > 1100) {
    btn.classList.add("hidden");

    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 8) {
        item.classList.remove("hidden");
      } else if (index > 8) {
        btn.classList.remove("hidden");
      }
      openCatalog();
    });
  }
}

response1();

function response2() {
  if (window.innerWidth > 740) {
    btn.classList.add("hidden");

    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 5) {
        item.classList.remove("hidden");
      } else if (index > 5) {
        btn.classList.remove("hidden");
      }
      openCatalog();
    });
  }
}

response2();

function response2() {
  if (window.innerWidth < 740) {
    btn.classList.add("hidden");

    cards.forEach((item, index) => {
      item.classList.add("hidden");
      if (index <= 4) {
        item.classList.remove("hidden");
      } else if (index > 4) {
        btn.classList.remove("hidden");
      }
      openCatalog();
    });
  }
}

response3;

window.addEventListener("resize", (event) => {
  if (event.target.window.innerWidth > 1100) response1();
  if (event.target.window.innerWidth > 740) response2();
  if (event.target.window.innerWidth < 740) response3();
});
