// New York carousel

// creating a variable with the value of 1
let slideIndex_ny = 1;
// on load, call future function with the index of 1
showSlides_ny(slideIndex_ny);

// create a function (for next and previous buttons)
function plusSlides_ny(n) {
  showSlides_ny((slideIndex_ny += n));
}

// // Thumbnail image controls
function currentSlide_ny(n) {
  showSlides_ny((slideIndex_ny = n));
}
// declaring a function
function showSlides_ny(n) {
  // targeting DOM objects and storing them in variables
  let i;
  let slides = document.getElementsByClassName("mySlides_ny");
  let dots = document.getElementsByClassName("dot_ny");

  // if page is 5 or > 4, set index to 1
  if (n > slides.length) {
    slideIndex_ny = 1;
  }
  // if page is 0 or <0, set index to 4(last element)
  if (n < 1) {
    slideIndex_ny = slides.length;
  }

  // basic for loop

  // this loop is supposed to run over all mySlides_ny and set their display to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // this loop is supposed to run over dots_ny and
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_ny", "");
  }
  // slides[slideIndex_ny - 1].style.display = "block";
  dots[slideIndex_ny - 1].className += " active_ny";
}
