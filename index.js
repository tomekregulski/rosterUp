const fs = require("fs");
const questions = require("./src/questions.js");
const managerQuestions = require("./src/managerQuestions.js");
const engineerQuestions = require("./src/engineerQuestions.js");
const internQuestions = require("./src/internQuestions.js");
const htmlTemplate = require("./htmlTemplate");
const menu = require("./src/menu.js");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "roster.html");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

let teamArray = [];
// const { hasUncaughtExceptionCaptureCallback } = require("process");
function init() {
  function createMgr() {
    inquirer.prompt(managerQuestions).then((mgr) => {
      let manager = new Manager(
        mgr.mgrName,
        mgr.mgrID,
        mgr.mgrEmail,
        mgr.mgrPhone
      );
      teamArray.push(manager);
      console.log(teamArray);
      menuPrompt();
    });
  }

  function menuPrompt() {
    inquirer.prompt(menu).then((answer) => {
      if (answer.what == "Add an engineer") {
        engineerQuestion();
      } else if (answer.what == "Add an intern") {
        internQuestion();
      } else {
        console.log("Putting it all together...");
        htmlTemplate.renderHTML(teamArray, OUTPUT_DIR);
      }
    });
  }

  function engineerQuestion() {
    inquirer.prompt(engineerQuestions).then((eng) => {
      let engineer = new Engineer(
        eng.engName,
        eng.engID,
        eng.engEmail,
        eng.engGit
      );
      teamArray.push(engineer);
      console.log(teamArray);
      menuPrompt();
    });
  }

  function internQuestion() {
    inquirer.prompt(internQuestions).then((int) => {
      let intern = new Intern(
        int.intName,
        int.intID,
        int.intEmail,
        int.intSchool
      );
      teamArray.push(intern);
      console.log(teamArray);
      menuPrompt();
    });
  }
  createMgr();
}

init();
