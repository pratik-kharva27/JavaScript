// // single turn and constructor 
// const tinderuser = new Object()
//      tinderuser.id = "1234"
//      tinderuser.name = "sparrow"
//      tinderuser.isLoggedIn = false

//     //  console.log(tinderuser);

// const regularUser = {
//     email: "sparrow@gmail.com",
//     fullname : {
//         userfullName:{
//             firstName : "sparrow",
//             lastName : "bird"
//         }
//     }
// }
// // console.log(regularUser.fullname.userfullName.firstName);

// const obj1= {1:"a",2:"b"}
// const obj2= {3:"c",4:"d"}
// const obj4= {5:"e",6:"f"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({},obj1,obj2,obj3)
// const obj3  = {...obj1, ...obj2}

// // console.log(obj3);
// const users = [

//     {
        
//         id :  1,
//         email : "s@gmail.com"
//     },
//     {
//         id :  1,
//         email : "s@gmail.com"
//     },
//     {
//         id :  1,
//         email : "s@gmail.com"
//     },
//     {
//         id :  1,
//         email : "s@gmail.com"
//     }
// ]
// users[1].email

// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); //display only keys 
// console.log(Object.values(tinderuser)); //display only value 
// console.log(Object.entries(tinderuser)); //convert in to array individual  
// console.log(tinderuser.hasOwnProperty('isLoggedIn')); // find property 


//Object destructuring 

const course = {
    courseName:"js",
    price: "999",
    courseInstructor:"sparrow"
};
let {courseInstructor: instructor} = course;

// console.log(course.courseInstructor);
// console.log(courseInstructor);
// console.log(instructor);

// API
//JSON FILE  
// this is only for understanding 

// {
//     "name" : "sparrow",
//     "courseName" :"js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]








