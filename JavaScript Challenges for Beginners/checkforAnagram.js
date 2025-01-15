// 3. Check for Anagram
// Problem: Write a function that checks if two strings are anagrams (contain the same characters in a different order).
// Example:
// Input: "listen", "silent"
// Output: true

// function checkAnagram(str1, str2) {
//   // Your code here
// }

const checkAnagram = (str1, str2) => {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("hello", "world"));
