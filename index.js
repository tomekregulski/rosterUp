const fs = require("fs");
const questions = require("./questions.js");
const mgrQuestions = require("./mgrQuestions.js");
const engQuestions = require("./engQuestions.js");
const intQuestions = require("./intQuestions.js");
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
    </main>
</body>
</html>`;
inquirer.prompt(questions).then((data) => {
  const filename = `roster.html`;
  fs.writeFile(filename, generateHTML(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});
