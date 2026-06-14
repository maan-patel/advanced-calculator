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
    assert.equal(calculator.discriminant(1, -3, 2), 1);
    assert.equal(calculator.quad(1, -3, 2), 'x1 = 2, x2 = 1');
    assert.equal(calculator.vertexParabolaStandardForm(1, -4, 3), '2, -1');
    assert.equal(calculator.vertexParabolaVertexForm(2, -1), '2, -1');
    assert.equal(calculator.concavity(-2), 'Concave Down');
});
