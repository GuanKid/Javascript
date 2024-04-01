let originalString = "I love JavaScript";
originalString = originalString.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.forEach(vowel => {
    console.log("Current vowel:", vowel);
});

vowels.forEach((vowel, index) => {
    originalString = originalString.replaceAll(vowel, (index + 1).toString());
});

console.log("Modified string:", originalString);
