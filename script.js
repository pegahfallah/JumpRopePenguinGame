var ball = document.getElementById("cottonball");
var image = document.getElementById("cottonball");
var smoke = document.getElementById("smoke");
function burn() {
  //if (ball.classList != "animate") {
    //image.src = "ball2.png";
   // ball.classList.add("animate");
    image.style.display = "block";

 // }

 setTimeout(function () {
      smoke.style.display = "block";

 }, 1500);
 setTimeout(function () {
   smoke.style.display = "none";
 }, 2700);
  setTimeout(function () {
    image.style.display = "none";
  }, 3000);
}

