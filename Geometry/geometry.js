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

// console.log(midpoint(2, 6, 4, -2))

