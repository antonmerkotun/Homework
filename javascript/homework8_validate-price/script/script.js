'use strict'

const div = document.createElement("div");
const span = document.createElement("span");
const input = document.createElement("input");
document.body.prepend(div);
div.append(span);
div.append(input);
span.textContent = `Price`;


const colorGreen = `rgb(41, 121, 26)`;
const colorBlack = `rgb(0, 0, 0)`;
const colorRed = `rgb(255, 0, 0)`;

const onMouseHover = function () {
    input.style.borderColor = colorGreen;
}
input.addEventListener(`mouseover`, onMouseHover);

const onMouseOut = function () {
    input.style.borderColor = colorBlack;
}
input.addEventListener(`mouseout`, onMouseOut);

const divTop = document.createElement("div");
document.body.prepend(divTop);

const onMouseOutSpan = function () {
    const spanOut = document.createElement('span')
    divTop.prepend(spanOut)
    const button = document.createElement('button')
    button.textContent = `X`
    divTop.append(button)
    spanOut.textContent = `Текущая цена: ${input.value}`
    input.style.color = colorGreen
    input.removeEventListener(`mouseout`, onMouseOutSpan);
    const bnActive = function () {
        input.value = ``
        divTop.remove()
    }
    button.addEventListener(`mousedown`, bnActive);

}
input.addEventListener(`mouseout`, onMouseOutSpan);

const inputOut = function () {
    if (input.value <= 0 || input.value === ``){
        input.style.borderColor = colorRed;
        divTop.remove()
        const p = document.createElement('p')
        div.append(p)
        p.textContent = `Please enter correct price`
    }
        input.removeEventListener(`mouseout`, inputOut);
}
input.addEventListener(`mouseout`, inputOut);















