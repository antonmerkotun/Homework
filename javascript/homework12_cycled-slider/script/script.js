'use strict'

const butStop = document.querySelector('#stop')
const butReturn = document.querySelector('#return')
const image = Array.from(document.querySelectorAll('img'))
butStop.addEventListener('click', buttonClick)
butReturn.addEventListener('click', buttonClick2)

const timer = setInterval(slider, 1000)

let i = 0;
function slider () {
    image[i].classList.remove('active')
    i++
    console.log(i)
    if (i === image.length) {
        i = 0
    }
    image[i].classList.add('active')
}
function buttonClick (){
    clearInterval(timer)
}
function buttonClick2 (){
    setInterval(slider, 1000)
}
