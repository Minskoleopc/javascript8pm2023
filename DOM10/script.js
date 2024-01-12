// program 1
// <h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// document.querySelector('h1')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('h1[name= "nm"]')

let firstLi = document.querySelector('li')
console.log(firstLi)

let nodeListOfFruits  = document.querySelectorAll('li')
console.log(nodeListOfFruits)

for(let i = 0 ; i < nodeListOfFruits.length ; i++){
    //console.log(i)
    //console.log(nodeListOfFruits[i])
    nodeListOfFruits[i].style.color = "red"
}


let elemeWithClassFri = document.querySelectorAll('.fri')
console.log(elemeWithClassFri)

for(let i = 0 ; i < elemeWithClassFri.length ; i++){
    console.log(elemeWithClassFri[i])
    elemeWithClassFri[i].style.backgroundColor = "blue"
}

// ------ one query ---------------------

//document.querySelector() ----> single element
//document.querySelectorAll() --- node list


// program 2 

let q1 = document.querySelector('#three')
console.log(q1)
let q2 = document.getElementById('three')
console.log(q2)

let nl = document.querySelectorAll('.veg')
console.log(nl) // nl

let hc = document.getElementsByClassName('veg')
console.log(hc) // hc


// 9-10 ---- Ajax 
// 7-8  ---  Oops


















