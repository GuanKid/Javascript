let userAge = prompt("Please enter your age:");
userAge = Number(userAge);
let message;
if (userAge >= 21) {
    message = "You are confirmed for entry to the venue and can purchase alcohol.";
}
else if (userAge >= 19) {
    message = "You are confirmed for entry to the venue but cannot purchase alcohol.";
}
else {
    message = "You are denied entry to the venue.";
}
console.log(message);
