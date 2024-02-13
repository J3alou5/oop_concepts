class Course {
    constructor(title, teacher) {
      this.title = title;
      this.teacher = teacher;
      this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
      }
  }
  
  module.exports = Course;
  