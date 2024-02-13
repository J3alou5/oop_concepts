class Student {
    #name;
    #id;
    #status = "Active";
  
    constructor(name, id) {
      this.#name = name;
      this.#id = id;
    }
  
    getId() {
      return this.#id;
    }
  
    setName(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  
    setStatus(status) {
      const validStatuses = ["Active", "Expelled", "Finished", "Inactive"];
      if (validStatuses.includes(status)) {
        this.#status = status;
      }
    }
  
    getStatus() {
      return this.#status;
    }
  }
  
  // Näite kasutamine
  const student = new Student("John Doe", 12345);
  console.log(student.getName());
  console.log(student.getId()); 
  