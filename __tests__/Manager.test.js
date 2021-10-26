const { TestWatcher } = require("@jest/core");
const Manager = require("../lib/Manager");

test("test Manager object", () => {
	const manager = new Manager(
		"David",
		"1234",
		"test@jesting.com",
		"1112223333"
	);
	expect(manager.name).toBe("David");
	expect(manager.id).toBe("1234");
	expect(manager.email).toBe("test@jesting.com");
	expect(manager.role).toBe("Manager");
	expect(manager.officeNumber).toBe("1112223333");
});

test("inherited functions ", () => {
	const mgr = new Manager("David", "D1234", "dtest@jesting.com", "1112223333");
	expect(mgr.getName()).toEqual("David");
	expect(mgr.getId()).toEqual("D1234");
	expect(mgr.getEmail()).toEqual("dtest@jesting.com");
	expect(mgr.officeNumber).toBe("1112223333");
});

test("getRole()", () => {
	const mgr = new Manager("David", "D1234", "dtest@jesting.com", "1112223333");
	expect(mgr.getRole).toBe("Manager");
});
