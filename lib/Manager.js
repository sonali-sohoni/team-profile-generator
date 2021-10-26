const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, phone) {
		super(name, id, email, "Manager");
		this.officeNumber = phone;
	}
	getRole() {
		return this.role;
	}
}

module.exports = Manager;
