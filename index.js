const fs = require("fs");
const questions = require("./questions.js");
const questionTwo = require("./questionTwo.js");
const questionThree = require("./questionThree.js");
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
    console.log(data.test);
    if (data.test == "yes") {
      secondQuestion(data);
    } else {
      thirdQuestion(data);
    }
  });
}

function secondQuestion(data) {
  inquirer.prompt(questionTwo).then((questionTwoAnswers) => {
    console.log(data.test);
    console.log(questionTwoAnswers.test);
  });
}

function thirdQuestion(data) {
  inquirer.prompt(questionThree).then((questionThreeAnswers) => {
    console.log(data.test);
    console.log(questionThreeAnswers.test);
  });
}

firstQuestion();
