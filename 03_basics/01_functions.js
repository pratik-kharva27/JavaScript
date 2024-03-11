// function sayMyName() {
//   console.log("s");
//   console.log("p");
//   console.log("r");
//   console.log("r");
//   console.log("o");
//   console.log("w");
// }
// sayMyName();

// function addTwoNumber (num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumber(5,4)


// function sum(num1, num2){
//     return num1 + num2;
// }
// const result = sum(2,3)
// console.log("result is ",result);


function sum(num1, num2){
    let result = num1 + num2
    return result ;
}
const result = sum(2,3)
// console.log("result is ",result);


function loginUserMessage(username = "pratik"){
    if(username === "" || username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log( loginUserMessage("sparrow"));