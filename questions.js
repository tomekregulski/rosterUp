const html = [
    {
      type: "input",
      name: "comapnyName",
      message: "What is the comapny name?",
    },
    {
      type: "input",
      name: "companyDesc",
      message: "What is the company description?",
    },
    {
      type: "input",
      name: "teamOverview",
      message: "What is the team overview?",
    },
  ];

const manager = [
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
];

const engineer = [
    {
      type: "input",
      name: "engName",
      message: "What is the engineer's name",
    },
    {
      type: "input",
      name: "engID",
      message: "What is the engineer's company ID?",
    },
    {
      type: "input",
      name: "engEmail",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "engGit",
      message: "What is the engineer's gitHub url?",
    },
  ];

  const intern = [
    {
      type: "input",
      name: intgName",
      message: "What is the intern's name",
    },
    {
      type: "input",
      name: "intID",
      message: "What is the intern's company ID?",
    },
    {
      type: "input",
      name: "intEmail",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "intSchool",
      message: "What is the intern's school?",
    },
  ];

module.exports.teamMember = teamMember;
module.exports.mgr = mgr;
module.exports.engineer = engineer;
module.exports.intern = intern;