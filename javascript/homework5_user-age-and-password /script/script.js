"use strict"

function createNewUser() {
    return {
        firstName: 'Антон',
        lastName: 'Меркотун',
        getLogin() {
            let res = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
            console.log(res);
        },
        birthday: `20.06.1995`,
        getAge(){
            let now = new Date();
            let years = this.birthday[6] + this.birthday[7] + this.birthday[8] + this.birthday[9];
            let month = this.birthday[3] + this.birthday[4];
            let day = this.birthday[0] + this.birthday[1];
            let birthday = new Date(years,month,day); //Дата рождения
            // let age = now.getFullYear() - birthday.getFullYear()
            return  now.getFullYear() - birthday.getFullYear()
            // console.log(age)
        },
        getPassword (){
            let pass = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.getAge()
            console.log(pass)
        }
    };
}

const newUser = createNewUser();
newUser.getLogin();
newUser.getAge();
newUser.getPassword();



// document.write (`Возраст: ${age}`);

// +prompt(`Введите вашу дату рождения`,`dd.mm.yyyy`)

// 20.06.1995

// - this.birthday.slice()


// console.log(this.birthday[0] + this.birthday[1] + this.birthday[3] + this.birthday[4] + this.birthday[6] + this.birthday[7] + this.birthday[8] + this.birthday[9])
