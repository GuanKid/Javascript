let randomNumber = Math.floor(Math.random() * 6);
let userQuestion = prompt("Ask a yes or no question:");
let response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "It is decidedly so.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
}
let finalResponse = `You asked: ${userQuestion}\nMagic 8-Ball says: ${response}`;
console.log(finalResponse);
