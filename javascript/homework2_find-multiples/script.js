"use strict";

let number = +prompt(`Введите число`);

for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        console.log(i)
    } else if (number <= 5){
        console.log(`Sorry, no numbers`)
        break;
    }
}
