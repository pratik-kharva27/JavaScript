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
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log( loginUserMessage("sparrow"));

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(10));

// function calculateCartPrice(...num1){ //rest operator
//     return num1;
// }
// console.log(calculateCartPrice(10,20,30,40,50));

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(10,20,30,40,50));


const user = {
    userName : "sparrow",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     userName:"pratik",
//     price: 599
// })

const myNewArray = [10,20,30,40,50]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40,50]));