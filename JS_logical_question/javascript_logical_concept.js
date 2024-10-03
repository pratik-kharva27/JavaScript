// JavaScript 
//  note(var, let, const, Operators, String Methods, Array Methods, Hoisting(important),
// This keyword)
// 1. JS versions 
// 	JS 2015(ES6)
// 	Objects
// 2. JS Async (IMPORTANT)
// 	-callbacks
// 	-Asynchronous
// 	-promises
// 	-Async/Await
// 3. JS Dom
// 	Basic
// 4. JS Bom
// 	Basic
// 5. JS APIS 
// 	-just INTRO 
// 	-fetch API
// 6. JS JSON
// 	Basic

// console.log(NaN===NaN); // false
// console.log(!!false); // false
// console.log(!!"sparrow"); // true
// console.log(!!""); // false 
// console.log(!""); // true 
// console.log("" == false) // true note:- and only empty string -> false 
// console.log(typeof(null)); // Object 
// console.log(typeof []); // Object
// console.log(typeof(Infinity)); // number
// console.log(typeof NaN); // number
// console.log(typeof(Object)); // function
// console.log(typeof(typeof(10))); // string
// console.log(1+[1,2]+[3,4]); // 11,23,4
// console.log(2+[2]+({}+[])); // 22[Object Object]
// console.log(Number.MAX_VALUE+1 === Number.MAX_VALUE); // true

// console.log(1/0 === Infinity); // true
// console.log(1/-0 === -Infinity); // true
// console.log(Number.MIN_VALUE > 0); // true
// console.log([...'hello']); // [ 'h', 'e', 'l', 'l', 'o' ]
// console.log((function(){ return [this];})()); // [Window{...}]
// console.log((function(){ return typeof arguments;})()); // Object
// console.log(10 > 9 == 9 > 8); // true
// console.log(10 > 9 > 8); //false
// console.log("1" - - "1"); // 2
// console.log( 10 % 3); // 1
// console.log(parseFloat("123.45Hello")); // 123.45
// console.log(parseInt("123Hello")); // 123
// console.log("5" + null); // 5null
// console.log(5 * null); // 0
// console.log("A" - "B" - "C"); // NaN
// console.log((function f() {}).name); // f
// console.log(Function instanceof RegExp); // false
// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true
// console.log(typeof(function(){})); // function
// console.log('banana' > 'Banana'); // ture
// console.log('' === '0'); // false
// console.log(0 === ''); // false
// console.log(0 === '0'); // false
// console.log( 2 ** 3 ** 2) // 512
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(true + true) // 2
// console.log( true + true + true * 3) // 5
// console.log(4 + 5 + "px"); // 9px
// console.log(1 + '1' - 1); // 10
// console.log({} + []); // "[Object Object]"
// console.log(+ '2' - +'1'); // 1
// console.log(1 + - '1' + +"1"); // 1
// console.log([] + []); // ""
// console.log(1<2<3); // true
// console.log([] == ![]); // true
// console.log(5+ "3"); // 53
// console.log("hello".toLocaleUpperCase()); // HELLO
// console.log(typeof [1,2,3]); // Object
// console.log( 0 == false); // true
// console.log( 3 === 3); // true
// console.log(4 ** 0.5); // 2
// console.log('hello'.length); // 5
// console.log(null == undefined); // true
// console.error(" this is an error message"); // print error message into console 
// console.log("I want baby"[0]); // I
// console.log("5"-3); // 2
// console.log("5"+3); // 53
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// "12" convert in to number use just "+" sign befor string like +"12" in browser console  
// console.log(1<2<3); // true
// console.log(3>2>1); // false

// -------------------------------------------------------------

// console.clear() // clear all console's history

// -------------------------------------------------------------

// let p;
// console.log(p); // undefined

// -------------------------------------------------------------

// let x = [1,2,3].push(4)
// console.log(x); // 4
// console.log(x.push(5)); // error

// -------------------------------------------------------------

// function sum (num1, num2 = num1){
//     console.log(num1 + num2);
// }
// sum(10); // answer 20

// -------------------------------------------------------------

// let newlist = [1,2,3];
// let a = newlist.push(4);
// console.log(a); // answer 4

// -------------------------------------------------------------

// const myName = "ronak";
// if(myName == "ronak"){
//     myName = "cyra";
// }
// console.log(myName); //  answer error

