"use strict"

function createNewUser() {
    return {
        firstName: prompt(`Введите имя`),
        lastName: prompt(`Введите фамилию`),
        getLogin() {
            let res = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
            console.log(res);
        },
    };
}

const newUser = createNewUser();
newUser.getLogin();










