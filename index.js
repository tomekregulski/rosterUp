const fs = require("fs");
const questions = require("./questions.js");
const engineerQuestions = require("./engineerQuestions.js");
const internQuestions = require("./internQuestions.js");
const htmlTemplate = require("./htmlTemplate");
const menu = require("./menu.js");
const inquirer = require("inquirer");

inquirer.prompt(questions).then((data) => {
  const filename = `roster.html`;
  fs.writeFile(filename, htmlTemplate.generateMainHtml(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
  menuPrompt();
});

function menuPrompt() {
  inquirer.prompt(menu).then((answer) => {
    if (answer.what == "Add an engineer") {
      engineerQuestion();
    } else if (answer.what == "Add an intern") {
      internQuestion();
    } else {
      console.log(answer.what);
    }
  });
}

function engineerQuestion() {
  inquirer.prompt(engineerQuestions).then((engineerQuestionsAnswers) => {
    let name = engineerQuestionsAnswers.engName;
    let idNum = engineerQuestionsAnswers.engID;
    let email = engineerQuestionsAnswers.engEmail;
    let github = engineerQuestionsAnswers.engGit;
    let newEng = new Engineer(name, idNum, email, github);
  });
}

function internQuestion() {
  inquirer.prompt(internQuestions).then((internQuestionsAnswers) => {
    let name = internQuestionsAnswers.intName;
    let idNum = internQuestionsAnswers.intID;
    let email = internQuestionsAnswers.intEmail;
    let school = internQuestionsAnswers.intSchool;
    let newInt = new Intern(name, idNum, email, school);
  });
}

class Employee {
  constructor(name, idNum, email) {
    this.name = name;
    this.idNum = idNum;
    this.email = email;
  }
}

class Manager extends Employee {
  constructor(name, idNum, email, phone) {
    super(name, idNum, email);
    this.phone = phone;
    // const filename = `${this.name}.html`;
    // fs.writeFile(filename, generateEngineer(this), (err) =>
    //   err ? console.log(err) : console.log("Success!")
    // );
  }
}

class Engineer extends Employee {
  constructor(name, idNum, email, github) {
    super(name, idNum, email);
    this.github = github;
    console.log(this);
    console.log(`${this.name}created`);
    console.log(this.name);
    // const filename = `${this.name}.html`;
    // fs.writeFile(filename, generateEngHtml(this), (err) =>
    //   err ? console.log(err) : console.log("Success!")
    // );
    // generateEngineer(this.name);
    htmlTemplate.generateEngHtml(
      this.name,
      this.idNum,
      this.email,
      this.github
    );
    menuPrompt();
  }
}

class Intern extends Employee {
  constructor(name, idNum, email, school) {
    super(name, idNum, email);
    this.school = school;
    console.log(this);
    console.log(`${this.name}created`);
    console.log(this.name);
    // const filename = `${this.name}.html`;
    // fs.writeFile(filename, generateIntHtml(this), (err) =>
    //   err ? console.log(err) : console.log("Success!")
    // );
    htmlTemplate.generateIntHtml(
      this.name,
      this.idNum,
      this.email,
      this.school
    );
    menuPrompt();
  }
}
