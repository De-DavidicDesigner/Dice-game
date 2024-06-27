//document.querySelector("body").classList.toggle("bodyBg")

function firstDiceValue() {
    var Num1 = Math.floor(Math.random() * 6) + 1;

    var ranDice = "dice" + Num1 + ".png";

    var diceSource = "images/" + ranDice;
    
    return diceSource;
}

function secondDiceValue() {
    var fNum1 = Math.floor(Math.random() * 6) + 1;

    var sDice = "dice" + fNum1 + ".png";

    var sDiceSource = "images/" + sDice;

    return sDiceSource;
} 
let firstFunc = firstDiceValue();
let secondFunc = secondDiceValue();

document.querySelectorAll("img")[0].setAttribute("src", firstFunc);
document.querySelectorAll("img")[1].setAttribute("src", secondFunc);

if (firstFunc >secondFunc) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (firstFunc < secondFunc) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Roll Dice Again";
}

var refreshBtn = document.querySelector("button");

function whenClick() {
    window.location.reload();
}

refreshBtn.addEventListener("click", whenClick);