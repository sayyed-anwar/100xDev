/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let normalizedString = str.toLowerCase();
  let reversedString = normalizedString.split("").reverse().join("");

  if (reversedString === normalizedString) return true;
  else return false;
}

// Test cases
console.log(isPalindrome("Nan"));       // Output: true
console.log(isPalindrome("Racecar"));   // Output: true
console.log(isPalindrome("Hello"));     // Output: false
console.log(isPalindrome("Madam"));     // Output: true
console.log(isPalindrome(""));          // Output: true (An empty string is considered a palindrome)
console.log(isPalindrome("12321"));     // Output: true
console.log(isPalindrome("12345"));     // Output: false
