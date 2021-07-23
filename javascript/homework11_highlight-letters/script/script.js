'use strict'

const button = document.querySelectorAll('button')

function checkButton() {
    document.addEventListener("keydown", (evt) => {
        button.forEach(item =>{
            if (evt.key.toUpperCase() === item.textContent || evt.key === item.textContent){
                item.style.backgroundColor = 'blue'
            } else {
                item.style.backgroundColor = 'black'
            }
        })
    })
}
checkButton()





