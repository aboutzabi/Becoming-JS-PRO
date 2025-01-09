// write a function findMax that takes an array of numbers as an input
// and retrun the max number in the array

const findMax = (arr) => {
  return arr.reduce((accum, curValue) =>
    curValue > accum ? (accum = curValue) : accum
  );
  //   return Math.max(...arr)
};

console.log(findMax([-7, -1, -2, -4, -8, -99, 2]));
