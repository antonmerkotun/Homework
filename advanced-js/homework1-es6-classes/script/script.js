class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set name(nameValue) {
        this._name = nameValue;
    }
	get	name(){
		return this._name;
	}
	set age(ageValue){
		this._age = ageValue;
	}
	get age(){
		return this._age;
	}
	set salary(salaryValue){
		this._salary = salaryValue;
	}
	get salary(){
		return this._salary;
	}
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
	set salary(salaryValue){
		this._salary = salaryValue;
	}
	get	salary(){
		return this._salary * 3;
	}
}


const programmer = new Programmer('Uasya', 44, 100, 'en')
const programmer2 = new Programmer('Peter', 32, 200, 'ua')
console.log(programmer)
console.log(programmer2)