// Page Generator
const generate = require("./src/generate");

// Node Modules
const fs = require("fs");
const inquirer = require("inquirer");

// Team Classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Empty array used to hold newly created team memebers
const team = [];

// Runs the program once npm start is entered
function init() {
  console.log(
    `
    ============
      Welcome!
    ============

 Let's build your team! 
    `
  );

  createManager();
}

// creates a new Manager
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Team Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Team Managers Id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Team Managers email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your Team Managers office number?",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      this.Manager = new Manager(name, id, email, officeNumber);
      team.push(this.Manager);
      addEmployee();
    });
}

// creates a new Engineer
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Engineers Id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineers email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineers GitHub username?",
      },
    ])
    .then(({ name, id, email, github }) => {
      this.Engineer = new Engineer(name, id, email, github);
      team.push(this.Engineer);
      addEmployee();
    });
}

// creates a new Intern
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Interns Id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Interns email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does your Intern attend?",
      },
    ])
    .then(({ name, id, email, school }) => {
      this.Intern = new Intern(name, id, email, school);
      team.push(this.Intern);
      addEmployee();
    });
}

// Writes team data to index.html file
function writeFile(textContent, team) {
  fs.writeFileSync("./dist/index.html", textContent);
}

// a menu to choose which role would like to be added to the team next or to send data once team is built
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeam",
        message: "Would you like to add another team member?",
        choices: ["Add Engineer", "Add Intern", `No, I'm done! :)`],
      },
    ])
    .then(({ addTeam }) => {
      if (addTeam == "Add Engineer") {
        createEngineer();
      } else if (addTeam == "Add Intern") {
        createIntern();
      } else {
        const textContent = generate(team);
        writeFile(textContent, team);
        console.log(
          `
                ==========
                TEAM BUILT!
                ==========
            index.html created!!
                `
        );
      }
    })
    .catch((err) => {
      console.log("Error!" + err);
    });
}

init();
