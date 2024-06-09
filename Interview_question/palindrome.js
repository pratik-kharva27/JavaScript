// check if a string is a palindrome

function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));