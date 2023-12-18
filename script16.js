
// program 1
let firstName = "chinmay"
let q1 = firstName.repeat(2)
console.log(q1)


// program 2
// 0 1 2 3 4 5 6
// c h i n m a y 
let q2 = firstName.substring(1, 2)
console.log(q2)

// program 3
let q22 = firstName.charAt(3)
console.log(q22)

// program 4
let q33 = firstName.charCodeAt(3)
console.log(q33)


//program 5 

let firstNamee = "chinmay"

// 0  1  2  3  4  5  6
// c  h  i  n  m  a  y
let vowels = "aeiou"
let count = 0

for (let i = 0; i < firstName.length; i++) {
    if (vowels.includes(firstNamee[i])) {
        count = count + 1
    }
}
console.log(count)

let count2 = 0
for (let i = 0; i < firstName.length; i++) {
    if (firstName[i] == 'a' || firstName[i] == 'e' || firstName[i] == 'i' || firstName[i] == 'o' || firstName[i] == 'o') {
        count2 = count2 + 1
    }
}

console.log(count2)


// program 6
let fruits = "apple mango banana orange papaya"
let userInput = "apple"

if(fruits.includes(userInput.toLowerCase())){
    console.log("fruits available")
}
else {
    console.log("fruit not available")
}













