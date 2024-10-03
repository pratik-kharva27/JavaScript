//  check if a string is a palindrome

palindrom = () => {
  let str = prompt("enter a string");
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return document.write("true this is palindrom");
  } else {
    return document.write("false this is palindrom");
  }
};
// palindrom();


//  count vowels in a string

vowel = () => {
  let str = prompt(" enter a string ");
  document.write(" enter string is = " + str + '<br>');
  const vow = "aeiouAEIOU";
  let count = 0;
  let result = " ";
  for (let i = 0; i < str.length; i++) {
    if (vow.includes(str[i])) {
         count++;
         result += str[i] + " ";
    }
  }
  return document.write( " result in string = " + result + '<br>' + " vowel count = " + count );
};
// vowel();

// find longest word in to string.

longest_word = () => {
    let str = prompt(" enter a string ");
    document.write( "sentance is :- " + str + '<br>');
    let words = str.split(" ");
    let max = 0;
    let result = " ";
    for(let i =0; i< words.length; i++){
      if(words[i].length > max){
        max = words[i].length;
        result = words[i];
      }
    }
  return document.write( "max length is = " + max + " and result is = " + result );
}
// longest_word();

// repeat number of time word 

repeat_str = () =>{
  let str = prompt(" Enter a String.. ");
  let num = prompt( " Enter number of repeat.. ")
  if ( num < 0) return num;
  return document.write(str.repeat(num));

  // for (let i = 0; i<num; i++){
  //    document.write(str + '<br>');  
  // }

}
// repeat_str()


// first character capital 

capital_first_char = () =>{
  let arr = ["sparrow", "pratik", "rock", "technology"];
  let result = [];
  for (let i = 0; i< arr.length; i++){
    let capital = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    result.push(capital);
  }
  return console.log(result);
}
// capital_first_char();

// capital first latter word 

capital_word = () =>{
  // let str = prompt ( " Enter a String ");
  let str = " hello sparrow how are you ";
  console.log( str.split(" ").map( word =>
    word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  }
// capital_word();


// find duplicate number 

duplicat_num = () =>{
  let arr = [1,2,3,4,1,5,2,6,7,1,2];
  let occurrence = {}
  let unique = []
  console.log(... new Set(arr));
}
// duplicat_num();








