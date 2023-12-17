//while 


// intialziation 
// while (condition) {
//     // statement
//     // increment/ decrement
// }


// program 1
// print "hello" 3 tyms 
let i1 = 1
while (i1 <= 3) {
    console.log("hello") // "hello"  // "hello" // "hello"
    i1++  // 2 // 3 // 4
}

// program 2
// print 1 to 5 
let i2 = 1
while (i2 <= 5) {
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2 = i2 + 1 // 2 // 3 // 4 // 5  // 6
}

// program 3 
// print 5 to 1
let i3 = 5
while (i3 >= 1) {
    console.log(i3) // 5 // 4 // 3 //2 // 1
    i3 = i3 - 1 // 4 // 3 // 2 // 1 // 0
}

// program 4
// table of 2 
let i4 = 2
while (i4 <= 20) {
    console.log(i4) // 2 // 4 // 6--------- 20 
    i4 = i4 + 2 // 4 // 6 // 8 ------- 22
}

// program 5
// table of 5 in reverse
let i5 = 50
while (i5 >= 5) {
    console.log(i5) // 50 // 45 --------------------- 5
    i5 = i5 - 5 // 45 // 40 ------------------------0
}

// break statement with while
let i6 = 1
while (i6 <= 3) {
    if(i6 == 2){
        break
    }
    console.log(i6) // 1
    i6++ //2
}

// program 6

let i7 = 1
while(i7 <= 5){
    console.log(i7) // 1 // 2 // 3
    if(i7 == 3){
        break
    }
    i7 = i7 + 1 //2 // 3
}

// program 7

let i8 = 5
while(i8 >= 1){
    if(i8 == 3){
        break
    }
    console.log(i8) //5 // 4
    i8 -- // 4 // 3

}

//program 8 
// continue with while statement 

let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        i9 = i9 + 1 //4
        continue
    }
    console.log(i9) //1 // 2 // 4 // 5
    i9 ++ // 2 // 3 // 5 //6
}

// console.log(1)
// console.log(2)
// console.log(3)


// monday web friday sat sun - 8am 
// monday web friday sat sun - 8pm















































// while with break


// while wirh continue