
// intialization 
// while(condition){
    // statements 
    // increment / decrement

//}

// program 1 

let t1 = 1
while(t1 <= 3){
    console.log('hello') // "hello" // "hello" // "hello"
    t1  = t1 + 1 // 2 // 3 // 4
}

// program 2  // print 1 to 3

let t2 = 1
while(t2 <= 3){
    console.log(t2) // 1 //2 // 3
    t2 = t2 + 1 // 2 // 3 // 4
} 

// program 3 print 5 to 1 in reverse 
let t3 = 5
while(t3 >= 1){
    console.log(t3) // 5 // 4 // 3 // 2 // 1
    t3 -- // 4 // 3 // 2 // 1 // 0
}

// program 4 
let t4 = 2 
while(t4 <= 20){
    console.log(t4)  // 2 // 4 ---------------- 20
    t4 = t4 + 2 // 4 // 6 ----------------------22
}


// program5
let t5 = 50
while(t5 >= 5){
    console.log(t5) // 50 // 45 // 40 ----------------5
    t5 = t5 - 5 // 45 // 40 // 35 -------- 0
}

// break with for while 

let t6 = 1 
while(t6 <= 5){
    if(t6 == 3){
        break
    }
    console.log(t6)  //1 // 2
    t6 = t6 + 1 // 2 // 3
}


let t7 = 1 
while(t7 <= 5){
    console.log(t7)   // 1 // 2 //3
    if(t7 == 3){
        break
    }
    t7 = t7 + 1 // 2 // 3
}

let t8 = 5 
while(t8 >= 1){
    if(t8 == 3){
        break
    }
    console.log(t8) // 5 // 4
    t8 = t8 - 1 // 4 // 3
}

// contine with while 

let t9 = 1
while(t9 <= 5){
    if(t9 == 3){
        t9 = t9 + 1 // 4
        continue
    }
    console.log(t9) // 1 //2 // 4 // 5
    t9 = t9 + 1 // 2 // 3 // 5 // 6
}












