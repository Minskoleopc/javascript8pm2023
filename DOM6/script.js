// <h1>Fruits</h1>
// <ul>
//     <li>Apple</li>
//     <li>Mango</li>
//     <li>Banana</li>
//     <li>Grapes</li>
// </ul>
// <input type="text">
// <button>Add Element</button>

let addButton = document.querySelector('button')
console.log(addButton)

let inputText = document.querySelector('input')
console.log(inputText)

let ulList = document.querySelector('ul')
console.log(ulList)

addButton.addEventListener('click',function(){
    let fruitText  = inputText.value  // papaya
    let newli = document.createElement('li') // <li></li>
    newli.textContent = fruitText //<li>papaya</li>
    ulList.appendChild(newli)
    inputText.value = " "

})









