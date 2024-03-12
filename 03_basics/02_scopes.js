// {} this is scope

//global scope
var c = 300 
let a = 300

if (true) { //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("inner: ",a);
  function add (){
    
  }
}

// console.log(a);
// console.log(b);
// console.log(c);


// closer  = inner function access outer variable but outer function not access inner variable 

// function one(){
//   const username = "sparrow"
//   function tow(){
//     const website = "youtube"
//     console.log(username);
//   }
//   tow()
// }
// one()


if(true){
  const username = "sparrow"
  if(username  === "sparrow"){
    const website = "youtube"
    // console.log( username + website); //display 
  }
  // console.log(website); // this statement is not display only for understading  
}
// console.log(username); // this statement is not display only for understading 


// ++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++

// this function run normal and display value because function declar not assign 
// console.log( addone(5)); // execute 
function addone (num){
  return num + 1
}



//Hoisting concept befor declar function it's not use 
// this function not run because function assign in variable 
// console.log( addtwo(5));  //execute  
const addtwo = function (num){
  return num + 2;
}
