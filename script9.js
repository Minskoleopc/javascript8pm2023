//               0          1        2       3       4 

let  names = ["chinnmay","sarika","poorva","sham","ramesh"]
console.log(names[0])

// retrive 
console.log(names[0])
// add 
names.push("ganesh")
names.unshift('tavish')
// update 
names[0] = "tanmay"
// delete
names.pop()
names.shift()


// length 
//              0          1          2        3
let cities = ["mumbai","banglore","chennai","wardha"]
let q1 = cities.length
console.log(q1)
console.log(cities[0])

for(let  i = 0 ; i <= cities.length; i++){
    //console.log(i)
    console.log(cities[i])
}

// i - 0
// i - 1
// i - 2
// i - 3

for(let i = 3  ; i >= 0  ; i --){
    //console.log(i)
    console.log(cities[3])
}


// program 2 
//               0       1       2         3
let flowers = ["lily","rose","jasmine","marrygold"]

let s1 = 0
while(s1 < flowers.length){
    //console.log(s1)
    console.log(flowers[s1])
    s1++
}

let s2 = flowers.length -1 
while(s2 >= 0){
    console.log(flowers[s2])
    s2 --
}


// Methods  

// Gym 
// action ---- execise 
// return health 

// method - push 
// action - add the element to last 
// return - lenght of array

//              0        1       2        3
let fruits = ["apple","mango","banana","chikoo"]
let q11 = fruits.push("papaya")
console.log(fruits)
console.log(q11)


// method - unshift()
// action- add the element at start of array
// return - new lenght of array 

let animals = ["tiger","lion","rabbit"]
let q12 = animals.unshift('dogs')
console.log(q12)
console.log(animals)


// pop()
// action - remove the last element 
// return - the last element 

let countries = ["india","pakistan","bangladesh",'srilanka']
let q13 = countries.pop()
console.log(q13)
console.log(countries)

let q14 = countries.shift()
console.log(q14)
console.log(countries)

// push() , pop(), shift(), unshift()

// includes()
// search for the element '
// return if found true else will return false

let cities2  = ["mumbai","banglore","kolkata","chennai"]
let q15 = cities2.includes('mumbai')
console.log(q15)
