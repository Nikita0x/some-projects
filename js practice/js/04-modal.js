const button = document.querySelector("[data-modal-button");
const buttonClose = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
buttonClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});

modal.querySelector(".modal-window").addEventListener("click", (event) => {
  event.stopPropagation();
});
