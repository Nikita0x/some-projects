const form = document.getElementById("form");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const clearAll = document.getElementById("clear");

// increment function
let i = 0;
function incrementCounter() {
  i++;
}

// add button listener
addButton.addEventListener("click", addTask());

// add button logic
function addTask() {
  addButton.addEventListener("click", (e) => {
    if (form.value.trim().length !== 0) {
      const formValue = form.value.trim();
      incrementCounter();
      // div
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", `newDiv${i}`);
      list.appendChild(newDiv);
      // p
      const newText = document.createElement("p");
      newText.setAttribute("class", `item`);
      newText.setAttribute("id", `item${i}`);
      newText.textContent = formValue;
      newDiv.appendChild(newText);
      // button
      const newDeleteButton = document.createElement("button");
      newDeleteButton.setAttribute("class", "deleteDiv");
      newDeleteButton.setAttribute("id", `deleteDiv${i}`);
      newDeleteButton.textContent = "X";
      newDiv.appendChild(newDeleteButton);

      newDeleteButton.addEventListener("click", () => {
        newDeleteButton.parentElement.remove();
      });
      form.value = "";
    } else {
      e.preventDefault();
    }
  });
}

// on enter
form.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

// clear all button
clearAll.addEventListener("click", () => {
  const deleteDivs = document.querySelectorAll(".deleteDiv");
  for (let i = 0; i < deleteDivs.length; i++) {
    const deleteDiv = deleteDivs[i];
    deleteDiv.parentElement.remove();
  }
});
