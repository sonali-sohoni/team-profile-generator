const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//const projectTeam = {};
const getAnswers_Manager = function () {
	return inquirer.prompt([
		{
			type: "input",
			name: "m_name",
			message: "Please enter the name of the team manager (required) -",
			validate: (mname) => {
				if (!mname) {
					console.log("Please enter the team manager's name (required) - ");
					return false;
				}
				return true;
			},
		},
		{
			type: "input",
			name: "m_id",
			message: "Please enter manager's employee id -",
		},
		{
			type: "input",
			name: "m_email",
			message: "Please enter manager's email id (required) - ",
			validate: (arg) => {
				if (!arg) {
					return false;
				}
				return true;
			},
		},
		{
			type: "input",
			name: "m_office",
			message: "Please enter manager's office number -",
		},
	]);
};

const getChoices = function (projectTeam) {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "options",
				message: "Do you want to add Engineer or Intern in your team?",
				choices: ["Engineer", "Intern", "Done"],
			},
		])
		.then((option) => {
			if (option.options === "Engineer") {
				return getAnswers_Engineer(projectTeam);
			} else if (option.options === "Intern") {
				return getAnswers_Intern(projectTeam);
			} else {
				console.log(projectTeam);
				return projectTeam;
			}
			//return projectTeam;
		});
};

const getAnswers_Engineer = function (projectTeam) {
	let engineersArr = projectTeam["engineers"];
	if (!engineersArr) engineersArr = [];
	return inquirer
		.prompt([
			{
				type: "input",
				name: "e_name",
				message: "Please enter the name of the engineer (required) -",
				validate: (arg) => {
					if (!arg) {
						//		console.log("Please enter the team manager's name (required) - ");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				name: "e_id",
				message: "Please enter engineer's employee id -",
			},
			{
				type: "input",
				name: "e_email",
				message: "Please enter engineer's email id (required) - ",
				validate: (arg) => {
					if (!arg) {
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				name: "e_github",
				message: "Please enter engineer's GitHub username (required) - ",
				validate: (arg) => {
					if (!arg) {
						return false;
					}
					return true;
				},
			},
		])
		.then((edata) => {
			const engineer = new Engineer(
				edata.e_name,
				edata.e_id,
				edata.e_email,
				edata.e_github
			);
			//	console.log(engineer);
			engineersArr.push(engineer);
			projectTeam.engineers = engineersArr;
			//	console.log(projectTeam);
			getChoices(projectTeam);
		});
};

const getAnswers_Intern = function (projectTeam) {
	let internArr = projectTeam["interns"];
	if (!internArr) internArr = [];
	inquirer
		.prompt([
			{
				type: "input",
				name: "i_name",
				message: "Please enter the name of the intern (required) -",
				validate: (arg) => {
					if (!arg) {
						//		console.log("Please enter the team manager's name (required) - ");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				name: "i_id",
				message: "Please enter intern's employee id -",
			},
			{
				type: "input",
				name: "i_email",
				message: "Please enter intern's email id (required) - ",
				validate: (arg) => {
					if (!arg) {
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				name: "i_school",
				message: "Please enter name of the intern's school - ",
			},
		])
		.then((idata) => {
			const intern = new Intern(
				idata.i_name,
				idata.i_id,
				idata.i_email,
				idata.i_school
			);
			internArr.push(intern);
			projectTeam.interns = internArr;
			getChoices(projectTeam);
		});
};

const getEmployeeInfo = function (projectTeam) {
	getAnswers_Manager().then((data) => {
		//		console.log(data);
		projectTeam["Manager"] = new Manager(
			data.m_name,
			data.m_id,
			data.m_email,
			data.m_office
		);
		//
		getChoices(projectTeam);
	});
};

const generateTeamProfile = function () {
	const projectTeam = {};
  getEmployeeInfo(projectTeam);
  generateTemplate(projectTeam)
};

generateTeamProfile();
