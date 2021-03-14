
let sphereSurfaceArea = (r) => 4 * (Math.PI) * r * r;
let sphereVolume = (r) => (4 / 3) * (Math.PI) * r * r * r;
let cubeSurfaceArea = (a) => 6 * a * a;
let cubeVolume = (a) => a * a * a;

let rectangularprizmSurfaceArea = (a, b, c) => (2 * a * b) + (2 * b * c) + (2 * c * a);
let rectangularprizmVolume = (a, b, c) => a * b * c;

let cylinderSurfaceArea = (r, h) => (2 * Math.PI * r * r) + (2 * Math.PI * r * h)
let cylinderVolume = (r, h) => (Math.PI * r * r * h);

let coneSurfaceArea = (r, h, l) => (Math.PI * r * l) + (Math.PI * r * r)
let coneVolume = (r, h) => (1 / 3) * Math.PI * r * r * h;

module.exports = { sphereSurfaceArea, sphereVolume, cubeSurfaceArea, cubeVolume, rectangularprizmSurfaceArea, rectangularprizmVolume, cylinderSurfaceArea, cylinderVolume, coneSurfaceArea, coneVolume };