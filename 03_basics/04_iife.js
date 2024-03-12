// immediately invoked function expressions (IIFE)

// ()() //execution  and remove global scop variable polution 

//we use  ';' for end IIFE function without ';' next function not execute give error 

(function func (){  //nemed IIFE
    console.log("sparrow with IIFE function ");
    console.log(`hello sparrow`);
})();


( () => {  //UNnemed IIFE
    console.log("hello sparrow with arrow function ");
})();

( (name)=>{ //With argument
    console.log(`hello sparrow with ${name} ` );
})('argument ')