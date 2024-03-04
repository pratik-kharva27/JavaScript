// singleton 
// object.create 

//object literals

const mysymbole = Symbol("key1")

const jsuser = {
    name : "sparrow",
    "full name" : "sparrow pratik",
    [mysymbole]:"mykey1",
    age : 20,
    location : "sky world",
    email : "sparrow@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsuser.email); //object access way1
// console.log(jsuser.full name); //through error
// console.log(jsuser["full name"]); //object access way2
// console.log(typeof jsuser[mysymbole]);

jsuser.email = "pratik@gmail.com" // chnage object value 
// Object.freeze(jsuser) // using freeze lock object value 
jsuser.email="pratik@microsoft.com" //after freeze we can not change value 
// console.log(jsuser);

jsuser.greeting = function (){
    console.log("hello sparrow");
}

jsuser.greetingTow = function (){
    console.log(`hello sparrow , ${this["full name"]}`);
}
console.log(jsuser.greeting);//function not exicute just reference 
console.log(jsuser.greeting());
console.log(jsuser.greetingTow());