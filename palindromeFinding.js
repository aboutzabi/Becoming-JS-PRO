// Write a Function to determine weather a given string is
// Paindrome or not. A Palindrome is word, phrase, or other
// sequence of characters that reads the same farword and backword,
// ignoring spaces, pucntuation and Capitalization.

const palindrome = (str) => {
  farStr = str.replace(/[^A-Za-z]/g, "");
  farStr = farStr.toLowerCase();
  bacStr = farStr.split("").reverse().join("");

  return farStr === bacStr ? true : false;
};

console.log(
  palindrome("A man, a plan, A Canal, Panama ")
  // palindrome("A man, a plan, A Canal, Panamafheuifh3io ")
  //   palindrome("racecar")
);
