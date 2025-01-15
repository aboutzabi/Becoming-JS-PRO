// // Problem: Find the missing number in an array.
// // Example:
// // Input: [1, 2, 4, 5]
// // Output: 3
// Limits and Edge Cases:

// Handle non-contiguous arrays.
// Handle duplicates gracefully.
// Use Cases:

// Identifying gaps in datasets.
const findMissingNumber = (arr) => {
    const unique = [... new Set(arr)]
    console.log(unique);
    
    for (let i=0; i<unique.length -1; i++) {
        if(unique[i] !== unique[i+1]-1) {
            console.log(unique[i]+1);
            
        }
    }
  };
  
  console.log(findMissingNumber([1, 2, 4, 5]));  // 3
  console.log(findMissingNumber([10, 11, 11, 13]))
  