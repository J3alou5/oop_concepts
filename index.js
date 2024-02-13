class Person {
    constructor() {
      this.firstname = "";
      this.lastname = "";
      this.age = 0;
    }
  }
  
  class Student {
    constructor(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }
  }
  
  // Person objektide loomine ja määramine
  const person1 = new Person();
  person1.firstname = "Liina";
  person1.lastname = "Kask";
  person1.age = 25;
  
  const person2 = new Person();
  person2.firstname = "Mart";
  person2.lastname = "Võrk";
  person2.age = 22;
  
  const person3 = new Person();
  person3.firstname = "Kadri";
  person3.lastname = "Tamm";
  person3.age = 19;
  
  // Student objektide loomine
  const student1 = new Student("Joonas", "Nurme", 20);
  const student2 = new Student("Eva", "Lepik", 21);
  const student3 = new Student("Siim", "Kivi", 22);
  
console.log(`Person 1: ${person1.firstname} ${person1.lastname}, Age: ${person1.age}`);
console.log(`Person 2: ${person2.firstname} ${person2.lastname}, Age: ${person2.age}`);
console.log(`Person 3: ${person3.firstname} ${person3.lastname}, Age: ${person3.age}`);

console.log(`Student 1: ${student1.firstname} ${student1.lastname}, Age: ${student1.age}`);
console.log(`Student 2: ${student2.firstname} ${student2.lastname}, Age: ${student2.age}`);
console.log(`Student 3: ${student3.firstname} ${student3.lastname}, Age: ${student3.age}`);
