//reduce with array

const myNums = [1, 2, 3, 4, 5];
// const arr = [];
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and curraval : ${currval}`);
//   arr.push(acc + currval);
//   return acc + currval;
// }, 1);
// console.log(arr);

let my_arr
const myTotal = myNums.reduce((acc, current) => {
  my_arr = (acc + current);
  console.log(`acc : ${acc} and current val : ${current} and sum is : ${my_arr}`);
  return acc + current;
}, 1);

console.log(myTotal);

const shoppingCart =[
    {
        item : "py course ",
        price : 999
    },
    {
        item : "js course ",
        price : 2999
    },
    {
        item : "mobile dev course ",
        price : 5999
    },
    {
        item : "data science course ",
        price : 12999
    }
]


const pricetopay = shoppingCart.reduce((acc, item)=>{  
    return acc+item.price

},0)

console.log(pricetopay);


