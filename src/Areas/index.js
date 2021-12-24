let trianglePerimeter = (a, b, c, unit = "") => a + b + c + unit; //I can require units
let traingleArea = (b, h, unit = "") => 12 * b * h + unit;

let circlePerimeter = (r, unit = "") => 2 * Math.PI * r + unit;
let circleArea = (r, unit = "") => Math.PI * r * r + unit;

let squarePerimeter = (a, unit = "") => 4 * a + unit;
let squareArea = (a, unit = "") => a * a + unit;

let rectanglePerimeter = (a, b, unit = "") => 2 * (a + b) + unit;
let rectangleArea = (a, b, unit = "") => a * b + unit;

let parallelogramPerimeter = function (a, b, unit = "") {
  return 2 * (a + b) + unit;
};

let parallelogramArea = (b, h, unit = "") => b * h + unit;

let trapezoidPerimeter = (a, b1, b2, unit = "") => 2 * a + b1 + b2 + unit;
let trapezoidArea = (h, b1, b2, unit = "") => 0.5 * (b1 + b2) * h;

module.exports = {
  trianglePerimeter,
  traingleArea,
  circlePerimeter,
  circleArea,
  squarePerimeter,
  squareArea,
  rectanglePerimeter,
  rectangleArea,
  parallelogramPerimeter,
  parallelogramArea,
  trapezoidPerimeter,
  trapezoidArea,
};
