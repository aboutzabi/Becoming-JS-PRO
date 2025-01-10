// // Problem: Count the frequency of words in a string.
// // Example:
// // Input: "hello world hello"
// // Output: { hello: 2, world: 1 }
// Limits and Edge Cases:

// Ignore case sensitivity.
// Handle punctuation and special characters.
// Use Cases:

// Analytics for text data.

const wordFrequency = (str) => {
  str = str.replace(/[^A-Za-z0-9\s]/g, "");

  str = str.toLowerCase().split(" ");

  var frequency = {};

  for (let word of str) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
};

console.log(wordFrequency("HellO woRld hello")); // { hello: 2, world: 1 }
console.log(wordFrequency("JavaScript is awesome and JavaScript is fun"));
console.log(wordFrequency("Hello, hello! world? hello."));
