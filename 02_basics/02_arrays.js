const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros) //merge to array using concat function
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros] //merge to array like concat function sprad operator 
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = another_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("sparrow"));
console.log(Array.from("sparrow")); 
console.log(Array.from({name: "sparrow"})); //interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));