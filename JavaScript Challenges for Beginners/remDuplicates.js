// 4. Remove Duplicates from an Array
// Problem: Write a function that takes an array as input and returns a new array with duplicates removed.
// Example:
// Input: [1, 2, 3, 4, 3, 2, 1]
// Output: [1, 2, 3, 4]

// Limits and Edge Cases:

// Preserve the original order.
// Handle arrays with non-numeric elements.
// Use Cases:

// Data sanitization.

// function removeDuplicates(arr) {
//   // Your code here
// }

const removeDuplicates = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(
  removeDuplicates([
    1,
    2,
    2,
    2,
    3,
    5,
    7,
    8,
    8,
    9,
    4,
    2,
    3,
    1,
    3,
    2,
    5,
    5,
    "helooo",
    "heloooo",
  ])
);
