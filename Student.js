const Person = require('./Person');

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  // Additional methods for Student
}

module.exports = Student;
