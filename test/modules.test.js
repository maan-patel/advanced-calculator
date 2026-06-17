const assert = require('node:assert/strict');
const test = require('node:test');

const calculator = require('../');

test('conversion helpers cover representative units', () => {
    assert.equal(calculator.metreToKilo(2500), 2.5);
    assert.equal(calculator.kiloToMetre(2.5), 2500);
    assert.equal(calculator.feetToMeters(10), 3.048);
    assert.equal(calculator.yardsToFeet(3), 9);
    assert.equal(calculator.toFahrenheit(0), 32);
    assert.equal(calculator.toCelsius(212), 100);
});

test('geometry helpers handle common coordinate operations', () => {
    assert.equal(calculator.pythagorean(3, 4), 5);
    assert.equal(calculator.pythagoreanForA(4, 5), 3);
    assert.equal(calculator.pythagoreanForB(3, 5), 4);
    assert.equal(calculator.distanceBetweenTwoPoints(0, 0, 3, 4), 5);
    assert.equal(calculator.midpoint(0, 0, 4, 6), '(2, 3)');
    assert.equal(calculator.equationPlane(1, 0, 0, 0, 1, 0, 0, 0, 1), '1x + 1y + 1z + -1= 0');
    assert.equal(calculator.isCoplanar(1, 0, 0, 0, 1, 0, 0, 0, 1, 0.25, 0.25, 0.5), true);
    assert.equal(calculator.distanceBetweenPointAndPlane(0, 0, 3, 0, 0, 1, -1), 'Perpendicular distance is 2');
    assert.equal(calculator.sumInteriorAnglesOfRegularPolygon(6), 720);
    assert.equal(calculator.sumInteriorAnglesOfPolygon(4), 360);
    assert.equal(calculator.interiorAngleOfRegularPolygon(6), 120);
    assert.equal(calculator.regularPolygonInteriorAngle(5), 108);
    assert.equal(calculator.straightLineVectorForm(1, 2, 3, 4, 5, 6), '(x, y, z) = (1, 2, 3) + k(4, 5, 6), k in R');
    assert.equal(calculator.straightLineCartesianForm(1, 2, 3, 4, 5, 6), '(x - 1) / 4 = (y - 2) / 5 = (z - 3) / 6');
    assert.equal(calculator.straightLineParametricForm(1, 2, 3, 4, 5, 6), 'x = 1 + 4k, y = 2 + 5k, z = 3 + 6k, k in R');
    assert.equal(calculator.planePointNormalForm(2, 3, 4, 5, 6, 7), '2(x - 5) + 3(y - 6) + 4(z - 7) = 0');
    assert.equal(calculator.planeScalarForm(2, 3, 4, -5), '2x + 3y + 4z - 5 = 0');
    assert.equal(calculator.circleEquation(2, -3, 5), '(x - 2)^2 + (y + 3)^2 = 25');
    assert.equal(calculator.sphereEquation(1, 2, 3, 4), '(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16');
    assert.equal(calculator.ellipseEquation(1, -2, 3, 4), '((x - 1)^2 / 9) + ((y + 2)^2 / 16) = 1');
});

test('area, volume, and graph helpers stay stable', () => {
    assert.equal(calculator.trianglePerimeter(3, 4, 5), 12);
    assert.equal(calculator.trianglePerimeter(3, 4, 5, 'cm'), '12cm');
    assert.equal(calculator.triangleArea(10, 4), 20);
    assert.equal(calculator.traingleArea(10, 4), 20);
    assert.equal(calculator.circleArea(2), Math.PI * 4);
    assert.equal(calculator.circleArea(2, 'cm^2'), `${Math.PI * 4}cm^2`);
    assert.equal(calculator.squareArea(5), 25);
    assert.equal(calculator.rectanglePerimeter(3, 7), 20);
    assert.equal(calculator.parallelogramArea(8, 3), 24);
    assert.equal(calculator.trapezoidArea(4, 6, 10), 32);
    assert.equal(calculator.trapezoidArea(4, 6, 10, 'm^2'), '32m^2');

    assert.ok(Math.abs(calculator.sphereVolume(3) - ((4 / 3) * Math.PI * 27)) < 1e-12);
    assert.equal(calculator.cubeSurfaceArea(2), 24);
    assert.equal(calculator.rectangularprizmVolume(2, 3, 4), 24);
    assert.equal(calculator.cylinderVolume(2, 5), Math.PI * 20);
    assert.equal(calculator.coneVolume(3, 4), 12 * Math.PI);

    assert.equal(calculator.slope(8, 2), 4);
    assert.equal(calculator.m(5, 1, 4, 2), 2);
    assert.equal(calculator.slopeFromPoints(5, 1, 4, 2), 2);
    assert.equal(calculator.discriminant(1, -3, 2), 1);
    assert.deepEqual(calculator.factors(12), [1, 2, 3, 4, 6, 12]);
    assert.deepEqual(calculator.factors(-12), [1, 2, 3, 4, 6, 12]);
    assert.deepEqual(calculator.factors(0), []);
    assert.equal(calculator.quad(1, -3, 2), 'x1 = 2, x2 = 1');
    assert.equal(calculator.quadraticFormula(1, 2, 5), 'x1 = -1.00 + 2.00i, x2 = -1.00 - 2.00i');
    assert.equal(calculator.vertexParabolaStandardForm(1, -4, 3), '2, -1');
    assert.equal(calculator.vertexParabolaVertexForm(2, -1), '2, -1');
    assert.equal(calculator.concavity(-2), 'Concave Down');
});
