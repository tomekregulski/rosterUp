const fs = require("fs");

const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "roster.html");

function renderHTML(teamArray, OUTPUT_DIR) {
  let HTML = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css" />
            <title>Team Roster</title>
        </head>
        <body>
            <header>
                <h1>Team Roster</h1>
            </header>
            <main>`;

  teamArray.forEach((employee) => {
    console.log(employee);
    HTML += `
        <section class="card">
            <div class="name">
                <h2>${employee.name}</h2>
                <span>${getRole(employee)}</span>
            </div>
            <div class="employee-info">
                <div class="id">
                    <span>ID: </span>
                    <span>${employee.idNum}</span>
                </div>
                <div class="email">
                    <span>Email: </span>
                    <span><a href="mailto:${employee.email}">${
      employee.email
    }</a></span>
                </div>
                <div class="extra">
                    ${getOther(employee)}
                </div>
            </div>
        </section>
        `;
  });

  HTML += `</main>
    </body>
    </html>`;

  generateMainHtml(HTML, OUTPUT_DIR);
}

function getRole(employee) {
  console.log("3");
  console.log(employee.role);
  switch (employee.role) {
    case "Manager":
      return `<h3>${employee.role}<h3>`;
    case "Engineer":
      return `<h3>${employee.role}<h3>`;
    case "Intern":
      return `<h3>${employee.role}<h3>`;
  }
}

function getOther(employee) {
  switch (employee.role) {
    case "Manager":
      console.log(employee.role);
      return `<span><a href="tel:+${employee.phone}">${employee.phone}</a></span>
      `;
    case "Engineer":
      console.log(employee.role);
      return `<span><a href="https://github.com/${employee.github}">github.com/${employee.github}</a></span>
      `;
    case "Intern":
      console.log(employee.role);
      return `<span>${employee.school}</span>`;
  }
}

function generateMainHtml(html, filePath) {
  console.log("4 - Finishing your website!🙌💫💥");
  const dir = path.join(filePath, "dist");
  fs.mkdir(dir, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(dir);
    fs.writeFileSync("roster.html", html);
  });
}

module.exports.renderHTML = renderHTML;
//   `<!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="style.css" />
//         <title>${questions.companyName} - ${questions.teamProjectName}</title>
//     </head>
//     <body>
//         <header>
//             <h1>${questions.companyName}</h1>
//         </header>
//         <main>
//             <section id="overview">
//                 <div id="company">
//                 <h2>Our Mission</h2>
//                 <p>${questions.companyDesc}</p>
//                 </div>
//                 <div id="team">
//                 <h2>Our Team</h2>
//                 <p>${questions.teamOverview}</p>
//                 </div>
//             </section>
//             <section id="mgrProfile">
//             <div>
//                 <h2>${questions.mgrName}</h2>
//                 <p>${questions.mgrID}</p>
//                 <p>${questions.mgrEmail}</p>
//                 <p>${questions.mgrPhone}</p>
//             </div>
//         </section>
//         <section id="engProfile">
//         </section>
//         <section id="intProfile">
//         </section>
//         </main>
//     </body>
// </html>`;

// const generateEngHtml = (name, idNum, email, git) =>
//   console.log(`<div class="engDetails">
//         <h2>${name}</h2>
//         <p>${idNum}</p>
//         <p>${email}</p>
//         <p>${git}</p>
//     </div>`);

// const generateIntHtml = (name, idNum, email, school) =>
//   console.log(`<div class="engDetails">
//         <h2>${name}</h2>
//         <p>${idNum}</p>
//         <p>${email}</p>
//         <p>${school}</p>
//     </div>`);

// module.exports.generateMainHtml = generateMainHtml;
// module.exports.generateEngHtml = generateEngHtml;
// module.exports.generateIntHtml = generateIntHtml;
