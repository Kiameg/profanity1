let theText = "Jeg er en tekst der skal findes ord i";
const wordsToCheckFor = ["ord", "tekst"];
const theTextArray = theText.split(" ");
const even = (element) => element === wordsToCheckFor[0] || wordsToCheckFor[1];

console.log(theTextArray.some(even));
