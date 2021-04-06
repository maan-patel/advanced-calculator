let { trianglePerimeter, traingleArea, circlePerimeter, circleArea, squarePerimeter, squareArea, rectanglePerimeter, rectangleArea, parallelogramPerimeter, parallelogramArea, trapezoidPerimeter, trapezoidArea } = require('./Areas/areas')
let { sphereSurfaceArea, sphereVolume, cubeSurfaceArea, cubeVolume, rectangularprizmSurfaceArea, rectangularprizmVolume, cylinderSurfaceArea, cylinderVolume, coneSurfaceArea, coneVolume } = require('./Volume/volume')
let { morgage, sqrt, speed, time, dist, oneToN, sumOfArithmetic, sumOfAnglesOfNPoly, sumOfAnglesOfSPoly, diagonalSquare, diagonalCube } = require('./Other/other')
let { multiplyExponents, divideExponents, negativeExponents, fractionalExponents, powerOfPower, x10 } = require('./Exponents/exponents')
let { slope, m, yInt, discriminant, factors, quad, vertexParabolaStandardForm, vertexParabolaVertexForm, concavity } = require('./Graphs/graphs')
let { root, multiplyRoot, divideRoot, addRoot, subtractRoot, exponentRoot, radical, exponentiation } = require('./Radicals/radicals')
let { radsToDegs, degsToRads, sinA, cosA, tanA, thetaSin, thetaCos, thetaTan, sineRuleForThetaA, sineRuleForThetaB, sineRuleForLengthB,
    sineRuleForLengthA, cosLawForThetaA, cosLawForThetaB, cosLawForThetaC, cosLawForTheta, cosLawFora, cosLawForb, HeronA, HeronS, exactValues,
    angleRelationships, sumFormulas, differenceFormulas, doubleAngle
} = require('./Trigonometry/trigonometry')

module.exports = {
    add: (...arg) => {
        let sum = 0;
        for (let eachx of arg) {
            sum += eachx;
        }
        console.log(sum)
    },
    sub: (first, ...arg) => {
        let sum = first;
        for (let eachx of arg) {
            sum -= eachx;
        }
        return sum
    },
    multiply: (...arg) => {
        let sum = 1;
        for (let eachx of arg) {
            sum *= eachx;
        }
        return sum;
    },
    divide: (first, ...arg) => {
        let sum = first;
        for (let eachx of arg) {
            sum /= eachx;
        }
        return sum;
    },
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

    sphereSurfaceArea,
    sphereVolume,
    cubeSurfaceArea,
    cubeVolume,
    rectangularprizmSurfaceArea,
    rectangularprizmVolume,
    cylinderSurfaceArea,
    cylinderVolume,
    coneSurfaceArea,
    coneVolume,
    sqrt,
    speed,
    time,
    dist,
    morgage,
    oneToN,
    sumOfArithmetic,
    sumOfAnglesOfNPoly,
    sumOfAnglesOfSPoly,
    diagonalSquare,
    diagonalCube,

    multiplyExponents,
    divideExponents,
    negativeExponents,
    fractionalExponents,
    powerOfPower,
    x10,

    slope,
    m,
    yInt,
    discriminant,
    factors,
    quad,
    vertexParabolaStandardForm,
    vertexParabolaVertexForm,
    concavity,

    root,
    multiplyRoot,
    divideRoot,
    addRoot,
    subtractRoot,
    exponentRoot,
    radical,
    exponentiation,


    radsToDegs, degsToRads, sinA, cosA, tanA, thetaSin, thetaCos, thetaTan, sineRuleForThetaA, sineRuleForThetaB, sineRuleForLengthB,
    sineRuleForLengthA, cosLawForThetaA, cosLawForThetaB, cosLawForThetaC, cosLawForTheta, cosLawFora, cosLawForb, HeronA, HeronS, exactValues,
    angleRelationships, sumFormulas, differenceFormulas, doubleAngle


};
