const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, idNum, email, phone) {
    super(name, idNum, email, "Manager");
    this.phone = phone;
  }
  getPhone() {
    return this.phone;
  }
  //   getRole() {
  //     return "Manager";
  //   }
}

module.exports = Manager;
