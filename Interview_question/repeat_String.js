
// Repeat a string a given Number of Times

function repeatString( str, num){
    if(num < 0 ) return '';
    return str.repeat(num);
}

console.log(repeatString("abc",3));