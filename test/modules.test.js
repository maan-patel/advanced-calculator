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

test('sequence helpers cover arithmetic, geometric, and interest formulas', () => {
    assert.equal(calculator.arithmeticCommonDifference(11, 8), 3);
    assert.equal(calculator.arithmeticNthTerm(5, 4, 3), 14);
    assert.equal(calculator.arithmeticSeriesSum(2, 10, 5), 30);
    assert.equal(calculator.geometricCommonRatio(18, 6), 3);
    assert.equal(calculator.geometricNthTerm(2, 5, 3), 162);
    assert.equal(calculator.geometricSeriesSum(2, 3, 4), 80);
    assert.equal(calculator.geometricSeriesSum(7, 1, 4), 28);
    assert.equal(calculator.simpleInterestFutureValue(1000, 0.05, 2), 1100);
    assert.equal(calculator.compoundInterestFutureValue(1000, 0.05, 2), 1102.5);
});

test('statistics and probability helpers cover missing formulas', () => {
    assert.equal(calculator.relativeFrequency(12, 48), 0.25);
    assert.equal(calculator.sampleMean([2, 4, 6, 8]), 5);
    assert.equal(calculator.groupedMean([10, 20, 30], [1, 2, 1]), 20);
    assert.equal(calculator.meanFromRelativeFrequencies([10, 20, 30], [0.25, 0.5, 0.25]), 20);
    assert.equal(calculator.median([9, 1, 5]), 5);
    assert.equal(calculator.median([9, 1, 5, 7]), 6);
    assert.ok(Math.abs(calculator.sumOfDeviationsFromMean([2, 4, 6]) - 0) < 1e-12);
    assert.equal(calculator.sumSquaredDeviations([2, 4, 6]), 8);
    assert.equal(calculator.groupedSumSquaredDeviations([10, 20, 30], [1, 2, 1]), 200);
    assert.equal(calculator.sampleVariance([2, 4, 6]), 4);
    assert.equal(calculator.sampleStandardDeviation([2, 4, 6]), 2);
    assert.equal(calculator.probabilityMean([0, 1], [0.25, 0.75]), 0.75);
    assert.ok(Math.abs(calculator.probabilityStandardDeviation([0, 1], [0.25, 0.75]) - Math.sqrt(0.1875)) < 1e-12);

    assert.equal(calculator.factorial(5), 120);
    assert.equal(calculator.complementProbability(0.4), 0.6);
    assert.equal(calculator.unionProbability(0.5, 0.4, 0.2), 0.7);
    assert.equal(calculator.conditionalProbability(0.2, 0.5), 0.4);
    assert.equal(calculator.independentIntersection(0.5, 0.4), 0.2);
    assert.equal(calculator.permutations(6, 2), 30);
    assert.equal(calculator.permutations(4), 24);
    assert.equal(calculator.permutationsWithRepetition(5, 3), 125);
    assert.equal(calculator.combinations(5, 4), 5);
    assert.ok(Math.abs(calculator.binomialProbability(10, 3, 0.6) - 0.042467328000000006) < 1e-12);
});

test('vector and complex number helpers cover missing formulas', () => {
    assert.deepEqual(calculator.vectorFromPoints2D(3, 2, 4, 5), [1, 3]);
    assert.equal(calculator.vectorMagnitude2D(3, 4), 5);
    assert.equal(calculator.vectorMagnitudeSquared2D(3, 4), 25);
    assert.deepEqual(calculator.translatePoint2D(4, 5, 3, 2), [7, 7]);
    assert.deepEqual(calculator.addVectors2D(6, 3, 2, 1), [8, 4]);
    assert.deepEqual(calculator.scalarMultiplyVector2D(2, 3, 4), [6, 8]);
    assert.equal(calculator.dotProduct2D(2, 1, 0, 3), 3);
    assert.equal(calculator.angleBetweenVectors2D(1, 0, 0, 1), Math.PI / 2);

    assert.deepEqual(calculator.complex(2, 3), { real: 2, imaginary: 3 });
    assert.deepEqual(calculator.complexConjugate(2, 3), { real: 2, imaginary: -3 });
    assert.deepEqual(calculator.complexNegative(2, 3), { real: -2, imaginary: -3 });
    assert.deepEqual(calculator.addComplex(2, 3, 4, 5), { real: 6, imaginary: 8 });
    assert.deepEqual(calculator.subtractComplex(2, 3, 4, 5), { real: -2, imaginary: -2 });
    assert.deepEqual(calculator.multiplyComplex(2, 3, 4, 5), { real: -7, imaginary: 22 });
    assert.deepEqual(calculator.divideComplex(2, 3, 4, 5), { real: 23 / 41, imaginary: 2 / 41 });
    assert.deepEqual(calculator.complexInverse(2, 3), { real: 2 / 13, imaginary: -3 / 13 });
    assert.equal(calculator.complexModulus(3, 4), 5);
    assert.equal(calculator.complexArgument(0, 1), Math.PI / 2);
    assert.ok(Math.abs(calculator.complexFromPolar(2, Math.PI / 3).real - 1) < 1e-12);
    assert.ok(Math.abs(calculator.complexFromPolar(2, Math.PI / 3).imaginary - Math.sqrt(3)) < 1e-12);
});
