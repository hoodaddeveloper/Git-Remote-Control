///// Classes /////

let myPolygon1 = class polygon1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};

// Or:

class polygon2 { // this is a block scope
  constructor(width, height) { // this is a constructor
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

console.log(myPolygon2 instanceof polygon2); 