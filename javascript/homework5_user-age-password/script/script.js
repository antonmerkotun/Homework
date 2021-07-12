"use strict"

function createNewUser() {
    return {
        firstName: prompt(`Введите имя`),
        lastName: prompt('Введите фамилию'),
        getLogin() {
            let res = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
            console.log(res);
        },
        birthday: prompt(`Введите дату рождения`),
        getAge(){
            let now = new Date();
            let years = this.birthday[6] + this.birthday[7] + this.birthday[8] + this.birthday[9];
            let month = this.birthday[3] + this.birthday[4];
            let day = this.birthday[0] + this.birthday[1];
            let birthday = new Date(years,month,day);
            let age = now.getFullYear() - birthday.getFullYear()
            console.log(age)
        },
        getPassword (){
            let pass = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday[6] + this.birthday[7] + this.birthday[8] + this.birthday[9]
            console.log(pass);
        }
    };
}
const newUser = createNewUser();
newUser.getLogin();
newUser.getAge();
newUser.getPassword();