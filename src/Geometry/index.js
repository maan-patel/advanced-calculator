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
}