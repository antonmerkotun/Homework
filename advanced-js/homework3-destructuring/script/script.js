'use strict'

// TASK 1

const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
const [name, name2, name3, name4, name5, name6, name7] = clients1;
const [,name8, , name9] = clients2;
const clients = [name, name2, name3, name4, name5, name6, name7].concat([,name8, , name9]);
console.log(clients);