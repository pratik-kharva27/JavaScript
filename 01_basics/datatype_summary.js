//primitive
// types : string, number, undefined, Boolean, null, symbols, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);  
// id and anotherId both are not same 

const BigNumber = 1234323417346716346183467364n //denote is BigInt


//reference 
//types : Array, Objects, Function

const heros = ['harry','sparrow','pratik'];

let myObj ={
    name : "sparrow",
    age: 19
}

const myfunction = function (){
    // console.log("hello sparrow");
}


console.log(typeof outsideTemp);


