const arr = [6, 7, 8, 4, 5, 9, 3, 2, 1, 0];

const result = (arr)=>{

    for(let i =0; i<arr.length; i++){
        for(let j =0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                //swap 
                arr[j]= arr[j] + arr[j+1];
                arr[j+1] = arr[j] - arr[j+1];
                arr[j] = arr[j] - arr[j+1];
            }
        }

    }

    return arr;
}
console.log(result(arr),"this is result");

