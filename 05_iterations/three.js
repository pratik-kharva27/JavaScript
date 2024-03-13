// for of


// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]
for (const num of arr){
    // console.log(num);
}

const greeting = "hello sparrow"

for (const greet of greeting){
    // console.log(greet);
}

// Maps
//maps use for finding unique data and not display duplicat data 
//maps is not iterable

const map = new Map()
map.set('SP', "sparrow")
map.set('pk','pratik kharva')
map.set('rk', 'ronak kharva')
map.set('pk', 'pratik kharva')
for (const [key, value] of map){
    console.log(key,':', value);
}


// not working different way to execute 
const myobj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
for(const y of myobj){
    console.log(y);
}

// not use 
for (const key in map) {
    console.log(`${map[key]}`);
}