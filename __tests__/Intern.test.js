const Intern = require("../lib/Intern");

test("Intern Object", () => {
	const intern = new Intern(
		"Kelvin",
		"9090",
		"kelvin@jesing.com",
		"ABCDschool"
	);
	expect(intern.name).toBe("Kelvin");
	expect(intern.id).toBe("9090");
	expect(intern.email).toBe("kelvin@jesing.com");
	expect(intern).toHaveProperty("school");
	expect(intern.getSchool()).toBe("ABCDschool");
	expect(intern.getRole()).toBe("Intern");
});
