const score = 400 // default number 
console.log(score);

const balance = new Number(400)//explicitly pass number 
console.log(balance);

const balance1 = balance.toString()// type casting in to number to string 
console.log(typeof balance1);

const x = 100
console.log(x.toFixed(2));

const y = 1000000
console.log(y.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.abs(-4)); //negative to positive convert
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.random());
let dome = Math.random()*100
console.log(Math.random()*100);
console.log(dome.toFixed(2));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*( max-min + 1))+ min );