// program 1

// map()
//                0    1    2     3
let birthYear = [1989,1990,1991,1992]
// [34,33,32,31]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)


let numbers = [11,22,33,44,55,66,77]
let q2 = numbers.map(function(el){
    return el + 5
})
console.log(q2)


// filter()

let marks = [22,33,44,11,23,44,55,66,22,44,55,66,77]
let q3 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q3)

let transactions = [11,22,-55,-66,-77,88,99,-55,-44]
let q4 = transactions.filter(function(el){
    return el < 0 
})
console.log(q4)


// program 3 
let total = [11,22,33]
let q5 = total.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(q5)


// program 4 
let cites = ["pune","mumbai","banglore","kolkata"]

cites.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5 

// find()

//             0  1  2  3  4  5  6  7
let numberB = [11,22,33,44,55,33,66,77]
let q6 = numberB.filter(function(el){
    return el % 2 == 0
})

console.log(q6)

let q7 = numberB.find(function(el){
    return el % 2 == 0
})
console.log(q7)

// findIndex()
let q8 = numberB.findIndex(function(el){
    return el % 2 == 0
})
console.log(q8)

// every()

let marksB  = [11,22,33,44,22,33,44,55,7]
let q9 = marksB.every(function(el){
    return el > 10
})
console.log(q9)

// some()

let q10 = marksB.some(function(el){
    return el > 1000
})
console.log(q10)


// map() ----(el,index,arr)
// filter()  ---->  (el,index,arr)
// reduce()   ----> (acc,el, index,arr)
// forEach()  -- (el,index,arr)
// find()  -- (el,index,arr)
// findIndex()  -- (el,index,arr)
// some()  -- (el,index,arr)
// every()  -- (el,index,arr)