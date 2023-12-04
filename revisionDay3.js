

// conditional statements 

// one input and multiple outcomes

// numT > 0 && numT <= 5   ====> 10 % discount 
// numT > 5 && numT <= 10  ====> 20 % discount 
// numT > 10               ====> 30 % discount

let numT = 17
if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

// program 2

let numT2 = 10
if(numT2 >  0 && numT2 <= 5){
    console.log("10 % discount")
}
else if(numT2 > 5  && numT <= 10){
    console.log('20 % discount')
}
else if(numT2 > 10){
    console.log('30 % discount')
}
else {
    console.log("incorrect incorrect")
}

// program 3

let marks = 65

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }


// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks >= 75){
//     console.log("Grade B")
// }
// else if(marks >= 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Try again")
// }


// program 4 
let a = 10 
let b =  50

if( a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 5
let x1 = 10
let x2 = 5 
let x3 = 4

if( x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if( x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

// program 6 
let q = 10
let r = 50
q > r ? console.log("q is greater"):console.log("r is greater")


































