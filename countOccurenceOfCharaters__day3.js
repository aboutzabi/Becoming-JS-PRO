// ---------------------------------------------------
// Programming Question: Count Occurrences of Charater
// ---------------------------------------------------


// !Task
// Write a function called countChar that takes two parameters: a string and a charater 
// to count. the funcion returns the number of times the specific charater appears in the 
// string.

// The function should be case-sensitive.
// The function can handle both Lowercase and uppercase charaters.
// The charater Parameter can be any Printable ASCII Charater.(The function Should be 
// any Charater that is the part of ASCII set charaters and is printble.).


const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    word = word.split('');
    
    const counter = word.reduce((accum, curValue) => (curValue === char ? accum + 1 : accum), 0);
    return counter
}

console.log(
    countChar("MissISsiPPiI", "i")
);
