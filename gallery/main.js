let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let slideIndex = 1;
// on page load it sets the variable to 1
showSlides(slideIndex);
// then, this function is called and passed the argument of the variable which is 1, and therefore open the first image

function plusSlides(n) {
  showSlides((slideIndex += n));
}
// we added 2 links (buttons) with onclick="plusSlides(-1),(1); which on click invoke the above function and pass to it the argument of 1 or -1, which in its turn invokes the function showSlides() which has slideIndex += n and it means slideindex = slideindex + n

function showSlides(n) {
  // then we create thhe main function
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //   create i iterable variable, and target .mySlides into one variable
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  //   here we set logic for when the buttons are clicked, what happens when it is 4/4 or -1/4 - they are reset back to default values
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  //   here is the final logic. we set a loop,to initially hide all slides, and then target the slide and set its display to block
}
