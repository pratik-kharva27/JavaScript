const arr = [6,7,8,4,5,9,3,2,1,0];

const insertion = (arr) =>{

    for(let i = 0; i<arr.length; i++){
        let j = i; 
        while(j>0 && arr[j-1] > arr[j]){
            arr[j-1] = arr[j-1] + arr[j];
            arr[j] = arr[j-1] - arr[j];
            arr[j-1] = arr[j-1] - arr[j];
            j--;
        }
    }
    return arr;
}
    console.log(insertion(arr))

