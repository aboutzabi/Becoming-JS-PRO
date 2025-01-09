// 1. Reverse a String
// Problem: Write a function that takes a string as input and returns the string reversed.
// Example:
// Input: "hello"
// Output: "olleh"

// function reverseString(str) {
//   // Your code here
// }

const reverseString = (str) => {
  return typeof str !== "string" || str === null
    ? "Input must be a string"
    : str.trim().split("").reverse().join("");
};

console.log(reverseString(2));
console.log(reverseString("helooo "));
console.log(reverseString("    helloo"));
console.log(reverseString(null));
console.log(reverseString(undefined));

