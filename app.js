const Person = require('./Person');
const Student = require('./Student');
const School = require('./School');
const Course = require('./Course');


const alice = new Person("Alice Johnson", 30);
const bob = new Student("Bob Smith", 20, 1001);
const springfieldHigh = new School("Springfield High School");
const introToProgramming = new Course("Introduction to Programming", "Mr. Anderson");


springfieldHigh.addStudent(bob);
introToProgramming.addStudent(bob);

console.log(springfieldHigh);
console.log(introToProgramming);
