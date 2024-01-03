//http://localhost:3000/monsters/?_limit=50&_page=1
// make a funciton for the monster name, age, desc.
//create a loop for the monster to display. 
let pageCount = 1

document.getElementById('forward').addEventListener('click', () => {
    pageCount++
    fetchMonster(pageCount)
})

function fetchMonster(page) {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for(let monster of data) {
            renderMonster(monster)
        }
    })
}

const renderMonster = (monsterObject) => {
    let monsterContainer = document.getElementById('monster-container')

    let name = document.createElement("h3")
    name.textContent = monsterObject.name;
    
    let age = document.createElement("p")
    age.textContent = monsterObject.age;

    let description = document.createElement("p")
    description.textContent = monsterObject.description;

    monsterContainer.append(name, age, description)
}

let formContainer = document.getElementById("create-monster")

let form = document.createElement("form")

let inputName = document.createElement('input')
inputName.type = 'text'

let inputAge = document.createElement('input')
inputAge.type = "text"

let inputDescription = document.createElement('input')
inputDescription.type = "text"

let submitButton = document.createElement('input')
submitButton.type = "submit"

form.append(inputName, inputAge, inputDescription, submitButton)
formContainer.append(form)



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newMonster = {
        name: inputName.value,
        age: inputAge.value,
        description: inputDescription.value,
    }
    console.log(newMonster)
    renderMonster(newMonster)

    fetch("http://localhost:3000/monsters", {
        method: "POST",
        headers: {
            "conetxt-type": "Application/json"
        },
        body: JSON.stringify(newMonster)
    })
    .then( res => res.json())
    .then(data => {
        console.log(data)
    })
})

// let sully = {
//     name: "Sully",
//     age: 12,
//     description: "A friendly monster that tries to be scary",
// }

// renderMonster(sully)

//grabbed the forward button
//made the url link a stringify
// when button is clicked disply the rage of object from 51-100
// within the if statement mdistinguish the differnce between the ranges on the page




