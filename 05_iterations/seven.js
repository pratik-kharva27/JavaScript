const myNums = [1,2,3,4,5,6,7,8,9,10]


//add 10 in ecah value using map 
// const add = myNums.map((num)=> num+10)
// console.log(add);


//  //same example using foreach add 5
//  const arr = []
//  const addFive = myNums.forEach((num)=> {
//     if(num > 0){
//         return arr.push(num + 5)
//     }
// })
// console.log(arr);


const newnumber = myNums.map((num)=> num*10 ).map((num) => num+1 ).filter(( num )=> num >= 40 )
console.log(newnumber);



const fruits = new Map([
    ["apples", 500],
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  fruits.set("kiwi", 200);
  fruits.set("bananas", 200);
  fruits.set("kiwi", 300);

  console.log(fruits)
// for(let a of fruits){
//     console.log(a)
// }

// let a = fruits.map(data => data)
// console.log(a);