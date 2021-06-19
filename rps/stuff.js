const compVars = ["r", "p", "s"];
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const winsel = document.getElementById("wins");
const lossesel = document.getElementById("losses");
const total = document.getElementById("total");
let wins = 0;
let losses = 0;
document.onkeyup = function (e) {
  let userGuess = e.key;
  let computerGuess = compVars[Math.floor(3 * Math.random())];
  if (userGuess === "r" || userGuess === "s" || userGuess === "p") {
    if (userGuess == computerGuess) {
    } else if (userGuess == "r" && computerGuess == "p") {
      losses++;
    } else if (userGuess == "r" && computerGuess == "s") {
      wins++;
    } else if (userGuess == "p" && computerGuess == "r") {
      wins++;
    } else if (userGuess == "p" && computerGuess == "s") {
      losses++;
    } else if (userGuess == "s" && computerGuess == "r") {
      losses++;
    } else if (userGuess == "s" && computerGuess == "p") {
      wins++;
    }
    user.textContent = "You played: " + userGuess;
    computer.textContent = "The computer played: " + computerGuess;
    winsel.textContent = "Your wins: " + wins;
    lossesel.textContent = "Your losses: " + losses;
    let t = wins + losses;
    total.textContent = "Total games: " + t;
  }
};
