const fs = require("fs");
const questions = require("./questions.js");
const engineerQuestions = require("./engineerQuestions.js");
const internQuestions = require("./internQuestions.js");
const inquirer = require("inquirer");

const generateHTML = (questions) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css" />
      <title>${questions.companyName} - ${questions.teamProjectName}</title>
  </head>
  <body>
      <header>
          <h1>${questions.companyName}</h1>
      </header>
      <main>
          <section id="overview">
              <div id="company">
                <h2>Our Mission</h2>
                <p>${questions.companyDesc}</p>
              </div>
              <div id="team">
                <h2>Our Team</h2>
                <p>${questions.teamOverview}</p>
              </div>
          </section>
          <section id="mgrProfile">
            <div>
                <h2>${questions.mgrName}</h2>
                <p>${questions.mgrID}</p>
                <p>${questions.mgrEmail}</p>
                <p>${questions.mgrPhone}</p>
            </div>
        </section>
        <section id="engProfile">
            <div class="engDetails">
                <h2>${questions.engName}</h2>
                <p>${questions.engID}</p>
                <p>${questions.engEmail}</p>
                <p>${questions.engPhone}</p>
            </div>
        </section>
        <section id="intProfile">
            <div class="intDetails">
                <h2>${questions.intName}</h2>
                <p>${questions.intID}</p>
                <p>${questions.intEmail}</p>
                <p>${questions.intPhone}</p>
            </div>
        </section>
      </main>
  </body>
</html>`;

// inquirer.prompt(questions).then((data) => {
//   const filename = `roster.html`;
//   fs.writeFile(filename, generateHTML(data), (err) =>
//     err ? console.log(err) : console.log("Success!")
//   );
// });
function firstQuestion() {
  inquirer.prompt(questions).then((data) => {
    if (data.test == "Add an engineer") {
      engineerQuestion(data);
    } else if (data.test == "Add an intern") {
      internQuestion(data);
    } else {
      console.log(data);
    }
  });
}

function engineerQuestion(data) {
  inquirer.prompt(engineerQuestions).then((engineerQuestionsAnswers) => {
    console.log(data);
    let name = engineerQuestionsAnswers.engName;
    let idNum = engineerQuestionsAnswers.engID;
    let email = engineerQuestionsAnswers.engEmail;
    let github = engineerQuestionsAnswers.engGit;
    let newEng = new Engineer(name, idNum, email, github);
    console.log("creating");
    // console.log(engineerQuestionsAnswers.engName);
    // console.log(engineerQuestionsAnswers.engID);
    // console.log(engineerQuestionsAnswers.engEmail);
    // console.log(engineerQuestionsAnswers.engGit);
  });
}

function internQuestion(data) {
  inquirer.prompt(internQuestions).then((internQuestionsAnswers) => {
    console.log(data);
    console.log(internQuestionsAnswers.intName);
    console.log(internQuestionsAnswers.intID);
    console.log(internQuestionsAnswers.intEmail);
    console.log(internQuestionsAnswers.intSchool);
  });
}

firstQuestion();

class Employee {
  constructor(name, idNum, email) {
    this.name = name;
    this.idNum = idNum;
    this.email = email;
  }
  // getname();
  // getId();
  // getEmail();
  // getRole(); // returns Employee
}

// class Manager extends Employee {
//   constructor(name, idNum, email, phone) {
//     super(name, idNum, email);
//     this.phone = phone;
//     phone();
//     getRole(); // returns Manager
//   }
// }

class Engineer extends Employee {
  constructor(name, idNum, email, github) {
    super(name, idNum, email);
    this.github = github;
    console.log(this);
    console.log("created");
    // getGitHub();
    // getRole(); // returns Engineer
  }
}

class Intern extends Employee {
  constructor(name, idNum, email, school) {
    super(name, idNum, email);
    this.school = school;
    getSchool();
    getRole(); // returns Intern
  }
}

// let d = new Employee("tom", "12", "to");
// let t = new Manager("tom", "12", "to", "456");
// let f = new Engineer("tom", "12", "toooo", "opopop");
// let y = new Intern("tom", "12", "to", "sosoooo", "ldldldld");
// console.log(d);
// console.log(t);
// console.log(f);
// console.log(y);
