
// for loop 

// for(initialization; conditionCheck , increment / decrement){
//     // statements
// }

// for(let i = 1 ; i <= 3 ; i++){
//     console.log(i)
// }
// for(let i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }
// for(let i = 1 ; i <= 5 ; i++){
//     console.log("hello")
// }
// for(let i = 5 ; i >= 5 ; i--){
//     console.log(i)
// }
// for(let i = 50 ; i >= 5 ; i = i - 5){
//     console.log(i)
// }
// for(let i = 2 ; i <= 20 ; i = i + 2){
//     console.log(i)
// }


// program 1

// for loop with break statement

for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 0 // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) //1 // 2 // 3
    if(i == 3){
        break
    }
   
}


for(let i = 5 ; i >= 1 ; i--){ // 4
    if(i == 4){
        break
    }
    console.log(i) // 5

}


for(let i = 5 ; i >= 1 ; i--){  // 4
    console.log(i)  // 5 // 4
    if(i == 4){
        break
    }

}
// continue statement with for 
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
   if(i == 3){
     continue
   }
   console.log(i) //1 // 2 // 4 // 5
}

for(let i = 5 ; i >= 1 ; i-- ){
    if(i == 3){
        continue
    }
    console.log(i)
}

// wed fri





























