# Advanced Calculator 

This npm acts as a scientific calculator and allows you to do many calculations without worrying about formulas.

This module is still under work. My ambition is to get all basic to intermediate mathematical formulas for Conversions, Statistics, Vectors, Probability, Complex Numbers, and much more! Please see the methods working so far below:

## Installation
```
npm install advanced-calculator
```
![npm](https://img.shields.io/npm/v/advanced-calculator)


# Table of Contents
1. [Basic Math](#Basic-Math)
2. [Areas](#Areas)
3. [Volumes](#Volumes)
4. [Exponents](#Exponents)
5. [Radicals](#Radicals)
6. [Graphs](#Graphs)
7. [Trigonometry](#Trigonometry)
8. [Other](#Other)



## Basic Math

```javaScript
let basicMath = require('advanced-calculator')

basicMath.add(1,2,3,4...arg)
basicMath.sub(1, ...arg)
basicMath.multiply(5,6,7...arg)
basicMath.divide(5, ...arg)
basicMath.sqrt(x)
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

## Exponents
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












### 2D Geometric Shapes
```
Name	        Perimeter       Area
 
Triangle         a + b + c      12bh

Circle           2 pi r         pi r2
 
Square           4a             a2

Rectangle        2(a + b)       a2

Parallelogram    2(a + b)       bh

Trapezoid        2a + b1 + b2   1/2 (b1 + b2) X h
```


### 3D Geometric Shapes
```
Name	        Surface area	     Volume
 
Sphere          4 pi r^2             4/3 pi r^3

Cube            6 a^2                a^3

Rectangular 
prizm           2ab + 2bc + 2ca      abc

Cylinder        2(pi)r^2 + 2(pi)rh   (pi)r^2h

Cone            (pi)rl + (pi)r^2     1/3(pi)r^2h
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


