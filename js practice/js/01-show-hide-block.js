const button = document.getElementById("button");
let content = document.getElementById("content");

button.addEventListener("click", () => {
  content.classList.toggle("content-hidden");

  if (content.classList.contains("content-hidden")) {
    button.textContent = "Открыть блок";
  } else {
    button.textContent = "Закрыть блок";
  }
});
