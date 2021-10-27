const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github_username) {
		super(name, id, email, "Engineer");
		this.github_username = github_username;
	}
	getGitHub() {
		return this.github_username;
	}
	getRole() {
		return this.role;
	}
}
module.exports = Engineer;
