// how to check if word is palindrome
// 1. reverse the string then check the original string

const palindrome = (str) => {
    const isPalindrome = str.split("").reverse().join('')
    console.log(str === isPalindrome);
}

palindrome("apple");
palindrome("racecar");