// js ----- object -------> propeties and methods

// map 

let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    rollNo: 23
}

// object keys or properties are always string 
// map can have any datatype as property
// object and map both stores the item in property-value  / key-value 

// program 1
let mapA = new Map()
console.log(mapA)

// set()
mapA.set(1, 'admin')
mapA.set(2, 'role')
mapA.set(3, 'customer')
mapA.set(4, 'manager')
mapA.set(5, 'support')
console.log(mapA)

// program 2
//size
let q1 = mapA.size
console.log(q1)

// program 3
let mapB = new Map(
    [
        [1, "admin"],
        [2, "customber"],
        [3, "manager"],
        [4, "support"],
        [5, "L1"]

    ]
)
console.log(mapB)
console.log(mapB.size)


// program 4
mapB = new Map(
    [
        [1, "admin"],
        [2, "customber"],
        [3, "manager"],
        [4, "support"],
        [5, "L1"]
    ]
)
let r1 = mapB.has(1)
console.log(r1)

//mapB.clear()
//console.log(mapB)

let r2 = mapB.get(5)
console.log(r2)

mapB.forEach(function(v,p){
    console.log(v,p)
})

mapB.delete(1)
console.log(mapB)



mapB = new Map(
    [
        [1, "admin"],
        [2, "customber"],
        [3, "manager"],
        [4, "support"],
        [5, "L1"]
    ]
)

for(let k of mapB.keys()){
    console.log(k)
}

for(let v of mapB.values()){
    console.log(v)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}

////// -------------------------------------------------------------


















// set