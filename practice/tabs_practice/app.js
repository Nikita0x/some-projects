const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);
function onTabClick(item) {
  item.addEventListener("click", (e) => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach((item) => {
        item.classList.remove("active");
      });

      tabsItem.forEach((item) => {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
document.querySelector(".tabs__nav-btn").click();
