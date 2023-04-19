var buttonAdd = document.getElementById("add");
var list = document.getElementById("list");
var form = document.getElementById("form");
var buttonDelete = document.getElementsByClassName(".deleteDiv");
// add button
buttonAdd === null || buttonAdd === void 0
  ? void 0
  : buttonAdd.addEventListener("click", function (event) {
      var formValue = form.value.trim();
      if (formValue !== "") {
        addItem(formValue);
      } else {
        event.preventDefault();
      }
    });
// form
form.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    buttonAdd === null || buttonAdd === void 0 ? void 0 : buttonAdd.click();
  }
});
function addItem(value) {
  var add = document.createElement("p");
  var btn = document.createElement("button");
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "testDiv");
  btn.setAttribute("class", "deleteDiv");
  btn.innerText = "X";
  add.classList.add("item");
  var formValue = form.value.trim();
  add.textContent = formValue;
  newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(add);
  newDiv === null || newDiv === void 0
    ? void 0
    : newDiv.appendChild(buttonDelete);
  newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(btn);
  list === null || list === void 0 ? void 0 : list.appendChild(newDiv);
  form.value = "";
}
// delete item button
function buttonDel() {
  buttonDelete.forEach(function (button) {
    button.addEventListener("click", function (HTMLButtonElement) {
      var parent = this.parentElement;
      parent.remove();
      console.log("delete button works");
    });
  });
}
