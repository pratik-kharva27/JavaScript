// check if a string is a palindrome

// function isPalindrome(str){
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }


// console.log(isPalindrome("hello"));


const isPalindrome = (str)=> {
    let rev = '';
    for (let i= str.length-1; i>=0; i--){
        rev += str[i];
    }
        if(str == rev){
            return console.log("palindrome");
        }else{
            return console.log("notpalindrome");
        }
}


isPalindrome("racecar")
isPalindrome("hello")