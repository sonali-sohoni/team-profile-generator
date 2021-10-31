const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

test("Test employee object", () => {
	const employee = new Employee("TEST Employee", "TEST", "test@jesting.com");
	expect(employee).toHaveProperty("name");
	expect(employee).toHaveProperty("id");
	expect(employee).toHaveProperty("email");
	expect(employee).toHaveProperty("role");
	expect(employee.name).toBe("TEST Employee");
	expect(employee.id).toBe("TEST");
	expect(employee.email).toBe("test@jesting.com");
	expect(employee.role).toBe("Employee");
});

test("getName() ", () => {
	const emp = new Employee("TEST Employee", "TEST", "test@jesting.com");
	expect(emp.getName()).toEqual(expect.any(String));
});

test("getId()", () => {
	const emp = new Employee("TEST Employee", "TEST", "test@jesting.com");
	expect(emp.getId()).toEqual(expect.any(String));
});

test("getEmail()", () => {
	const emp = new Employee("TEST Employee", "TEST", "test@jesting.com");
	expect(emp.getEmail()).toEqual(expect.stringMatching(/^\S+@\S+\.\S+$/));
});
