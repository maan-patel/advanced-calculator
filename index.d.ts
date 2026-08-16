declare namespace calculator {
  type EvaluateResult = number | 'Invalid input';

  interface ExponentTerm {
    base: number;
    exponent: number;
  }

  interface RootTerm {
    radicand: number;
    coefficient?: number;
  }

  interface ComplexNumber {
    real: number;
    imaginary: number;
  }

  function evaluate(expression: string): EvaluateResult;
  function calculate(expression: string): EvaluateResult;
  function calc(expression: string): EvaluateResult;
  function add(...values: number[]): number;
  function sub(first: number, ...values: number[]): number;
  function multiply(...values: number[]): number;
  function divide(first: number, ...values: number[]): number;

  function squarePerimeter(a: number, unit?: string): string | number;
  function squareArea(a: number, unit?: string): string | number;
  function rectanglePerimeter(a: number, b: number, unit?: string): string | number;
  function rectangleArea(a: number, b: number, unit?: string): string | number;
  function parallelogramPerimeter(a: number, b: number, unit?: string): string | number;
  function parallelogramArea(b: number, h: number, unit?: string): string | number;
  function circlePerimeter(r: number, unit?: string): string | number;
  function circleArea(r: number, unit?: string): string | number;
  function trianglePerimeter(a: number, b: number, c: number, unit?: string): string | number;
  function triangleArea(b: number, h: number, unit?: string): string | number;
  function traingleArea(b: number, h: number, unit?: string): string | number;
  function trapezoidPerimeter(a: number, b1: number, b2: number, unit?: string): string | number;
  function trapezoidArea(h: number, b1: number, b2: number, unit?: string): string | number;

  function sphereSurfaceArea(r: number): number;
  function sphereVolume(r: number): number;
  function cubeSurfaceArea(a: number): number;
  function cubeVolume(a: number): number;
  function rectangularprizmSurfaceArea(a: number, b: number, c: number): number;
  function rectangularprizmVolume(a: number, b: number, c: number): number;
  function cylinderSurfaceArea(r: number, h: number): number;
  function cylinderVolume(r: number, h: number): number;
  function coneSurfaceArea(r: number, h: number, l: number): number;
  function coneVolume(r: number, h: number): number;

  function eulerPolyhedralforF(E: number, V: number): number;
  function eulerPolyhedralforV(E: number, F: number): number;
  function eulerPolyhedralforE(F: number, V: number): number;
  function pythagorean(sideA: number, sideB: number): number;
  function pythagoreanForA(b: number, c: number): number;
  function pythagoreanForB(a: number, c: number): number;
  function distanceBetweenTwoPoints(x1: number, y1: number, x2: number, y2: number): number;
  function midpoint(x1: number, y1: number, x2: number, y2: number): string;
  function equationPlane(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): string;
  function isCoplanar(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x: number, y: number, z: number): boolean;
  function distanceBetweenPointAndPlane(x1: number, y1: number, z1: number, a: number, b: number, c: number, d: number): string;
  function sumInteriorAnglesOfRegularPolygon(n: number): number;
  function sumInteriorAnglesOfPolygon(n: number): number;
  function interiorAngleOfRegularPolygon(n: number): number;
  function regularPolygonInteriorAngle(n: number): number;
  function straightLineVectorForm(x0: number, y0: number, z0: number, u1: number, u2: number, u3: number): string;
  function straightLineCartesianForm(x0: number, y0: number, z0: number, u1: number, u2: number, u3: number): string;
  function straightLineParametricForm(x0: number, y0: number, z0: number, u1: number, u2: number, u3: number): string;
  function planePointNormalForm(n1: number, n2: number, n3: number, x0: number, y0: number, z0: number): string;
  function planeScalarForm(n1: number, n2: number, n3: number, d: number): string;
  function circleEquation(x0: number, y0: number, r: number): string;
  function sphereEquation(x0: number, y0: number, z0: number, r: number): string;
  function ellipseEquation(h: number, k: number, a: number, b: number): string;

  function multiplyExponents(args: ExponentTerm[]): number;
  function divideExponents(args: ExponentTerm[]): number;
  function negativeExponents(a: number, n: number): number;
  function fractionalExponents(a: number, p: number, q: number): number;
  function powerOfPower(a: number, m: number, p: number): number;
  function x10(num: number, exp: number): string;

  function root(base: number, exp: number): number;
  function multiplyRoot(args: RootTerm[]): number;
  function divideRoot(args: RootTerm[]): number;
  function addRoot(args: RootTerm[]): number;
  function subtractRoot(args: RootTerm[]): number;
  function exponentRoot(x: number, n: number, p: number): number;
  function radical(x: number, n: number, p: number): number;
  function exponentiation(a: number, m: number, n: number): number;

  function slope(rise: number, run: number): number;
  function m(y2: number, y1: number, x2: number, x1: number): number;
  function slopeFromPoints(y2: number, y1: number, x2: number, x1: number): number;
  function yInt(m: number, b: number): string;
  function discriminant(a: number, b: number, c: number): number;
  function factors(num: number): number[];
  function quad(a: number, b: number, c: number): string;
  function quadraticFormula(a: number, b: number, c: number): string;
  function vertexParabolaStandardForm(a: number, b: number, c: number): string;
  function vertexParabolaVertexForm(h: number, k: number): string;
  function concavity(a: number): string;

  function radsToDegs(rad: number): number;
  function degsToRads(deg: number): number;
  function sinA(opp: number, hip: number): number;
  function cosA(adj: number, hip: number): number;
  function tanA(opp: number, adj: number): number;
  function thetaSin(opp: number, hip: number): number;
  function thetaCos(adj: number, hip: number): number;
  function thetaTan(opp: number, adj: number): number;

  function log(a: number, b: number): number;
  function logB(a: number, x: number): number;
  function logProduct(a: number, u: number, v: number): number;
  function logQuotient(a: number, u: number, v: number): number;
  function logExponential(a: number, u: number, v: number): number;

  function arithmeticCommonDifference(uNext: number, uN: number): number;
  function arithmeticNthTerm(u1: number, n: number, r: number): number;
  function arithmeticSeriesSum(u1: number, un: number, n: number): number;
  function geometricCommonRatio(uNext: number, uN: number): number;
  function geometricNthTerm(u1: number, n: number, r: number): number;
  function geometricSeriesSum(u1: number, r: number, n: number): number;
  function simpleInterestFutureValue(principal: number, rate: number, time: number): number;
  function compoundInterestFutureValue(principal: number, rate: number, time: number): number;

  function relativeFrequency(absoluteFrequency: number, sampleSize: number): number;
  function sampleMean(values: number[]): number;
  function groupedMean(values: number[], frequencies: number[]): number;
  function meanFromRelativeFrequencies(values: number[], relativeFrequencies: number[]): number;
  function median(values: number[]): number;
  function sumOfDeviationsFromMean(values: number[]): number;
  function sumSquaredDeviations(values: number[]): number;
  function groupedSumSquaredDeviations(values: number[], frequencies: number[]): number;
  function sampleVariance(values: number[]): number;
  function sampleStandardDeviation(values: number[]): number;
  function probabilityMean(values: number[], probabilities: number[]): number;
  function probabilityStandardDeviation(values: number[], probabilities: number[]): number;

  function factorial(n: number): number;
  function complementProbability(probability: number): number;
  function unionProbability(probabilityA: number, probabilityB: number, probabilityIntersection: number): number;
  function conditionalProbability(probabilityIntersection: number, probabilityB: number): number;
  function independentIntersection(probabilityA: number, probabilityB: number): number;
  function permutations(n: number, p?: number): number;
  function permutationsWithRepetition(n: number, p: number): number;
  function combinations(n: number, p: number): number;
  function binomialProbability(n: number, k: number, p: number): number;

  function vectorFromPoints2D(x1: number, y1: number, x2: number, y2: number): [number, number];
  function vectorMagnitude2D(u1: number, u2: number): number;
  function vectorMagnitudeSquared2D(u1: number, u2: number): number;
  function translatePoint2D(a1: number, a2: number, u1: number, u2: number): [number, number];
  function addVectors2D(u1: number, u2: number, v1: number, v2: number): [number, number];
  function scalarMultiplyVector2D(k: number, u1: number, u2: number): [number, number];
  function dotProduct2D(u1: number, u2: number, v1: number, v2: number): number;
  function angleBetweenVectors2D(u1: number, u2: number, v1: number, v2: number): number;

  function complex(real: number, imaginary: number): ComplexNumber;
  function complexConjugate(real: number, imaginary: number): ComplexNumber;
  function complexNegative(real: number, imaginary: number): ComplexNumber;
  function addComplex(aReal: number, aImaginary: number, bReal: number, bImaginary: number): ComplexNumber;
  function subtractComplex(aReal: number, aImaginary: number, bReal: number, bImaginary: number): ComplexNumber;
  function multiplyComplex(aReal: number, aImaginary: number, bReal: number, bImaginary: number): ComplexNumber;
  function divideComplex(aReal: number, aImaginary: number, bReal: number, bImaginary: number): ComplexNumber;
  function complexInverse(real: number, imaginary: number): ComplexNumber;
  function complexModulus(real: number, imaginary: number): number;
  function complexArgument(real: number, imaginary: number): number;
  function complexFromPolar(modulus: number, theta: number): ComplexNumber;

  function metreToGiga(n: number): number;
  function metreToMega(n: number): number;
  function metreToKilo(n: number): number;
  function metreToHecto(n: number): number;
  function metreToCenti(n: number): number;
  function metreToMilli(n: number): number;
  function metreToMicro(n: number): number;
  function metreToNano(n: number): number;
  function gigaToMetre(n: number): number;
  function megaToMetre(n: number): number;
  function kiloToMetre(n: number): number;
  function hectoToMetre(n: number): number;
  function centiToMetre(n: number): number;
  function milliToMetre(n: number): number;
  function microToMetre(n: number): number;
  function nanoToMetre(n: number): number;
  function yardsToFeet(n: number): number;
  function feetToYards(n: number): number;
  function yardsToInches(n: number): number;
  function inchesToYards(n: number): number;
  function inchesToMiles(n: number): number;
  function feetToInches(n: number): number;
  function feetToMeters(n: number): number;
  function feetToMiles(n: number): number;
  function inchesToFeet(n: number): number;
  function inchesToMeters(n: number): number;
  function milesToYards(n: number): number;
  function milesToMeters(n: number): number;
  function milesToInches(n: number): number;
  function milesToFeet(n: number): number;
  function yardsToMiles(n: number): number;
  function yardsToMeters(n: number): number;
  function toFahrenheit(val: number): number;
  function toCelsius(val: number): number;

  const PI: number;
  const E: number;
  const LN10: number;
  const LN2: number;
  const LOG10E: number;
  const LOG2E: number;
}

export = calculator;
