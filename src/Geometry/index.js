let eulerPolyhedralforF = function (E, V) { return E + 2 - V }
let eulerPolyhedralforV = function (E, F) { return E + 2 - F }
let eulerPolyhedralforE = function (F, V) { return F + V - 2 }

let pythagorean = function (sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

let pythagoreanForA = function (b, c) {
    return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
}

let pythagoreanForB = function (a, c) {
    return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
}

let distanceBetweenTwoPoints = function (x1, y1, x2, y2) {
    let one = x1 - x2
    let two = y1 - y2
    return Math.sqrt((one * one) + (two * two))
}

let midpoint = function (x1, y1, x2, y2) {
    return `(${(x1 + x2) / 2}, ${(y1 + y2) / 2})`
}

let equationPlane = function (x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    let a1, b1, c1, a2, b2, c2;
    a1 = x2 - x1
    b1 = y2 - y1
    c1 = z2 - z1
    a2 = x3 - x1
    b2 = y3 - y1
    c2 = z3 - z1
    let a = b1 * c2 - b2 * c1
    let b = a2 * c1 - a1 * c2
    let c = a1 * b2 - b1 * a2
    let d = (- a * x1 - b * y1 - c * z1)

    return `${a}x + ${b}y + ${c}z + ${d}= 0`
}

let isCoplanar = function (x1, y1, z1, x2, y2, z2,
    x3, y3, z3, x, y, z) {
    let a1 = x2 - x1;
    let b1 = y2 - y1;
    let c1 = z2 - z1;
    let a2 = x3 - x1;
    let b2 = y3 - y1;
    let c2 = z3 - z1;
    let a = b1 * c2 - b2 * c1;
    let b = a2 * c1 - a1 * c2;
    let c = a1 * b2 - b1 * a2;
    let d = (- a * x1 - b * y1 - c * z1);

    if (a * x + b * y + c * z + d == 0) {
        return true
    }
    return false
}

let distanceBetweenPointAndPlane = function (x1, y1, z1, a, b, c, d) {
    d = Math.abs((a * x1 + b * y1 + c * z1 + d))
    let e = (Math.sqrt(a * a + b * b + c * c))
    return `Perpendicular distance is ${d / e}`
}

let sumInteriorAnglesOfRegularPolygon = function (n) {
    return (n - 2) * 180
}

let sumInteriorAnglesOfPolygon = sumInteriorAnglesOfRegularPolygon

let interiorAngleOfRegularPolygon = function (n) {
    return sumInteriorAnglesOfRegularPolygon(n) / n
}

let regularPolygonInteriorAngle = interiorAngleOfRegularPolygon

let straightLineVectorForm = function (x0, y0, z0, u1, u2, u3) {
    return `(x, y, z) = (${x0}, ${y0}, ${z0}) + k(${u1}, ${u2}, ${u3}), k in R`
}

let straightLineCartesianForm = function (x0, y0, z0, u1, u2, u3) {
    return `(x - ${x0}) / ${u1} = (y - ${y0}) / ${u2} = (z - ${z0}) / ${u3}`
}

let straightLineParametricForm = function (x0, y0, z0, u1, u2, u3) {
    return `x = ${x0} + ${u1}k, y = ${y0} + ${u2}k, z = ${z0} + ${u3}k, k in R`
}

let signedOffset = function (variable, center) {
    if (center === 0) {
        return variable
    }

    if (center < 0) {
        return `${variable} + ${Math.abs(center)}`
    }

    return `${variable} - ${center}`
}

let signedConstant = function (value) {
    if (value < 0) {
        return `- ${Math.abs(value)}`
    }

    return `+ ${value}`
}

let planePointNormalForm = function (n1, n2, n3, x0, y0, z0) {
    return `${n1}(${signedOffset('x', x0)}) + ${n2}(${signedOffset('y', y0)}) + ${n3}(${signedOffset('z', z0)}) = 0`
}

let planeScalarForm = function (n1, n2, n3, d) {
    return `${n1}x + ${n2}y + ${n3}z ${signedConstant(d)} = 0`
}

let squaredOffset = function (variable, center) {
    if (center === 0) {
        return `${variable}^2`
    }

    if (center < 0) {
        return `(${variable} + ${Math.abs(center)})^2`
    }

    return `(${variable} - ${center})^2`
}

let circleEquation = function (x0, y0, r) {
    return `${squaredOffset('x', x0)} + ${squaredOffset('y', y0)} = ${r * r}`
}

let sphereEquation = function (x0, y0, z0, r) {
    return `${squaredOffset('x', x0)} + ${squaredOffset('y', y0)} + ${squaredOffset('z', z0)} = ${r * r}`
}

let ellipseEquation = function (h, k, a, b) {
    return `(${squaredOffset('x', h)} / ${a * a}) + (${squaredOffset('y', k)} / ${b * b}) = 1`
}


module.exports = {
    eulerPolyhedralforF,
    eulerPolyhedralforV,
    eulerPolyhedralforE,
    pythagorean,
    pythagoreanForA,
    pythagoreanForB,
    distanceBetweenTwoPoints,
    midpoint,
    equationPlane,
    isCoplanar,
    distanceBetweenPointAndPlane,
    sumInteriorAnglesOfRegularPolygon,
    sumInteriorAnglesOfPolygon,
    interiorAngleOfRegularPolygon,
    regularPolygonInteriorAngle,
    straightLineVectorForm,
    straightLineCartesianForm,
    straightLineParametricForm,
    planePointNormalForm,
    planeScalarForm,
    circleEquation,
    sphereEquation,
    ellipseEquation,
}
