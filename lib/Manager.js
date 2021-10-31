const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, phone) {
		super(name, id, email, "Manager");
		phone = phone.replace(/\D/g, "");

		phone =
			phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 15);
		this.officeNumber = phone;
	}
	getRole() {
		return this.role;
	}
}

module.exports = Manager;
