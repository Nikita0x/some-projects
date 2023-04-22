const headers = document.querySelectorAll("[data-name]");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("hidden");
}
