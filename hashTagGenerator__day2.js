// ---------------------------------------
// Programming Question: HashTag Generator
// ---------------------------------------

// you are required to generate a Function generatHash that generate a hashtag from a given String.
// The Hash Tag should be consrtucted as follow:


// The input string sholud be converted to a HashTag format, Where each word is Capitalized and concatenated 
// together without spaces.
// If the length of the input string is greater then 280 Char or the input string is empty or contain 
// only white spaces, the function should be false.
// Otherwise the function should return the generated Hashtag funtion prefixed with #.


const generatHash = (str) => {
    if (str.trim().length === 0 || str.trim().lenght > 280) {
        return false
    }

    str = str.trim();
    str = str.split(" ");
    // hashTag = str.reduce((accum, curWord) => ( accum + curWord[0].toUpperCase() + curWord.slice(1)) , "");
    // return ("#" + hashTag);
    str = str.map((curIndex) => { return curIndex.replace(curIndex[0], curIndex[0].toUpperCase())})
    console.log(str);
    hash = `#${str.join('')}`;
    console.log(hash);
    
    
}

console.log(
    generatHash("Hi my name is zabi")
);

