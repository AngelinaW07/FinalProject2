let button = document.getElementById("card-button");
let cardImage = document.getElementById("card-img-top");
button.addEventListener("click", changeImage);

function changeImage() {
  var random = Math.floor(Math.random() * 9);
  if (random == 0) {
    cardImage.src = "Image/2024ROV.PNG.JPG";
  } else if (random == 1) {
    cardImage.src = "Image/Amongusbot94.PNG.JPG";
  } else if (random == 2) {
    cardImage.src = "Image/Neptune_Hook.png.JPG";
  } else if (random == 3) {
    cardImage.src = "Image/Neptune_ROV.png.png";
  } else if (random == 4) {
    cardImage.src = "Image/Neptune_Design.JPG";
  } else if (random == 5) {
    cardImage.src = "Image/NeptuneFBD.JPG.JPG";
  } else if (random == 6) {
    cardImage.src = "Image/SBSRC_Vital_Monitor.PNG.JPG";
  } else if (random == 7) {
    cardImage.src = "Image/SPARC_Robot.PNG.JPG";
  } else if (random == 8) {
    cardImage.src = "Image/SPARC.PNG";
  }
}
