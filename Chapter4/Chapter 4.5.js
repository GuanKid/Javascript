let prize = prompt("Select a number between 0 and 10 to choose your prize:");
prize = Number(prize);
let outputMessage = "My Selection: ";
switch (prize) {
    case 0:
        outputMessage += "A brand new car!";
        break;
    case 1:
        outputMessage += "A tropical vacation!";
        break;
    case 2:
        outputMessage += "A year supply of free pizza!";
        break;
    case 3:
        outputMessage += "A shopping spree!";
        break;
    case 4:
    case 5:
        outputMessage += "A weekend getaway!";
        break;
    case 6:
    case 7:
    case 8:
        outputMessage += "A gift card!";
        break;
    case 9:
    case 10:
        outputMessage += "A big hug!";
        break;
    default:
        outputMessage += "No prize this time.";
}
console.log(outputMessage);
