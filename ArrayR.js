
// program 1 // map
let birthYear = [1989, 1990, 1991, 1992]
let ages = [] // 34,33,32,31
//[34,33,32,31]

for (let i = 0; i < 4; i++) { // 1 // 2 // 3 // 4
    // console.log(i) // 0 // 1 // 2 // 3
    console.log(2023 - birthYear[i])
    // let x = 2023 - birthYear[i] // 34
    // ages.push(x)
}
console.log(ages)


// program2
let marks = [66,44,22,77,88,90,45,56]
// [66,77,88,90,56]
let above50 = []
for(let i = 0 ; i < marks.length ; i++){
        //console.log(i)
        //console.log(marks[i])
        if(marks[i] > 50){
            above50.push(marks[i])
        }
}
console.log(above50)

// program 3
let numbers = [11,22,33] // 66
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    total = total + numbers[i]

    //       0   +     11    =========> 11
    //      11   +     22    =========> 33
    //      33   +     33    =========> 66
}
console.log(total)

// program 4
//              0       1         2         3
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}























