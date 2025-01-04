class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`The rectangle is ${this.color}`);
  }
}

let rect = new Rectangle(5, 10, "blue");

console.log(rect.area());

rect.paint();

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  paint() {
    console.log(`Painting with color:  ${this.color}`);
  }
}

const circle = new Circle(5,  "blue");

console.log("Area : ", circle.area());

circle.paint();
