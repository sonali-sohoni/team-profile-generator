# team-profile-generator

## Description 

This is the Node.js command line application that takes information about the employees in the project team and generates HTML page that displayes summaries of each person.


## Scenarios
* AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
* WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Built In
* Node.js
* Java Script
* jQuery
* HTML
* CSS BootStrap
* jest Framework
* inquirer and fs packages

## Installation
* Please go to https://github.com/sonali-sohoni/team-profile-generator repository
* Click on code and select Clone or download zip file then unzip it.
* Open the folder in the Visual Studio Code. Use node.install to install all dependecy packages.
* On the bash / or on integrated bash terminal use node index to start the application.
* Answer all the prompts.Choose "Done" when you are finished entering project team members.
* HTML file displaying your project team profile will be generated in ./dist/ folder.

## Screenshots-
![test](https://user-images.githubusercontent.com/88642738/139593790-ad80c751-bfcc-439b-9437-b165ab4c7aac.JPG)
![project_structure](https://user-images.githubusercontent.com/88642738/139594054-e77cd401-9140-43aa-bbbb-e337b7e23a31.JPG)


## Tests
* To run the test suites, type npm test on the command prompt. This will run all the tests on your code.
  Following tests have been included in test suite 
* Employee.test.js  - Test all object properties and their values. Test functionality of getName() ,getId() getRole() and getEmail() 
* Manager.test.js - Test inherited object properties and functions. Test to check office number and getRole()
* Engineer.test.js - Test inherited object properties and functions. Test to check GitHub username and getRole();
* Intern.test.jsTest inherited object properties and functions. Test to check school property and getRole();



