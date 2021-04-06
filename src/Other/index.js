
let sqrt = (x) => Math.sqrt(x);

let speed = (dist, time, unit = "") => dist / time + unit
let time = (speed, dist, unit = "") => speed / dist + unit
let dist = (speed, time, unit = "") => speed * time + unit

let oneToN = (n) => (n * (n + 1)) / 2;

let sumOfArithmetic = (n, a, z) => (n * (a + z)) / 2;
//n is the number of terms in the sequence, a is the lowest term, and z is the highest term.

let sumOfAnglesOfNPoly = (n) => 180 * (n - 2);
let sumOfAnglesOfSPoly = (s) => (s * (s - 3)) / 2;
let diagonalSquare = (s) => s * Math.sqrt(2);
let diagonalCube = (s) => s * Math.sqrt(3)


let hcf = function (number1, number2) {
    while (number1 != number2) {
        if (number1 > number2) {
            number1 -= number2;
        }
        else {
            number2 -= number1;
        }
    }
    return (`HCF is ${number1}`);
}

let lcf = function (num1, num2) {
    let min = (num1 > num2) ? num1 : num2;

    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return (`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}

let morgage = function (months, rate, loan) {
    let monthy_rate = rate / 100 / 12;
    let payment = (monthly_rate / (1 - (1 + monthly_rate) ** (-months))) * loan
    return `Your monthly payment will be ${payment}`
}


let isPrime = function (n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

let isEven = function (n) {
    return n % 2 === 0;
}

let isOdd = function (n) {
    return n % 2 !== 0;
}

module.exports = { isEven, isPrime, isOdd, sqrt, speed, time, dist, oneToN, sumOfArithmetic, sumOfAnglesOfNPoly, sumOfAnglesOfSPoly, diagonalSquare, diagonalCube, hcf, lcf, morgage }