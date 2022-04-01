var randomNum = Math.floor(Math.random() *6)+1;
var randomDiceImage = "dice" + randomNum + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource );

var randomNum2 = Math.floor(Math.random() * 6)+1;

var randomImageSource2 ="images/dice" + randomNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2 );

if (randomNum >randomNum2){
  document.querySelector("h1").innerHTML="😎 player 1 Wins";
}
else if (randomNum2 >randomNum) {
  document.querySelector("h1").innerHTML="player 2 Wins 😎";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
