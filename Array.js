
// Array
//             0         1      2       3
let names = ["sarika","satish","ram","sham"]

// retrive
console.log(names[0])
console.log(names[1])

// looping over array
//              0        1        2         3
let cities = ["pune","mumbai","banglore","kolkata"]
console.log(cities.length)
console.log(cities.length -1)

// Array stores the value by index
// length - 1 is always lastIndex

//                 0        1           2            3
let countries = ["India","Pakistan","Srilanka","Bangladesh"]

// for loop 


for(let i = 0 ; i < countries.length ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(countries[i])
}

// i = 0 
// i = 1
// i = 2
// i = 3

//               0        1        2        3
let flowers = ["lily","jasminse",'rose',"sunflower"]

for(let i = flowers.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(flowers[i])
}


// while loop
//               0       1        2        3
let fruits  = ["apple",'mango',"banana","grapes"]

let i1 = 0

while(i1 < fruits.length){
    //console.log(i1)
    console.log(fruits[i1])
    i1 ++
}


// Object ---->  properties and methods 


let animals = ['tiger','lion','rabbit',"snake"]
let q1 = animals.length
console.log(q1)

animals = ['tiger','lion','rabbit',"snake"]
// push()
let q2 = animals.push('frog')
console.log(animals)
console.log(q2)

// unshift()
let q3 = animals.unshift('bear')
console.log(animals)
console.log(q3)
// pop()
// [ 'bear', 'tiger', 'lion', 'rabbit', 'snake', 'frog' ]

let q4 = animals.pop()
console.log(q4)
console.log(animals)

// shift()
let q5 = animals.shift()
console.log(q5)
console.log(animals)

// includes()
//                  0           1       2       3
let district = ["chandrapur","nagpur","delhi","gaya"]
let q6 = district.includes('nagpur')
console.log(q6)

// indexOf()
let q7 = district.indexOf("nagpur")
console.log(q7)

let q8 = district.indexOf('pune')
console.log(q8)

















