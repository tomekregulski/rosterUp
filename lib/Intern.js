const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, idNum, email, school) {
    super(name, idNum, email);
    this.school = school;
  }
  getSchool() {
    return this.github;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
