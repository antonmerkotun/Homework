'use strict'

const div = document.createElement("div");
const span = document.createElement("span");
const input = document.createElement("input");
const spanMouseOut = document.createElement('span')
const spanOut = document.createElement('span')
const button = document.createElement('button')
const colorGreen = `rgb(41, 121, 26)`;
const colorBlack = `rgb(0, 0, 0)`;
const colorRed = `rgb(255, 0, 0)`;
span.textContent = `Price`;
document.body.prepend(div);
div.append(span);
div.append(input);

input.addEventListener('focus', (event) => {
    event.target.style.borderColor = colorGreen;
    input.value = ''
    console.log(event)
    console.log(event.target)
    spanOut.remove()
    button.remove()
    spanMouseOut.remove()
});

input.addEventListener('blur', (event) => {
    event.target.style.borderColor = colorBlack;
    if (input.value > 0){
        spanOut.textContent = `Текущая цена: ${input.value}`
        button.textContent = `X`
        document.body.prepend(button)
        document.body.prepend(spanOut)
        input.style.color = colorGreen}
    const bnActive = function () {
        input.value = ``
        spanOut.remove()
        button.remove()
    }
    button.addEventListener(`mousedown`, bnActive);
});

function mouseOver() {
    if (input.value < 0){
        document.body.append(spanMouseOut)
        input.style.borderColor = colorRed
        spanMouseOut.textContent = 'Please enter correct price'
    }
}
input.addEventListener('mouseout', mouseOver)















