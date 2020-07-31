
const snakeField = document.getElementById('snakeField')

for (let i = 0; i < 100; i++) {
    let myDiv = document.createElement("div")
    console.log(myDiv)
    myDiv.classList.add("item")
    snakeField.appendChild(myDiv)
    myDiv.addEventListener('mouseover', change)
}

function change(){
    console.log(event)
    let divs = event.target
    divs.style.background = "green"
    setTimeout(() => {
        divs.style.background = "lightblue"
    }, 400);
}







