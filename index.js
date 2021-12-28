document.querySelector('button').addEventListener('click', function(){
  var randomNumber1 = Math.floor(Math.random()*6 + 1); //Random number between 1-6 for dice 1.
  var randomNumber2 = Math.floor(Math.random()*6 + 1); //Random number between 1-6 for dice 2.

  var randomImage1 = "images/dice" + randomNumber1 + ".png"; //The random image for dice 1.
  var randomImage2 = "images/dice" + randomNumber2 + ".png"; //The random image for dice 2.

  document.getElementsByTagName("img")[0].setAttribute("src", randomImage1); // Change the image.
  document.getElementsByTagName("img")[1].setAttribute("src", randomImage2); // Change the image.

  if(randomNumber1 > randomNumber2){ // Change the title and show who wins.
    document.querySelector("h1").textContent = "🏆 Player1 Wins!";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 Wins! 🏆";
  }
  else{
    document.querySelector("h1").textContent = "Draw!";
  }
});
