const name = "sparrow"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("sparrow-pratik")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);   
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,4)); //not allowed -0 value negative value 
// console.log(gameName.slice(-15,4)); not understand properly 

let test = " sparrow "
console.log(test);
console.log(test.trim()); //trimStart, trimEnd also use 

let url = "https://sparrow.com/sparrow%20pratik"
console.log(url);
console.log(url.replace('%20','-'));

console.log(url.includes('sparrow'));
console.log(url.includes('ronak'));

console.log(gameName.split("-"));
