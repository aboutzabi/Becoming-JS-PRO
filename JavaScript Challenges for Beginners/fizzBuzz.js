// 2. FizzBuzz
// Problem: Write a program that prints numbers from 1 to 50.
// For multiples of 3, print "Fizz", for multiples of 5, print "Buzz",
// and for multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// function fizzBuzz() {
//   // Your code here
// }

const fizzBuzz = () => {
  let arr = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzz());
