function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("abcba"));
console.log("=============================================");

function isPalindromeRecursive(str: string): boolean {
  if (str[0] !== str[str.length - 1]) return false;

  if (str.length <= 1) return true;

  return isPalindromeRecursive(str.slice(1, -1));
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("abcba"));
console.log(isPalindrome("소주만병만주소"));
