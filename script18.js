
// map and object 

// maps keys can be any data type 
// object keys are string only 

let mapA = new Map()
let mapB = new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"support"]
    ]
)
console.log(mapA)
console.log(mapB)

// Object ---- propeties and methods 
let skills = ["python","js","sql","css","html"] 
let info = {first_name:"chinmay deshpabde","rollNo":123}
let mapC = new Map([
    ["fullName","chinmaydeshpande"],
    ["age",23],
    [true,"canDrive"],
    [1,"admin"],
    [skills,"pass"],
    [info , "information"]
])
console.log(mapC)
console.log(mapC.size)
console.log(mapC.has(true))
mapC.delete("age")
console.log(mapC)
console.log(mapC.get(1))
//mapC.clear()
console.log(mapC)
mapC.forEach(function(v,k){
    console.log(v,k)
})
for(let key of mapC.keys()){
    console.log(key)
}
for(let values of mapC.values()){
    console.log(values)
}
for(let [k,v] of mapC.entries()){
    console.log(k,v)
}

// Set()
let numbers = new Set()
console.log(numbers)

let setB = new Set([11,22,33,44,22,33,44])
console.log(setB)

console.log(setB.size)
setB.add(555)
console.log(setB)

console.log(setB.has(555))
//setB.clear()
console.log(setB)

setB.delete(555)
console.log(setB)

setB.forEach(function(el){
    console.log(el)
})

console.log(setB.keys())


// let setC = new Set(
//     [
//         new Map([[1,"admin"],[2,"support"]]),
//         new Map([[3,"manager"],[4,"L1"]])
//     ]

// )
// for(let key of setC.keys()){
//     console.log(key)
// }
// for(let value of setC.values()){
//     console.log(value)
// }

// for(let [k,v] of setB.entries()){
//     console.log(k,v)
// }



// class Person {

//     constructor(fn,ln){
//         this.first_name = fn 
//         this.last_name = ln
//     }

// }

