class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    getArea() {
      throw new Error("Method 'getArea()' must be implemented.");
    }
  }
  
class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Square extends Shape {
    constructor(color, side) {
      super(color);
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
  }


const circle = new Circle("red", 5);
const square = new Square("blue", 4);

