const string1 = "How's%20it%20going%3F";
const string2 = "How's it going?";
const webURI = "http://www.basescripts.com?=" + encodeURIComponent("Hello World");

const decodedString = decodeURIComponent(string1);
const encodedString = encodeURIComponent(string2);

console.log("Decoded String:", decodedString);
console.log("Encoded String:", encodedString);

const encodedWebURI = encodeURIComponent(webURI);
console.log("Encoded Web URI:", encodedWebURI);
