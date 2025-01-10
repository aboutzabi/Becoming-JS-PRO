// // Problem: Sum of numbers in a range.
// // Example:
// // Input: (1, 5)
// // Output: 15 (1+2+3+4+5)
// Limits and Edge Cases:

// Ensure start <= end.
// Handle large ranges.
// Use Cases:

// Numerical calculations.
const sumInRange = (start, end) => {
  let sum = 0;
  if (start > end) {
    console.log("Starting value must be less than or equal to Ending");
    return;
  } else {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumInRange(23, 51));
