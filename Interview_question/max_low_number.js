const arr = [6,7,8,4,5,9,3,2,1,0];
const max = (arr)=>{
    let max = arr[0];
    let low = arr[0];
    for(let x of arr){
        if(x >= max) max = x; // this is find for max value in arr
        // if(x <= low) low = x; // this is find for low value in arr
    }
    return max;
}
console.log(max(arr));