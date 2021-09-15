'use strict'

// TASK 1

const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];


class Clients {
	constructor(clients1, clients2) {
		this.clients1 = clients1;
		this.clients2 = clients2;
	};
	checkClients(){
		let ccc = clients1.forEach(function (ele) {
				return ele
		})
		console.log(ccc)

	}
}



const clients = new Clients(clients1, clients2);
clients.checkClients()