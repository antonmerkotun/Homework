"use strict";


function summ(number1, number2, numberOperation) {
    if (numberOperation === `+`){
    let calc = (number1 + number2)
    console.log(calc)
} else if (numberOperation === `-`){
    let calc = (number1 - number2)
    console.log(calc)
} else if (numberOperation === `*`){
    let calc = (number1 * number2)
    console.log(calc)
} else if (numberOperation === `/`){
    let calc = (number1 / number2)
    console.log(calc)
}
}

summ(+prompt(`Введите первое число`),+prompt(`Введите второе число`),prompt(`Введите математическую операцию, например: +, -, *, /. `))

