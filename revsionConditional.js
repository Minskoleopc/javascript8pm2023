

// conditional statments 


// conditional statement --- one input and multiple outcomes

//music concert 
// numT > 0 && numT <= 5   =======> 10 % discount
// numT > 5 && numT <= 10  =======> 20 % discount 
// numT > 10               =======> 30 % discount

// if(condition){
//     // this statement will be executed --- boolean
// }

let numT = 17

// if(numT > 0 && numT <= 5){
//     console.log("10 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }

// program 2

if(numT > 0 && numT <=5){
    console.log("10 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
else if(numT > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

marks = 56

// if(marks >= 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }

if(marks >= 90){
    console.log('Grade A')
}
else if (marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("Try again..!")
}

// program 4
let s = 10 
let t = 50
if( s > t){
    console.log("s is greater")
}
else {
    console.log("t is greater")
}

// program 5

let x1 = 10
let x2 = 20 
let x3 = 30

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

// program 6 
let q = 9
let r = 3

q > r ? console.log("q is greater"):console.log("r is greater")


















