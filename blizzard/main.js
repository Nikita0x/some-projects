let wow_image = document.getElementById("wow_image");
let wow_card = document.getElementById("wow_card");
let wow_preview = document.getElementById("wow_preview");

wow_card.addEventListener("mouseenter", function () {
  wow_image.style.display = "none";
  wow_preview.style.display = "block";

  console.log(wow_image);
  console.log(wow_preview);
  console.log("Image hidden, preview visible");
});

wow_card.addEventListener("mouseleave", function () {
  wow_image.style.display = "block";
  wow_preview.style.display = "none";
  wow_preview.currentTime = 0;

  console.log(wow_image);
  console.log(wow_preview);
  console.log("Image visible, preview hidden");
});
