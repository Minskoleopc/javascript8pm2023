// program 1 

// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adhar = adharNo
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {

//     constructor(fn,ln,adharNo,salary){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adhar = adharNo
//         this.salary  = salary
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// program -- parent constructor and child no contructor
// class Student {
//     constructor(fn,ln ,adhar){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adhar
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// class Teacher extends Student {
//     salary = 100000
//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// let amolT = new Teacher("amolT","raoT",123)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.adharNo)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()

// program 2 - parent contructor , child contructor
class Student {
    constructor(fn,ln, age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student {
    constructor(fn,ln,age,salary){
        super(fn,ln, age)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let chinmayT = new Teacher("chinmayT","deshpandeT",23,45)
console.log(chinmayT.firstName)
console.log(chinmayT.lastName)
console.log(chinmayT.age)
console.log(chinmayT.salary)
chinmayT.displayName()
chinmayT.displaySalary()
// multi-level , herarchical interitance






