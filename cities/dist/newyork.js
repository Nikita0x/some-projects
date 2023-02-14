// New York carousel

let slideIndex_ny = 1;
showSlides_ny(slideIndex_ny);

function plusSlides_ny(a) {
  showSlides_ny((slideIndex_ny += a));
}

// // Thumbnail image controls
function currentSlide_ny(a) {
  showSlides_ny((slideIndex_ny = a));
}

function showSlides_ny(a) {
  let b;
  let slides = document.getElementsByClassName("mySlides_ny");
  let dots = document.getElementsByClassName("dot_ny");
  if (a > slides.length) {
    slideIndex_ny = 1;
  }
  if (a < 1) {
    slideIndex_ny = slides.length;
  }
  // basic for loop
  for (b = 0; b < slides.length; b++) {
    slides[b].style.display = "none";
  }
  for (b = 0; b < dots.length; b++) {
    dots[b].className = dots[b].className.replace(" active_ny", "");
  }
  slides[slideIndex_ny - 1].style.display = "block";
  dots[slideIndex_ny - 1].className += " active_ny";
}
