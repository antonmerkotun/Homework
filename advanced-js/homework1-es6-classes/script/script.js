class Employee {
	constructor(name, age, salary) {
		this.name = name;
		this.age = age;
		this.salary = salary;
	}

	set(name, age, salary) {
		// this._name = name;
		// this._age = age;
		// this._salary = salary;
		// console.log(this._name)
		// console.log(this._age)
		// console.log(this._salary)
	}

	get(name, age, salary) {

	}
}

class Programmer extends Employee {
	constructor(name, age, salary, lang) {
		super(name, age, salary);
		this.lang = lang;
	}

	set(salary) {

	}

	get(salary) {

	}
}


const programmer = new Programmer('Uasya', 100, 999999, 'en')
const programmer2 = new Programmer('Peter', 101, 1000000, 'ua')
console.log(programmer)
console.log(programmer2)