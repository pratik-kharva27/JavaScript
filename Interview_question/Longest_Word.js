// find the longest word in a string


function findLongestWord(str){
    const words = str.split(' ');
    let longest = 0;
    for(let word of words){
        if(word.length > longest){
            longest = word.length;
        }
    }
    return longest;
}

console.log(findLongestWord("hello sparrow how are you"));