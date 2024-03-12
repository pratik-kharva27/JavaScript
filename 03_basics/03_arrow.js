// const user = {
//     username : "sparrow",
//     price : 99,
//     welcomeMessage : function (){
//         console.log(`${ this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()

// console.log(user.username);
// console.log(user.welcomeMessage());
// user.username = "pratik"
// console.log(user.welcomeMessage());
// console.log(this); //reefer empty object 


// //function one
// function coffe (){
//     let username = "sparrow"
//     console.log(this.username); // we not use this keyword in function only use in object 
// }

// //function two 
// const coffe = function () {
//     let username = "sparrow"
//     console.log(this.username);// we not use this keyword in function only use in object
// }


// //function three 
// const coffe =  () => {
//     let username = "sparrow"
//     console.log(this.username);// we not use this keyword in function only use in object
// }
// coffe()


// const addtwo = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log(addtwo(5,4));

// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(5,4));

// const addTwo = (num1, num2) => ({username: "sparrow"})
// console.log(addTwo(5,4));

// const myArray  = [1,2,3,4,5,6]
// myArray.forEach( ()=> { })