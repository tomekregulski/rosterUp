const fs = require("fs");
const questions = require("./questions.js");
const inquirer = require("inquirer");

const generateHTML = (questions) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${questions.companyName} - ${questions.teamProjectName} Roster</title>
</head>
<body>
    <header>
        <h1>${questions.companyName}</h1>
    </header>
    <main>
        <section id="overview">
            <div>
                <p>${questions.companyDesc}</p>
                <p>${teamOverview}</p>
            </div>
        </section>
        <section id="team">
            <div id="manager">
                <p>${questions.mgrName}</p>
                <p>${questions.mgrID}</p>
                <p>${questions.mgrEmail}</p>
                <p>${questions.mgrPhone}</p>
            </div>
            <div id="engineer">
                <p>${questions.engName}</p>
                <p>${questions.engID}</p>
                <p>${questions.engEmail}</p>
                <p>${questions.engGit}</p>
            </div>
            <div id="intern">
                <p>${questions.intName}</p>
                <p>${questions.intID}</p>
                <p>${questions.intEmail}</p>
                <p>${questions.intSchool}</p>
            </div>
    </main>

</body>
</html>`;
inquirer.prompt(questions).then((data) => {
  const filename = `${teamProjectName
    .toLowerCase()
    .split(" ")
    .join("")}-roster.html`;
  fs.writeFile(filename, generateHTML(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});
