let button = document.getElementById("card-button");
let cardTitle = document.getElementById("card-title");
let cardImage = document.getElementById("card-img-top");
button.addEventListener("click", changeImage);

function changeImage() {
  var random = Math.floor(Math.random() * 9);
  if (random == 0) {
    cardImage.src = "Image/2024ROV.PNG.JPG";
    cardTitle.innerHTML = "2024 SeaPerch Competition SITHS Special Operation Team ROV";
  } else if (random == 1) {
    cardImage.src = "Image/Amongusbot94.PNG.JPG";
    cardTitle.innerHTML = "Introduction to STEM Robot Project";
  } else if (random == 2) {
    cardImage.src = "Image/Neptune_Hook.png.JPG";
    cardTitle.innerHTML = "2025 SeaPerch Competition Neptune Team ROV Hook Design";
  } else if (random == 3) {
    cardImage.src = "Image/Neptune_ROV.png.png";
    cardTitle.innerHTML = "2025 SeaPerch Competition Neptune Team ROV ";
  } else if (random == 4) {
    cardImage.src = "Image/Neptune_Design.JPG";
    cardTitle.innerHTML = "2025 SeaPerch Competition Neptune Team ROV Design";
  } else if (random == 5) {
    cardImage.src = "Image/NeptuneFBD.JPG.JPG";
    cardTitle.innerHTML = "2025 SeaPerch Competition Neptune Team ROV Free Body Diagram";
  } else if (random == 6) {
    cardImage.src = "Image/SBSRC_Vital_Monitor.PNG.JPG";
    cardTitle.innerHTML = "Stony Brook Summer Robotic Competition Vital Monitor Robot";
  } else if (random == 7) {
    cardImage.src = "Image/SPARC_Robot.PNG.JPG";
    cardTitle.innerHTML = "NYU Summer Program for Automation, Robotics, and Coding Robot";
  } else if (random == 8) {
    cardImage.src = "Image/SPARC.PNG";
    cardTitle.innerHTML = "NYU Summer Program for Automation, Robotics, and Coding Circuit Board";
  }
}
