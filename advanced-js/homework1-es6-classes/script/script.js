class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set name(value) {
        this._name = value;
    }
	get	name(){
		return this._name;
	}
	set age(value){
		this._age = value;
	}
	get age(){
		return this._age;
	}
	set salary(value){
		this._salary = value;
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
	set salary(value){
		this._salary = value;
	}
	get	salary(){
		return this._salary * 3;
	}
}


const programmer = new Programmer('Uasya', 44, 100, 'en')
const programmer2 = new Programmer('Peter', 32, 200, 'ua')
console.log(programmer)
console.log(programmer2)