function capitalizeWords(sentence) {
    sentence = sentence.toLowerCase();

    const capitalizedWords = [];

    const words = sentence.split(' ');

    words.forEach(word => {
           const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    
            capitalizedWords.push(capitalizedWord);
});

    const updatedSentence = capitalizedWords.join(' ');

    return updatedSentence;
}

const sentence = "thIs will be capiTalized for each word";

console.log(capitalizeWords(sentence));
