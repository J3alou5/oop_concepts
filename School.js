class School {
    constructor(name) {
      this.name = name;
      this.students = [];
      this.courses = [];
    }
    addStudent(student) {
        this.students.push(student);
      }
    
      addCourse(course) {
        this.courses.push(course);
      }
    
  }
  
  module.exports = School;
  