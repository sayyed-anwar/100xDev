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
