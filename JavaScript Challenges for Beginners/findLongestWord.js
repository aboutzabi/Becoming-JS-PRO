// // Problem: Find the longest word in a string.
// // Example:
// // Input: "The quick brown fox"
// // Output: "quick"

// Limits and Edge Cases:

// Handle ties (return the first longest word).
// Ignore punctuation.
// Use Cases:

// Parsing and analyzing text.

const findLongestWord = (str) => {
  return str
    .trim()
    .replace(/[^A-za-z0-9\s]/g, "")
    .split(" ")
    .reduce((accum, curValue) =>
      curValue.length > accum.length ? (accum = curValue) : accum
    );
};

console.log(findLongestWord("The quick! brown fox")); // "quick
console.log(findLongestWord("The quick! brown N@ewwer @fox")); // "quick"


