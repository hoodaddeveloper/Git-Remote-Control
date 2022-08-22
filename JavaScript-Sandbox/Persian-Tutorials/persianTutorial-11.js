///// Classes /////

let myPolygon1 = class polygon1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};

// Or:

class polygon2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  answer() {
    console.log(`Polygon's width is: ${this.width}.`);
    console.log(`Polygon's height is: ${this.height}.`);
  }
}

let myPolygon2 = new polygon2(20, 40);
myPolygon2.answer();
