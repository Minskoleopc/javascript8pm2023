
// number as a parameter and number as return type
function addition(x,y){
    return x + y
}
let q1 = addition(12,4)
console.log(q1)

// string as parameter and string as return type 
function greetWorld(name){
    return "welcome "+ name
}
let q2 = greetWorld("chinmay")
console.log(q2)

// boolean as parameter and boolean as a return type 

let haveVehicle = true
let ageD = 18
function canDrive(haveVehicle , age){
    if(haveVehicle && age >= 18){
        return true
    }
    else {
        return false
    }
}
let q3 = canDrive(haveVehicle,ageD)
console.log(q3)

// array as parameter and array as return type 
let city = ["pune","mumbai","banglore","kolkata"]
function addCity(arr){
    arr.push("nagpur")
    return arr
}
let q4 = addCity(city)
console.log(q4)

// program 5
// object as  parameter and oject as return type

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
function addLangauge(obj){
    obj.lanuage = "hindi"
    return obj
}
let q5 = addLangauge(info)
console.log(q5)

// user defined class object as parameter and as return type

class Person {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

}
let amolB = new Person("amolB","raoB")
function addCity(uobj){
    uobj.city= "pune" 
    return uobj
}
let q6 = addCity(amolB)
console.log(q6)

// set as parameter and set as return 

// map as parameter and map as a return 

// function as a paramter

// function as a return type













