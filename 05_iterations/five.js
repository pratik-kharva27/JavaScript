const coding = ["js", "cpp", "rb", "swift"];
// for each loop not retrun any value


// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((val) =>{
// console.log(val);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item, index, arraylist)=>{
//     console.log(item, index, arraylist);
// })

const mycoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

mycoding.forEach((item,index)=>{
console.log(`index is ${index} languange ${item.languageName} short name ${item.languageFileName}`);

})