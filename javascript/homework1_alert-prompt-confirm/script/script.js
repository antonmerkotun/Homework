const nameUser = prompt('Как Вас зовут?');
console.log(typeof nameUser);

if (nameUser === '' || nameUser === undefined ){
    prompt('Как Вас зовут?')
} else {

}

const ageUser = Number(prompt ('Сколько Вам лет?'));
console.log(typeof ageUser);

if ( ageUser === '' || isNaN(ageUser) || !ageUser){
    prompt ('Сколько Вам лет?')
} else {

}

if (ageUser < 18){
    alert('Вам не разрешено посещать этот сайт.')
}
if (ageUser >= 18 && ageUser <= 22){
    let checkingAge = confirm('Ты уверен, что хочешь продолжить?')
    if (checkingAge === true) {
        alert('Добро пожаловать ' +nameUser)
    } else {
        alert('Вам не разрешено посещать этот сайт.')
    }
}
if (ageUser > 22){
    alert('Добро пожаловать ' +nameUser)
}
