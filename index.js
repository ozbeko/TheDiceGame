var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

switch(randomNumber1){
  case 1:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png")
    break;

  case 3:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png")
    break;

  case 4:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png")
    break;

  case 5:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png")
    break;

  case 6:
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png")
    break;
}

switch(randomNumber2){
  case 1:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png")
    break;

  case 3:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png")
    break;

  case 4:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png")
    break;

  case 5:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png")
    break;

  case 6:
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png")
    break;
}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🏆 Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player2 Wins! 🏆";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
