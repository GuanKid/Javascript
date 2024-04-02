
let choices = ["Rock", "Paper", "Scissors"];
let playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
let computerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
let message = "";
if (playerIndex === computerIndex) {
    message = "It's a tie!";
} else {
    
    if ((playerIndex === 0 && computerIndex === 2) ||
        (playerIndex === 1 && computerIndex === 0) ||
        (playerIndex === 2 && computerIndex === 1)) {
        message = "You win!";
    } else {
        message = "Computer wins!";
    }
}
console.log("Player chose: " + choices[playerIndex]);
console.log("Computer chose: " + choices[computerIndex]);
console.log(message);
