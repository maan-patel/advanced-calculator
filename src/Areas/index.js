function withUnit(value, unit = "") {
  return unit ? `${value}${unit}` : value;
}

let trianglePerimeter = (a, b, c, unit = "") => withUnit(a + b + c, unit);
let triangleArea = (b, h, unit = "") => withUnit(0.5 * b * h, unit);
let traingleArea = triangleArea;

let circlePerimeter = (r, unit = "") => withUnit(2 * Math.PI * r, unit);
let circleArea = (r, unit = "") => withUnit(Math.PI * r * r, unit);

let squarePerimeter = (a, unit = "") => withUnit(4 * a, unit);
let squareArea = (a, unit = "") => withUnit(a * a, unit);

let rectanglePerimeter = (a, b, unit = "") => withUnit(2 * (a + b), unit);
let rectangleArea = (a, b, unit = "") => withUnit(a * b, unit);

let parallelogramPerimeter = function (a, b, unit = "") {
  return withUnit(2 * (a + b), unit);
};

let parallelogramArea = (b, h, unit = "") => withUnit(b * h, unit);

let trapezoidPerimeter = (a, b1, b2, unit = "") => withUnit(2 * a + b1 + b2, unit);
let trapezoidArea = (h, b1, b2, unit = "") => withUnit(0.5 * (b1 + b2) * h, unit);

module.exports = {
  trianglePerimeter,
  triangleArea,
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
