
// toUpperCase()
// toLowerCase()
// replace()
// startsWith()
// endsWith()
// trim()
// trimStart()
// trimEnd()
// concat()
// includes()


/ methods  and properties 

let first_name = "chinmay"
let q1 = first_name.length
console.log(q1)

// method 
// gym 
// action ---->excerecise
// return ----> health

// program 2 

let middleName = "shirish"

// UpperCase()
// Action - convert to character to UpperCase()
// Return - type 

let q11 = middleName.toUpperCase()
console.log(q11)


// program 3
let lastName = "Ram"
let q12 = lastName.toLowerCase()
console.log(q12)

// program 4
let city = "pune"
let city3 = city.toUpperCase().toLowerCase().length
// "PUNE"--> "pune" -----> 4.toUpperCase()
console.log(city3)

// program 5
let info = "i am learning javascript"
let q3 = info.includes("learning")
let q4 = info.includes("l")
let q5 = info.includes("L")
console.log(q3)
console.log(q4)
console.log(q5)

// program 6
let first_name2 = "chinmay"
let last_name2 = "deshpande"
let q6 = first_name2.concat(' ').concat(last_name2)
console.log(q6)

// program 7
// startsWith()
// endsWiths()

let fruit = "apple"
console.log(fruit)
let q7 = fruit.startsWith('a')
let q8 = fruit.startsWith('app')
console.log(q7)
console.log(q8)

let q9 = fruit.endsWith('e')
let q10 = fruit.endsWith('Le')
console.log(q9)
console.log(q10)

// program 8 
// replace()
let info2 = "I am learning js"
let q13 = info2.replace('js',"python")
console.log(q13)

// program 9

let h = " pune "
let q14 = h.length
console.log(q14)

let q15 = h.trim()
console.log(q15.length)

let q16 = h.trimStart()
console.log(q16.length)


let city6 = "goa " 
let q17 = city6.trimEnd()
console.log(q17.length)

// program 1
let city = "pune"
// 0  1  2  3
// p  u  n  e
console.log(city[0])
let rev = ""
// enup 

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)   
    //console.log(city[i])

    rev = city[i] + rev
    //       p    + ""   =====> p
    //       u    +  p   =====> up
    //       n    +  up  =====> nup
    //       e    +  nup =====> enup
}
console.log(rev)

// program 2
let rev2 = ""
for(let i = city.length -1 ; i>= 0 ; i--){
    //console.log(i)
    console.log(city[i])
    rev2 = rev2 + city[i]

    //      ""  +   "e"   ===> e
    //      e   +   "n"   ===> en
    //      en  +   "u"   ===> enu
    //      enu +    p    ===> enup 
 }
 console.log()


 // slice

 let city3 = "chandrapur"

 //  0   1  2   3  4  5  6  7  8  9
 //  c   h  a   n  d  r  a  p  u  r
 // -10 -9 -8  -7 -6 -5 -4 -3 -2 -1
 //city3.slice(startIndex,endIndex(not included))

 console.log(city3.slice(1))
 console.log(city3.slice(1,6))
 console.log(city3.slice(0,9))
 console.log(city3.slice(-3))
 console.log(city3.slice(1,-3))
 console.log(city3.slice(-10,-2))
 console.log(city3.slice(-1,-5))


 let info2 = ["chinmay","deshpande",77019292441]
 let q1 = info2.join('-')
 console.log(q1)

 let info3 = "chinmay-deshpande-77019292441"
 let q4 = info3.split('-')
 console.log(q4)
 
 //["chinmay","deshpande","77019292441"]