// class fields

let amolB = {
    firstName: "amolB",
    lastName: "RaoB",
    age: 34,
    rollNo: 45
}



// program 1

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let amol = new Person()
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo = 45
console.log(amol)

// program 2


class PersonB {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }

}

let amolC = new PersonB("amolC","raoC",34,45)
let amolD = new PersonB("amolD","raoD",34,45)
console.log(amolC)
amolD.city = "pune"

// program 3
class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
}
let amolE = new PersonC()
console.log(amolE)
amolE.setFirstName("amolE")
amolE.setLastName("amolE")
amolE.setAge("amolE")
amolE.rollNo("amolE")
console.log(amolE)

// program 4