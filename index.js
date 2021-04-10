// Iquirer Prompts
const inquirer = require("inquirer");
const managerQuestions = require("./src/managerQuestions.js");
const engineerQuestions = require("./src/engineerQuestions.js");
const internQuestions = require("./src/internQuestions.js");
const menu = require("./src/menu.js");

// Objects
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

// HTML Rendering
const htmlTemplate = require("./htmlTemplate");

// Team Array
let teamArray = [];

// Init
function init() {
  // Manager prompts and create
  function createMgr() {
    inquirer.prompt(managerQuestions).then((mgr) => {
      let manager = new Manager(
        mgr.mgrName,
        mgr.mgrID,
        mgr.mgrEmail,
        mgr.mgrPhone
      );
      // Push Manager to Team Array, advance user to menu
      teamArray.push(manager);
      menuPrompt();
    });
  }

  // Add team members after Manager in created
  function menuPrompt() {
    inquirer.prompt(menu).then((answer) => {
      // Initiate create Engineer/Intern based on input
      if (answer.what == "Add an engineer") {
        engineerQuestion();
      } else if (answer.what == "Add an intern") {
        internQuestion();
        // If finish is selected, call renderHTML function
      } else {
        console.log("Putting it all together...");
        htmlTemplate.renderHTML(teamArray);
      }
    });
  }

  // Engineer prompts and create
  function engineerQuestion() {
    inquirer.prompt(engineerQuestions).then((eng) => {
      let engineer = new Engineer(
        eng.engName,
        eng.engID,
        eng.engEmail,
        eng.engGit
      );
      // Push new Engineer to Team Array, return user to menu
      teamArray.push(engineer);
      menuPrompt();
    });
  }

  // Intern prompts and create
  function internQuestion() {
    inquirer.prompt(internQuestions).then((int) => {
      let intern = new Intern(
        int.intName,
        int.intID,
        int.intEmail,
        int.intSchool
      );
      // Push new Intern to Team Array, return user to menu
      teamArray.push(intern);
      menuPrompt();
    });
  }
  // calls CreateMgr on Init
  createMgr();
}

init();
