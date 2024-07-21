/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str =  str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  let output  = str.split('').reverse().join("");
  console.log(output)
  if (str === output)
    return true;
  else
    return false
}

console.log(isPalindrome("Eva, can I see bees in a cave?"))
module.exports = isPalindrome;
