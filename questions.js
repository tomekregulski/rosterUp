module.exports = [
  {
    type: "input",
    name: "companyName",
    message: "What is the comapny name?",
  },
  {
    type: "input",
    name: "companyDesc",
    message: "What is the company description?",
  },
  {
    type: "input",
    name: "teamProjectName",
    message: "What is the team's project name?",
  },
  {
    type: "input",
    name: "teamOverview",
    message: "What is the team overview?",
  },
  {
    type: "input",
    name: "mgrName",
    message: "What is the team manager's name",
  },
  {
    type: "input",
    name: "mgrID",
    message: "What is the manager's company ID?",
  },
  {
    type: "input",
    name: "mgrEmail",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "mgrPhone",
    message: "What is the manager's company phone number?",
  },
  {
    type: "list",
    name: "test",
    message: "What would you like to do?",
    choices: ["Add an engineer", "Add an intern", "Finish"],
  },
];
