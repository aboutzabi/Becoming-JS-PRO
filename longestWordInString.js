// ----------------------------------------------
// Programming Question: Longest Word in a string
// ----------------------------------------------

// Write a function findLongestWord that takes a string as input and returns the 
// longest word in the string. if there are multiples longest words, return the firs one encountered.

// If the input string is empty or only contain whitespace, the function should return as false.
// The function should ingnore the leading and trailing whitespce when determing the longest word.


const findLongestWord = (str) => {
    if(str.trim().length === 0) {
        return false;
    }
    const word = str.trim().split(" ");
    
    return word.reduce(
        (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
        ""
    );
}

console.log(
    findLongestWord("Code challenges are fun!")
);
