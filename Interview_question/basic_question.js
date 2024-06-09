// 1. Convert Object to Array of [key, value] pairs

function ObjectToPairs(obj){
    return Object.entries(obj);
}
console.log(ObjectToPairs({
    a : 1,
    b : 2,
    c : 3
}));  // output [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 2. Get All Methods of an Object

function getMethods(obj){
    return Object.keys(obj).filter(key => typeof obj[key] === 'function');
}

const obj = {
    a : 1,
    b : 2,
    foo() {return 'foo';},
    bar() {return 'bar';}
};

console.log(getMethods(obj)); // output[ 'foo', 'bar' ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Check if an Object has a property

function hasProperty(obj, key){
    return obj.hasOwnProperty(key);
}
console.log(hasProperty({
    a : 1,
    b : 2},
    'a'
)); // output true

console.log(hasProperty({
    a : 1,
    b : 2},
    'c'
)); // output false


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Get keys and values as separate arrays

function countProperties(obj){
    return Object.keys(obj).length;
}
console.log(countProperties({ a : 1, b : 2, c : 3})); // output 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 05. Count Properties in an Object

function countProperties(obj){
    return Object.keys(obj).length
}
console.log(countProperties({ a : 1, b : 2, c : 3})); // output 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 6. Deep clone an Object ( Deep Clone )

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const orignal = { a : 1, b: {c : 2}};
const copy = deepClone(orignal)

console.log(copy); // output { a: 1, b: { c: 2 } }

console.log(copy.b === orignal.b); // output false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 7. clone an object ( shallow copy )

function cloneObject(obj){
    return { ...obj };
}
const original = { a : 1, b : 2};
const copy1 = cloneObject(original);

console.log(copy1); // output { a: 1, b: 2 }
console.log(copy === original); // output false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 8. merge tow object 

function mergeObject(obj1, obj2){
    return{ ...obj1, ...obj2};
}
console.log(mergeObject({a:1, b:2}, {b:3, c:4})); // output { a: 1, b: 3, c: 4 }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 9. check if an object empty

function isEmpty(obj){
    return Object.keys(obj).length === 0;    
}
console.log(isEmpty({})); // output true
console.log(isEmpty({a:1})); // output false
