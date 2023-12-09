// loops  for and while

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop
// for(intialization; conditionCheck ; increment/decrement){
//     // statement
// }

// program 2
for (let i = 1; i <= 3; i++) {  // 2 // 3 // 4

    console.log(i) // 1 // 2 // 3

}


// program 2
// 1 <= 3  ---- true
// 2 <= 3  ----- true
// 3 <= 3  ------ true

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log("hello") // hello // hello // hello
}

// program 3

for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// program 4

for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3  // 2 // 1
}

// program 5 
for (let i = 3; i >= 1; i--) { // 2 // 1 //0
    console.log(i) // 3 // 2 // 1
}


// program 6 
// table of 2

for (let i = 1; i <= 10; i++) { // 2 // 3 ------- 11
    console.log(i * 2) // 2 // 4 // 6 ------ 20
}

// table of 5 in reverse
// program 7
for (let i = 10; i >= 1; i--) { // 9 ---------------0
    console.log(i * 5) // 50 // 45 ------- 5
}


//Day 2

//--------------------------------------------------------------------------
// for while 

// for loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)

// for loop
// for(intialization ; conditionCheck , increment/decrement){
//     // statements
// }

// program 1
for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) //1 //2 // 3
}


// program 2
for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 //3 // 4 // 5
}


// program 3

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log("hello") // "hello" "hello" , "hello"
}

// program 4
// print 5 to 1

for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 //3// 2 // 1
}
// 5 >= 1  ---  true
// 4 >= 1  ---- true
// 3 >= 1  ---- true
// 2 >= 1  ---- true
// 1 >= 1  ---- true

// program 5
// table of 2 

for(let i = 1 ; i <= 10 ; i++){ // 2-------------- 10 11
    console.log(i * 2) // 2 //4 -------- 20
}

for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // 8 -- 22
    console.log(i) // 2 // 4 // 6  ----- 20
}

// print table of 5 in reverse 

for(let i = 50; i >= 5 ; i = i - 5){ // 45 --------- 0
    console.log(i) // 50 // 45 --------------- 5
}

for(let i = 10; i >=1 ; i--){ 
    console.log(i * 5) 
    //i - 10 ,9 ,8,7,6,5,4,3,2,1
}

// break statement with for loop
for(let i  = 1 ; i <= 5 ; i++){ // 2 // 3
    if( i == 3){
        break
    }
    // 1 // 2
    console.log(i)
}

for(let i  = 1 ; i <= 5 ; i++){   // 2 // 3
    console.log(i)  // 1 // 2 // 3
    if( i == 3){
        break
    }
}

// while

































































