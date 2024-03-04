// Arrays

const  myArr = [1,2,3,4,5]
const myhero = ['sparrow','birds']
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
myArr.unshift(9) // add first element 
myArr.shift() //remove first element 
console.log(myArr);
console.log(myArr2.includes(3)); // return true 
console.log(myArr2.includes(6)); // return false 
console.log(myArr2.indexOf(3)); // return index number 

const newArr = myArr2.join()

console.log(typeof myArr2);
console.log(typeof newArr);

// slice and splice 

console.log("A", myArr);
const myn1  = myArr.slice(1,3) //no change in to orignal array and not take first and last element of array 
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1,3) // change in orignal array and  not take first element but take last element of array 
console.log(myn2);

console.log("c",myArr);





