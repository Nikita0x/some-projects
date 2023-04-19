const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

function handleTabClick(event) {
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}