// -------------------------------------------------------------

// function sayHi(name){
//     return `Hi there, ${name}`;
// }
// console.log(sayHi()); // answer Hi there, undefined

// -------------------------------------------------------------

// let baby = {name:"senorita",};
// Object.freeze(baby);
// baby.makeup = true;
// console.log(baby); // answer {name: 'senorita'}
 
// -------------------------------------------------------------

// const [y] = numbers;
// console.log(y); // answer 1

// -------------------------------------------------------------

// function sayHi(){return (()=>0)();}
// console.log(typeof sayHi()); //  answer number

// -------------------------------------------------------------

// for(let i = 1; i<5; i++){
//     if(i === 3) continue;
//     console.log(i); // answer 1,2,4
// }

// -------------------------------------------------------------

// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three'
// };
// console.log(obj); // answer {a: 'three', b: 'two'}

// -------------------------------------------------------------

// let number = 0;
// console.log(number++); // answer 0
// console.log(++number); // answer 2
// console.log(number); // answer 2

// -------------------------------------------------------------

// function sum(a, b){return a+b;}
// console.log(sum(1,'2')); // answer 12

// -------------------------------------------------------------

// Everything in javaScript is either a...? //  answer primitive or Object

// -------------------------------------------------------------

// var x = 10;
// function hey (){
//     console.log(x); // answer undefined
//     var x = 20;
// }
// hey()

// -------------------------------------------------------------

// program to generate fibonacci series up to n terms

// -------------------------------------------------------------

// let count = 0;
// function incre (){
//     console.log(count,"sparrow"); // answer 0
//     count ++
//     console.log(count,"hitesh"); // answer 1
// }
// function getCount (){
//     console.log(count,"pratik"); // answer 2 
//     return count;
// }
// const incrementCount = incre;
// incrementCount(); // answer 1
// incrementCount(); // answer 2
// console.log(getCount()); // answer 2

// -------------------------------------------------------------

// const person ={
//     name : "sparrow",
//     age : 23,
//   };
//   const student ={
//     id : 1,
//     gpa : 3.5,
//   };
  
//   Object.setPrototypeOf(student, person);
//   console.log(student.name); // answer = sparrow

// -------------------------------------------------------------

// const arr = ["name","hey"];
// const obj = {};

// console.log(arr.name); // undefined 

// obj.name = "sparrow";
// console.log(obj); // key=name and value=sparrow
// console.log(obj.name);// sparrow

// obj[arr] = "react";
// obj.hey = "react";
// console.log(obj.hey); // react 

// -------------------------------------------------------------
// const arr = [1,[2,[3,[4]],5]]
// console.log(arr.flat(1)) // [1,2[3,[4]],5]

// -------------------------------------------------------------

// // concept of closer 
// function add (a){
//     return function (b){
//         return function  (c){
//             return a+b+c;
//         }
//     }
// }
// let res = add(2);
// let data = res(3);
// let data1 = data(5);
// console.log(data1); // output 10

// -------------------------------------------------------------
// concept of currying function in javascript

// function addtions (a){
//     return function (b){
//         return function  (c){
//             return a+b+c;
//         }
//     }
// }
// let result = addtions(2)(3)(5);
// console.log(result);
// console.log(addtions(2)(3)(5)); // output 10

// -------------------------------------------------------------
// real life example of currying function in javascript

// userobj = {
//     name : "sparrow",
//     age : 25
// }

// function userinfo ( obj){
//     return function (userinfo) {
//         return obj [ userinfo];
//     }
// }
// let result = userinfo(userobj);

// console.log(result("name")); // output sparrow
// console.log(result("age")); // output age 

// -------------------------------------------------------------
// interview questions
// var length = 10;
// function fn(){
//     console.log(this.length);
// }
// var obj = {
//     length : 5,
//     method : function(fn){
//         fn();
//         arguments[0]();
//     }
// };
// obj.method(fn,1);
// obj.method(fn,1,2);

// -------------------------------------------------------------
// interview questions
// (function(){
//     console.log(1);
//     setTimeout(function(){console.log(2)},1000);
//     setTimeout(function(){console.log(3)},0);
//     setTimeout((function(){console.log(5)})(),0);
//     console.log(4);
// })();




