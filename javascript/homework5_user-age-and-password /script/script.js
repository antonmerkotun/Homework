"use strict"

function createNewUser() {
    return {
        firstName: prompt(`Введите имя`),
        lastName: prompt(`Введите фамилию`),
        getLogin() {
            let res = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
            console.log(res);
        },
        birthday: prompt(`Введите дату рождения`),
    };
}




const newUser = createNewUser();
newUser.getLogin();
