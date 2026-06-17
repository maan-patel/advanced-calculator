# Advanced Calculator

This npm acts as a scientific calculator and allows you to do many calculations without worrying about formulas.

My ambition is to get all basic to intermediate to advanced mathematical formulas for Statistics, Vectors, Probability, Complex Numbers, and much more! Please see the methods working so far below:

## Installation

```
npm install advanced-calculator
```

![npm](https://img.shields.io/npm/v/advanced-calculator)

### Please refer each section's detailed screenshots for it's formulas for better understanding

# Table of Contents

1. [Basic Math](#basic-math)
2. [Areas](#areas)
3. [Volumes](#volumes)
4. [Geometry](#geometry)
5. [Exponents](#exponents)
6. [Radicals](#radicals)
7. [Graphs](#graphs)
8. [Trigonometry](#trigonometry)
9. [Logarithms](#logarithms)
10. [Conversions](#conversions)
11. [Constants](#constants)
12. [Other](#other)

## Basic Math

```javaScript
let basicMath = require('advanced-calculator')

basicMath.evaluate('1 + sin(4/2) / 3 ^ 3 -1 * 3 + pi + max(3,2) % log(24)')
// implemented using the Shunting-Yard Algorithm by Dijkstra

basicMath.add(1,2,3,4...arg)
basicMath.sub(1, ...arg)
basicMath.multiply(5,6,7...arg)
basicMath.divide(5, ...arg)
basicMath.sqrt(x)
```

### Operators for 'evaluate'

```
sin, cos, tan, ln, log, sqrt
'+', '-', '*', '/', '%', '^'
max, min
( )
```

## Areas

```javaScript
let Area = require('advanced-calculator')

Area.squarePerimeter(a, unit = "")
Area.squareArea(a, unit = "")
Area.rectanglePerimeter(a, b, unit = "")
Area.rectangleArea(a, b, unit = "")
Area.parallelogramPerimeter(a, b, unit = "")
Area.parallelogramArea(b, h, unit = ""))
Area.circleArea(r, unit = "")
Area.trianglePerimeter(a, b, c, unit = "")
Area.traingleArea(b, h, unit = "")
Area.trapezoidPerimeter(a, b1, b2, unit = "")
Area.trapezoidArea(h, b1, b2, unit = "")
```

### 2D Geometric Shapes Formulas

```
Name	        Perimeter       Area

Triangle         a + b + c      12bh

Circle           2 pi r         pi r2

Square           4a             a2

Rectangle        2(a + b)       a2

Parallelogram    2(a + b)       bh

Trapezoid        2a + b1 + b2   1/2 (b1 + b2) X h
```

## Volumes

```javaScript
let Volume = require('advanced-calculator')

Volume.sphereSurfaceArea(r)
Volume.sphereVolume(r)
Volume.cubeSurfaceArea(a)
Volume.cubeVolume(a)
Volume.rectangularprizmSurfaceArea(a, b, c)
Volume.rectangularprizmVolume(a, b, c)
Volume.cylinderSurfaceArea(r, h)
Volume.cylinderVolume(r, h)
Volume.coneSurfaceArea(r, h, l)
Volume.coneVolume(r, h)
```

### 3D Geometric Shapes Formulas:

```
Name	        Surface area	     Volume

Sphere          4 pi r^2             4/3 pi r^3

Cube            6 a^2                a^3

Rectangular
prizm           2ab + 2bc + 2ca      abc

Cylinder        2(pi)r^2 + 2(pi)rh   (pi)r^2h

Cone            (pi)rl + (pi)r^2     1/3(pi)r^2h
```

## Geometry

[Geometry formula PDF](docs/geometry.pdf)

```javaScript
let calculator = require('advanced-calculator')

calculator.eulerPolyhedralforF(E, V)
calculator.eulerPolyhedralforV(E, F)
calculator.eulerPolyhedralforE(F, V)
calculator.sumInteriorAnglesOfRegularPolygon(n)
calculator.sumInteriorAnglesOfPolygon(n)
calculator.interiorAngleOfRegularPolygon(n)
calculator.regularPolygonInteriorAngle(n)
calculator.pythagorean(sideA, sideB)
calculator.pythagoreanForA(b, c)
calculator.pythagoreanForB(a, c)
calculator.distanceBetweenTwoPoints(x1, y1, x2, y2)
calculator.midpoint(x1, y1, x2, y2)
calculator.straightLineVectorForm(x0, y0, z0, u1, u2, u3)
calculator.straightLineCartesianForm(x0, y0, z0, u1, u2, u3)
calculator.straightLineParametricForm(x0, y0, z0, u1, u2, u3)
calculator.equationPlane(x1, y1, z1, x2, y2, z2, x3, y3, z3)
calculator.planePointNormalForm(n1, n2, n3, x0, y0, z0)
calculator.planeScalarForm(n1, n2, n3, d)
calculator.isCoplanar(x1, y1, z1, x2, y2, z2, x3, y3, z3, x, y, z)
calculator.distanceBetweenPointAndPlane(x1, y1, z1, a, b, c, d)
calculator.circleEquation(x0, y0, r)
calculator.sphereEquation(x0, y0, z0, r)
calculator.ellipseEquation(h, k, a, b)
```

### Geometry Formulas

```
Euler's Polyhedral Formula                 F + V = E + 2
Sum of interior angles of a polygon        (n - 2) X 180
Interior angle of a regular polygon        ((n - 2) X 180) / n
Pythagorean theorem                        H^2 = C1^2 + C2^2
Distance between two points                sqrt((x1 - x2)^2 + (y1 - y2)^2)
Midpoint                                   ((x1 + x2) / 2, (y1 + y2) / 2)
Line vector form                           (x, y, z) = (x0, y0, z0) + k(u1, u2, u3)
Line cartesian form                        (x - x0) / u1 = (y - y0) / u2 = (z - z0) / u3
Line parametric form                       x = x0 + u1k, y = y0 + u2k, z = z0 + u3k
Plane point-normal form                    n1(x - x0) + n2(y - y0) + n3(z - z0) = 0
Plane scalar form                          n1x + n2y + n3z + d = 0
Circle equation                            (x - x0)^2 + (y - y0)^2 = r^2
Sphere equation                            (x - x0)^2 + (y - y0)^2 + (z - z0)^2 = r^2
Ellipse equation                           ((x - h) / a)^2 + ((y - k) / b)^2 = 1
```

## Exponents

### For passing "args" , please follow this syntax: An array with an object with "base" & "exponent" as keys

### [{ base: 6, exponent: 3 }, { base: 3, exponent: 2 },...]

```javaScript
let Exponents = require('advanced-calculator')

Exponents.multiplyExponents(args)
Exponents.divideExponents(args)
Exponents.negativeExponents(a, n)
Exponents.fractionalExponents(a, p, q)
Exponents.powerOfPower(a, m, p)
Exponents.x10(num, exp)
```

### Exponent Formulas

![exponents](https://i.imgur.com/bHf6plb.png)

## Radicals

### For passing "args" , please follow this syntax: An array with an object with "base" & "exponent" as keys

### [{ base: 6, exponent: 3 }, { base: 3, exponent: 2 },...]

```javaScript
let Radicals = require('advanced-calculator')

Radicals.root(base, exp)
Radicals.multiplyRoot(args)
Radicals.divideRoot(args)
Radicals.addRoot(args)
Radicals.subtractRoot(args)
Radicals.exponentRoot(x, n, p)
Radicals.radical(x, n, p)
Radicals.exponentiation(a, m, n)
```

### Radical Formulas

![radicals](https://i.imgur.com/zfClGgk.png)

## Graphs

```javaScript
let Graph = require('advanced-calculator')

Graph.slope(rise, run)
Graph.m(y2, y1, x2, x1)
Graph.yInt(m, b)
Graph.discriminant(a, b, c)
Graph.factors(num)
Graph.quad(a, b, c)
Graph.vertexParabolaStandardForm(a, b, c)
Graph.vertexParabolaVertexForm(h, k)
Graph.concavity(a)
```

### Graph Formulas

![graphs1](https://i.imgur.com/xa9Xmd3.png)
![graphs2](https://i.imgur.com/gw9QEBf.png)

## Trigonometry

### Please note that all input/output is in Radians

```javaScript
let Trigonometry = require('advanced-calculator')

Trigonometry.radsToDegs(rad)
Trigonometry.degsToRads(deg )
Trigonometry.sinA(opp, hip)
Trigonometry.cosA(adj, hip)
Trigonometry.tanA(opp, adj)
Trigonometry.thetaSin(opp, hip)
Trigonometry.thetaCos(adj, hip)
Trigonometry.thetaTan(opp, adj)

Trigonometry.sineRuleForThetaA(a, b, A)
Trigonometry.sineRuleForThetaB(a, b, B)
Trigonometry.sineRuleForLengthB(b, A, B)
Trigonometry.sineRuleForLengthA(a, A, B)
Trigonometry.cosLawForThetaA(a, b, c)
Trigonometry.cosLawForThetaB(a, b, c)
Trigonometry.cosLawForThetaC(a, b, c)
Trigonometry.cosLawForTheta(a, b, c)
Trigonometry.cosLawFora(b, c, A)
Trigonometry.cosLawForb(a, c, B)
Trigonometry.HeronA(s, a, b, c)
Trigonometry.HeronS(a, b, c)
Trigonometry.exactValues(trig, PIOver)
Trigonometry.angleRelationships(trig, constPIOver, a)
Trigonometry.sumFormulas(trig, a, b)
Trigonometry.differenceFormulas(trig, a, b)
Trigonometry.doubleAngle(trig, a)

```

### Trigonometry Formulas

![trig1](https://i.imgur.com/TBOdL4u.png)
![trig2](https://i.imgur.com/GYuYOno.png)
![trig3](https://i.imgur.com/gNYzL24.png)


## Logarithms

```javaScript
let Logarithms = require('advanced-calculator')

Logarithms.log(a, b)
Logarithms.logB(a, x)
Logarithms.logProduct(a, u, v) 
Logarithms.logQuotient(a, u, v)
Logarithms.logExponential(a, u, v)

```

### Logarithms Formulas

![log](https://i.imgur.com/KgoSAVg.png)


## Conversions

### Converts n of something to something

```javaScript
let Conversions = require('advanced-calculator')

Conversions.metreToGiga(n)
Conversions.metreToMega(n)
Conversions.metreToKilo(n)
Conversions.metreToHecto(n)
Conversions.metreToCenti(n)
Conversions.metreToMilli(n)
Conversions.metreToMicro(n)
Conversions.metreToNano(n)
Conversions.kiloToMetre(n)
Conversions.hectoToMetre(n)
Conversions.centiToMetre(n)
Conversions.milliToMetre(n)
Conversions.microToMetre(n)
Conversions.nanoToMetre(n)
Conversions.yardsToFeet(n)
Conversions.feetToYards(n)
Conversions.yardsToInches(n)
Conversions.inchesToYards(n)
Conversions.inchesToMiles(n)
Conversions.feetToInches(n)
Conversions.feetToMeters(n)
Conversions.feetToMiles(n)
Conversions.inchesToMeters(n)
Conversions.milesToYards(n)
Conversions.milesToMeters(n)
Conversions.milesToInches(n)
Conversions.milesToFeet(n)
Conversions.yardsToMiles(n)
Conversions.yardsToMeters(n)
Conversions.toFahrenheit(n)
Conversions.toCelsius(n)
```

## Constants

```javaScript
PI: Math.PI,
E: Math.E,
LN10: Math.LN10,
LN2: Math.LN2,
LOG10E: Math.LOG10E,
LOG2E: Math.LOG2E,

FEET_TO_INCHES_FACTOR: 12,
FEET_TO_METERS_FACTOR: 0.3048,
FEET_TO_MILES_FACTOR: 1 / 5280,
FEET_TO_YARDS_FACTOR: 1 / 3,
INCHES_TO_FEET_FACTOR: 1 / 12,
INCHES_TO_METERS_FACTOR: 0.0254,
INCHES_TO_MILES_FACTOR: 1 / 63360,
INCHES_TO_YARDS_FACTOR: 1 / 36,
MILES_TO_FEET_FACTOR: 5280,
MILES_TO_INCHES_FACTOR: 63360,
MILES_TO_METERS_FACTOR: 1609.344,
MILES_TO_YARDS_FACTOR: 1760,
YARDS_TO_INCHES_FACTOR: 36,
YARDS_TO_FEET_FACTOR: 3,
YARDS_TO_METERS_FACTOR: 0.9144,
YARDS_TO_MILES_FACTOR: 1 / 1760,
CELSIUS_TO_FAHRENEIT_MUTLIPLIER_FACTOR: 9 / 5,
CELSIUS_TO_FAHRENEIT_FACTOR: 32
```

## Other

```javaScript
let {speed, time, dist, oneToN,sumOfArithmetic,sumOfAnglesOfNPoly,
sumOfAnglesOfSPoly , diagonalSquare, diagonalCube } =
require('advanced-calculator')

speed(dist, time, unit = "")
time(speed, dist, unit = "")
dist(speed, time, unit = "")
oneToN(n)
sumOfArithmetic(n, a, z)
sumOfAnglesOfNPoly(n)
sumOfAnglesOfSPoly(s)
diagonalSquare(s)
diagonalCube(s)
```

### Other Formulas

```
Speed & Distance          speed = distance / time
                          time = speed / distance
                          distance = speed X time

Sum of numbers
from 1 to n               n (n + 1) / 2

Sum of numbers in an
arithmetic series n       (a + z) / 2

Sum of angles inside
of an n-side polygon      180 (n -2)

Num of diagonals inside
of a s-sided polygon      s (s - 3) / 2

Length of diagonal
of a square               s * sqrt(2)

Length of a space
diagonal of a cube        s * sqrt(3)
```

## Bibliography

Nunes, V. (n.d.). List of Math Formulas. Retrieved March 14, 2021, from https://www.matematica.pt/en/useful/math-formulas.php Used images for formulas
