const word = "example";
function scrambleWord(word) {
    let length = word.length;

    let scrambledWord = "";

    for (let i = 0; i < word.length; i++) {
        const randomIndex = Math.floor(Math.random() * length);

        scrambledWord += word.charAt(randomIndex);

        console.log(`Original: ${word}, Scrambled: ${scrambledWord}`);

        word = word.substring(0, randomIndex) + word.substring(randomIndex + 1);
        console.log(`Remaining: ${word}`);

        length--;
    }
    return scrambledWord;
}

console.log("Final result:", scrambleWord(word));
