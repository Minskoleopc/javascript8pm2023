//<p id = "one" class = "two" name = "nm">Para</p>

// css selector


// tagName 

let byTagName = document.querySelector('p')
console.log(byTagName)

// id 

let byId = document.querySelector('#one')
console.log(byId)

// class 
let byClassName = document.querySelector('.two')
console.log(byClassName)

// attribute
// tagName[attribute='value']

let byAttribute = document.querySelector('p[name = "nm"]')
console.log(byAttribute)

// <h2 id = "a" class = "b" name = "c">Fruits</h2>

let abyTagName = document.querySelector('h2')
let bByclassName = document.querySelector('.b')
let cById = document.querySelector('#a')
let dName = document.querySelector('h2[name="c"]')