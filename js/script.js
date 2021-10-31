const teamProfile = {
	Manager: {
		name: "Rahul Dravid",
		id: "IT001",
		email: "rahul.dravid@gmail.com",
		role: "Manager",
		officeNumber: "888-888-9999",
	},
	engineers: [
		{
			name: "Virat Kohli",
			id: "VK999",
			email: "virat.kohli@gmail.com",
			role: "Engineer",
			github_username: "virukohli",
		},
		{
			name: "Virendra Sehwag",
			id: "VS999",
			email: "visli@gmail.com",
			role: "Engineer",
			github_username: "visli888",
		},
		{
			name: "A M Tolli",
			id: "TTT999",
			email: "amtoolii@gmail.com",
			role: "Engineer",
			github_username: "amtoo",
		},
	],
	interns: [
		{
			name: "Jas Bumrah",
			id: "JB66666",
			email: "jsbumrah@gmail.com",
			role: "Intern",
			school: "GSC",
		},
	],
};

const getULElem = (emp) => {
	let ulList = $("<ul>").addClass("list-group");
	ulList.append(
		getListItem(emp.name, "name"),
		getListItem(emp.id, "id"),
		getListItem(emp.email, "email")
	);
	if (emp.role == "Manager") {
		ulList.append(getListItem(emp.officeNumber, "Office Number"));
	} else if (emp.role === "Engineer") {
		ulList.append(getListItem(emp.github_username, "GitHub"));
	} else if (emp.role === "Intern") {
		ulList.append(getListItem(emp.school, "School"));
	}
	return ulList;
};

const getListItem = (val, label) => {
	if (label === "email") {
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(`${label}: <a href='mailTo:${val}'>${val}</a>`);
	} else if (label === "GitHub") {
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(
				`${label}: <a href='https://github.com/${val}' target='_blank'>${val}</a>`
			);
	} else
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(`${label} : ${val}`);
};

const generateCard = (emp) => {
	if (emp.role === "Manager") {
	}
	let div1 = $("<div>").addClass("col-sm-3 m-3");
	let divCard = $("<div>").addClass("card");
	divCard.attr("style", "width: 18rem");
	let divCardHeader = $("<div>").addClass("card-header bg-primary text-light");
	divCardHeader.html(`	<h4> ${emp.name}</h4>
							<h5>Project ${emp.role}</h5>`);
	let divCardBody = $("<div>").addClass("card-body bg-secondary bg-opacity-10");

	//divCardBody.append(getListItems(mgr));
	divCardBody.append(getULElem(emp));
	divCard.append(divCardHeader, divCardBody);
	div1.append(divCard);
	return div1;
};
const generateTeamProfile = function () {
	let cardholder = $(".cardholder");
	const mgr = teamProfile.Manager;
	const mgrCard = generateCard(mgr);
	cardholder.append(mgrCard);
	const engineers = teamProfile.engineers;
	engineers.forEach((eng) => {
		const engCard = generateCard(eng);
		cardholder.append(engCard);
	});
	const interns = teamProfile.interns;
	interns.forEach((int) => {
		const intCard = generateCard(int);
		cardholder.append(intCard);
	});

	//console.log(mgrCard);
};
window.onload = generateTeamProfile;
