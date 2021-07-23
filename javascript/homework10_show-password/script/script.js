'use strict'

const input = document.getElementById("password");
const input2 = document.getElementById("password-2");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon-2");
const button = document.getElementById("button");
const span = document.createElement('span')
input2.after(span)

icon.addEventListener('click', iconClick)
function iconClick () {
    if (input.getAttribute('type') === 'password') {
        input.removeAttribute('type');
        input.setAttribute('type', 'text');
        icon.className = 'fa fa-eye-slash';
    } else {
        input.removeAttribute('type');
        input.setAttribute('type', 'password');
        icon.className = 'fa fa-eye';
    }
}

icon2.addEventListener('click', iconClick2)
function iconClick2 () {
    if (input2.getAttribute('type') === 'password') {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'text');
        icon2.className = 'fa fa-eye-slash';
    } else {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'password');
        icon2.className = 'fa fa-eye';
    }
}

button.addEventListener('click', buttonClick)
function buttonClick (){
    if (input.value === input2.value){
        alert(`You are welcome`)
    } else {
    span.textContent = `Нужно ввести одинаковые значения`
    span.style.color = `red`
    }
}
