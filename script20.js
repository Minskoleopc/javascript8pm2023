// // object literal 
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:27,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:28,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// amol.display()

// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)
// chinmay.display()



class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    display(){
        console.log(this.firstName +this.lastName)
    }

}
let amol = new Person()
console.log(amol)
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 45
console.log(amol)
amol.display()
