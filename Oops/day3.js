// class  Student {
//     constructor(fn ,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

// }

// class Teacher extends Student{
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let amit = new Teacher("amit","bhure")
// console.log(amit.firstName)
// console.log(amit.lastName)
// console.log(amit.salary)
// amit.displayName()
// amit.displaySalary()


// program 2

// class Student {
//     constructor(fn, ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

// }
// class Teacher extends Student {
//     constructor(fn,ln,sl){
//         super(fn,ln)
//         this.salary = sl
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }

// }
// let sarika  = new Teacher("sarika","pansare",1000)
// console.log(sarika.firstName)
// console.log(sarika.lastName)
// console.log(sarika.salary)
// sarika.displayName()
// sarika.displaySalary()

// program 3

class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGFather(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(fn,ln, ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln, ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
let chinmay = new Son("manohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fname)
console.log(chinmay.sname)
chinmay.displayFName()
chinmay.displaySName()
chinmay.displayGName()

// program 4

class Mother {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayMName(){
        console.log(this.firstName+ this.lastName)
    }
}

class Son extends Mother {
    constructor(fn,ln,ssn){
        super(fn,ln)
        this.sname = ssn 
    }

    displaySname(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter extends Mother {
    constructor(fn,ln,dfn){
        super(fn,ln)
        this.dname = dfn

    }
    displayDname(){
        console.log(this.dname + this.lastName)
    }
}

let chinmaye = new Son("kanchan","deshpande","chinmay")
let gauriee = new Daughter("kanchan","deshpande","gauri")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
chinmay.displayMName()
chinmay.displaySName()


console.log(gauriee.firstName)
console.log(gauriee.lastName)
console.log(gauriee.dname)
chinmay.displayMName()
chinmay.displayDName()








