const generateMainHtml = (questions) =>
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
      </section>
      <section id="intProfile">
      </section>
    </main>
</body>
</html>`;

const generateEngHtml = (name, idNum, email, git) =>
  console.log(`<div class="engDetails">
        <h2>${name}</h2>
        <p>${idNum}</p>
        <p>${email}</p>
        <p>${git}</p>
    </div>`);

const generateIntHtml = (name, idNum, email, school) =>
  console.log(`<div class="engDetails">
        <h2>${name}</h2>
        <p>${idNum}</p>
        <p>${email}</p>
        <p>${school}</p>
    </div>`);

module.exports.generateMainHtml = generateMainHtml;
module.exports.generateEngHtml = generateEngHtml;
module.exports.generateIntHtml = generateIntHtml;
