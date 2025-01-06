// ------------------
// Interview Question
// ------------------

// Write a function checkTriangleType that takes three Parameters, representing
// the lenght of the Side of the triangle. The function should return a string
// indicating the type of the triangle: "equilateral", "isosceles" or "scalene"

// !!!!!!!!!!!!!!!!!!!!!!!!!
// If all three side of lenght is equal the function should return "Equilateral",
// if two side equal it should retunr "isosceles" and if non equall it should return
// "scalene"

const checkTriangleType = (a, b, c) => {
  if (a === b && a === c) return "Equilateral";
  else if (a === b || a === c || b == c) return "isosceles";
  else return "scalene";
};

console.log(checkTriangleType(2, 5, 3));
