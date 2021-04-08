const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, idNum, email, github) {
    super(name, idNum, email, "Engineer");
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  //   getRole() {
  //     return "Engineer";
  //   }
}

module.exports = Engineer;
