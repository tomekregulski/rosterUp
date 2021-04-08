// // require Employee module - which we will be testing in this suite
// const Intern = require("../lib/Intern");
// const Employee = require("../lib/Employee");

// // describe Intern
// describe("Intern", () => {
//   // describe Initialization
//   describe("Initialization", () => {
//     // test that it returns an object that is an instance of the Intern class when called with the new keyword
//     // call the constructor
//     // check that it is an instance of Intern
//     it("returns an object that is an instance of the Engineer class when called with the new keyword", () => {
//       const intern = new Intern();
//       expect(intern instanceof Intern).toBe(true);
//     });

//     // test that it sets name property based on constructor argument
//     // define a name for the test
//     // call constructor with the test name
//     // check that the resulting name property is equal to the test name
//     it("it sets the name property based on constructor argument", () => {
//       const name = "Giselle";
//       const intern = new Intern(name);

//       expect(intern.name).toBe(name);
//     });

//     // test that it sets id property based on constructor argument
//     // define an id for the test
//     // call constructor with an empty string for the name arg and the test id
//     // check that the resulting id property is equal to the test id
//     it("it sets the id property based on constructor argument", () => {
//       const idNum = 1;
//       const intern = new Intern("", idNum);

//       expect(intern.idNum).toBe(idNum);
//     });

//     // test that it sets email property based on constructor argument
//     // define an email for the test
//     // call constructor with an empty string for the name arg, any number for the id arg, and the test email
//     // check that the resulting email property is equal to the test email
//     it("it sets the email property based on constructor argument", () => {
//       const email = "test@email.com";
//       const intern = new Intern("", 0, email);

//       expect(intern.email).toBe(email);
//     });
//   });

//   // describe getName
//   describe("getName", () => {
//     // test that it returns the name property when the getName() method is called
//     // define a name for the test
//     // call constructor with the test name
//     // call the getName() method and check that the result equals the test name
//     it("returns the name property when the getName() method is called", () => {
//       const name = "Obi";
//       const intern = new Intern(name);

//       expect(intern.getName()).toBe(name);
//     });
//   });

//   // describe getId
//   describe("getId", () => {
//     // test that it returns the id property when the getId() method is called
//     // define an id for the test
//     // call constructor with an empty string for the name arg and the test id
//     // call the getId() method and check that the result equals the test id
//     it("returns the id property when the getId() method is called", () => {
//       const idNum = 1;
//       const intern = new Intern("", idNum);

//       expect(intern.getId()).toBe(idNum);
//     });
//   });

//   // desribe getEmail
//   describe("getEmail", () => {
//     // test that it returns the email property when the getEmail() method is called
//     // define an email for the test
//     // call constructor with an empty string for the name arg, any number for the id arg, and the test email
//     // call the getEmail() method and check that the result equals the test email
//     it("returns the email property when the getEmail() method is called", () => {
//       const email = "test@email.com";
//       const intern = new Intern("", 0, email);

//       expect(intern.getEmail()).toBe(email);
//     });
//   });

//   // decsribe getRole
//   describe("getRole", () => {
//     // test that it returns 'Intern' when the getRole() method is called
//     // define an email for the test
//     // call constructor with an empty string for the name arg, any number for the id arg, and the test email
//     // call the getName() method and check that the result equals the test email
//     it("returns 'Intern' when the getRole() method is called", () => {
//       const intern = new Intern();

//       expect(intern.getRole()).toBe("Intern");
//     });
//   });
// });
