/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z]/g, "");

  // for (let i = 0; i < newStr.length / 2; i++) {
  //   if (newStr[i] !== newStr[newStr.length - 1 - i]) {
  //     return false;
  //   } else {
  //     continue;
  //   }
  // }

  let i = 0;
  while (i < newStr.length / 2) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    } else {
      i++;
    }
  }
  return true;
}

module.exports = isPalindrome;
