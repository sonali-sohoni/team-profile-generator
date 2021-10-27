const { TestWatcher } = require("@jest/core");
const Engineer = require("../lib/Engineer");

test("Engineer object", () => {
	const engineer = new Engineer(
		"Malcom",
		"3456",
		"malcom@jesting.com",
		"gitmalcom"
	);
	expect(engineer).toHaveProperty("name");
	expect(engineer).toHaveProperty("id");
	expect(engineer).toHaveProperty("email");
	expect(engineer).toHaveProperty("role");
	expect(engineer).toHaveProperty("github_username");
});

test("getGitHub()", () => {
	const engineer = new Engineer(
		"Malcom",
		"3456",
		"malcom@jesting.com",
		"gitmalcom"
	);
	expect(engineer.getGitHub()).toBe("gitmalcom");
	expect(engineer.getGitHub()).toEqual(expect.any(String));
	expect(engineer.getRole()).toBe("Engineer");
});
