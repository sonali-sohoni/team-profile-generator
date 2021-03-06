const generateHtml = function (projectTeamObj) {
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My Project Team</title>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	</head>
	<body>
		<div class="container">
			<div class="row gx-10">
				<div class="col">
					<div class="p-3 border bg-danger">
						<h1 class="text-center fw-bold text-light">Project Team Profile</h1>
					</div>
				</div>
			</div>
			<div class="row p-4 m-2 cardholder">
		
			</div>
		</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <script type='text/JavaScript'>
        ${getJavaScript(projectTeamObj)}
    </script>
	</body>
</html>
`;
};
//<i class="fas fa-tasks"></i>
//<i class="fas fa-user-graduate"></i>
//<i class="fas fa-code"></i>
function generateCardFunction() {
	return `
  const generateCard = (emp) => {
		let iconClass = "";
		if (emp.role === "Manager") {
			iconClass ="fa-tasks";
		}else if(emp.role=== "Engineer"){
			iconClass ="fa-laptop-code";
		}else if(emp.role === "Intern")
		iconClass ="fa-user-graduate";
		let div1 = $("<div>").addClass("col-sm-3 m-3");
		let divCard = $("<div>").addClass("card");
		divCard.attr("style", "width: 18rem");
		let divCardHeader = $("<div>").addClass("card-header bg-primary text-light");
		divCardHeader.html("	<h4> "+emp.name+"</h4> 	<h5>Project"+ emp.role +"&nbsp; <span class='fas "+iconClass+"'></span></h5>");
		let divCardBody = $("<div>").addClass("card-body bg-secondary bg-opacity-10");

		//divCardBody.append(getListItems(mgr));
		divCardBody.append(getULElem(emp));
		divCard.append(divCardHeader, divCardBody);
		div1.append(divCard);
		return div1;
	};
  `;
}

function getListItemFunction() {
	return `
  const getListItem = (val, label) => {
	if (label === "email") {
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(label +": <a href='mailTo:"+val+"'>"+val+"</a>");
	 }
	else if (label === "GitHub") {
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(
				label +": <a href='https://github.com/"+val+"' target='_blank'>"+val+"</a>"			);
	} 
	else
		return $("<li>")
			.addClass("list-group-item bg-primary bg-opacity-25 p-2")
			.html(label +" : "+val);
}`;
}

//   const teamProfile = {
// 	Manager: {
// 		name: "Rahul Dravid",
// 		id: "IT001",
// 		email: "rahul.dravid@gmail.com",
// 		role: "Manager",
// 		officeNumber: "888-888-9999",
// 	},
// 	engineers: [
// 		{
// 			name: "Virat Kohli",
// 			id: "VK999",
// 			email: "virat.kohli@gmail.com",
// 			role: "Engineer",
// 			github_username: "virukohli",
// 		},
// 		{
// 			name: "Virendra Sehwag",
// 			id: "VS999",
// 			email: "visli@gmail.com",
// 			role: "Engineer",
// 			github_username: "visli888",
// 		},
// 		{
// 			name: "A M Tolli",
// 			id: "TTT999",
// 			email: "amtoolii@gmail.com",
// 			role: "Engineer",
// 			github_username: "amtoo",
// 		},
// 	],
// 	interns: [
// 		{
// 			name: "Jas Bumrah",
// 			id: "JB66666",
// 			email: "jsbumrah@gmail.com",
// 			role: "Intern",
// 			school: "GSC",
// 		},
// 	],
// };
function getJavaScript(projectTeamObj) {
	console.log("project team");
	console.log(projectTeamObj);
	return `
  const teamProfile = ${JSON.stringify(projectTeamObj, null, 2)};


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
${getListItemFunction()}
${generateCardFunction()}

const generateTeamProfile = function () {
		let cardholder = $(".cardholder");
		const mgr = teamProfile.Manager;
		const mgrCard = generateCard(mgr);
		cardholder.append(mgrCard);
		const engineers = teamProfile.engineers;
    if(engineers){
      engineers.forEach((eng) => {
        const engCard = generateCard(eng);
        cardholder.append(engCard);
      });
    }
		const interns = teamProfile.interns;
    if(interns){
		interns.forEach((int) => {
			const intCard = generateCard(int);
			cardholder.append(intCard);
		});
  }
		//console.log(mgrCard);
	};
	window.onload = generateTeamProfile;
`;

	// const generateTeamProfile = function () {
	// 	let cardholder = $(".cardholder");
	// 	const mgr = teamProfile.Manager;
	// 	const mgrCard = generateCard(mgr);
	// 	cardholder.append(mgrCard);
	// 	const engineers = teamProfile.engineers;
	// 	engineers.forEach((eng) => {
	// 		const engCard = generateCard(eng);
	// 		cardholder.append(engCard);
	// 	});
	// 	const interns = teamProfile.interns;
	// 	interns.forEach((int) => {
	// 		const intCard = generateCard(int);
	// 		cardholder.append(intCard);
	// 	});

	// 	//console.log(mgrCard);
	// };
	// window.onload = generateTeamProfile;

	//   `
}

module.exports = generateHtml;
