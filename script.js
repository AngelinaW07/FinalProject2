let button = document.getElementById("card-button");
let cardImage = document.getElementById("card-img-top");
button.addEventListener("click", changeImage);

function changeImage() {
  var random = Math.floor(Math.random() * 2);
  if (random == 0) {
    cardImage.src = "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?cs=srgb&dl=cold-snow-landscape-858115.jpg&fm=jpg";
  } else if (random == 1) {
    cardImage.src = "https://th.bing.com/th/id/R.3dc5f998e54c345e8fdcb69fbe304051?rik=23kwO9bHYTPS4A&pid=ImgRaw&r=0";
  }
}
