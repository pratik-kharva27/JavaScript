const arr = [1,2,3,4,5,6,7,8,9];

const liner = (arr)=> {
    let search = 9;
    for( let x of arr){
        if(x = search){
            return console.log("this is match ",search);
        }else{
          return console.log("this is  not match");
        }
    }
}
liner(arr);