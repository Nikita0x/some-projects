let wow_image = document.getElementById("wow_image");
let wow_preview = document.getElementById("wow_preview");
const on = document.getElementsByClassName("on");
const off = document.getElementsByClassName("off");

wow_image.addEventListener("mouseover", function () {
  wow_image = wow_image.style.display = "none";
  wow_preview = wow_preview.style.display = "block";
  console.log(wow_image);
  console.log(wow_preview);
  console.log("Image to preview -changed");
});

// wow_image.addEventListener("mouseout", function () {
//   wow_image.setAttribute("style", "display: block");
//   wow_preview.setAttribute("style", "display: none");
//   console.log(wow_image);
//   console.log(wow_preview);
//   console.log("Image to preview to image");
// });

// wow_image.addEventListener("mouseover", function () {
//   wow_image = wow_image.style.display = "none";
//   wow_preview = wow_preview.style.display = "block";
//   console.log(wow_image);
//   console.log(wow_preview);
//   console.log("Image to preview -changed");
// });

// wow_image.addEventListener("mouseout", function () {
//   if (wow_image.style.display == "none") {
//     wow_image.style.display = "block";
//   }
//   wow_image = wow_image.style.display = "block";
//   wow_preview = wow_preview.style.display = "none";
//   console.log(wow_image);
//   console.log(wow_preview);
//   console.log("Image to preview to image");
// });
