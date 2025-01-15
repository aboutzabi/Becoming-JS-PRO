// 5. Flatten a Nested Array
// Problem: Write a function that flattens a nested array to a single-level array using recursion.
// Example:
// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]

// function flattenArray(arr) {
//   // Your code here
// }

const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(flattenArray([1, [2, [3, [45]], 5]]));
