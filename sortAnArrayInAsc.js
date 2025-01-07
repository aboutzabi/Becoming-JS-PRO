// ----------------------------------
// Programing Question: Sort AN Array
// ----------------------------------

// Write a function that Sort an Array in Ascending Order.

// The function take an array as a input.
// The function should return a new array in ascending order of input.
// The original array should remian unchanged.
// Built-in sort function is not Allowed!!!!

const sortArr = (arr) => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {

        if (newArr[j] > newArr[j + 1]) {
            // If the condition is true
            // then swap them
            
            var temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
          }
    }
  }
  return newArr
};
console.log(sortArr([32213, 3446, 166, 9322, 4566, 222]));
