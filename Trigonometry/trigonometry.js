const radsToDegs = rad => rad * 180 / Math.PI;
const degsToRads = deg => (deg * Math.PI) / 180.0;

let sinA = (opp, hip) => opp / hip;
let cosA = (adj, hip) => adj / hip;
let tanA = (opp, adj) => opp / adj;

let thetaSin = (opp, hip) => Math.asin(opp / hip);
let thetaCos = (adj, hip) => Math.acos(adj / hip);
let thetaTan = (opp, adj) => Math.atan(opp / adj);


let sineRuleForThetaA = function (a, b, A) {
    let otherSide = Math.sin(A) / a;
    otherSide *= b;
    return Math.asin(otherSide)
}
let sineRuleForThetaB = function (a, b, B) {
    let otherSide = Math.sin(B) / b;
    otherSide *= a;
    return Math.asin(otherSide)
}

let sineRuleForLengthB = function (b, A, B) {
    let otherSide = Math.sin(A) / b;
    return (Math.sin(B) / otherSide)
}

let sineRuleForLengthA = function (a, A, B) {
    let otherSide = Math.sin(B) / a;
    return (Math.sin(A) / otherSide)
}

let cosLawForThetaA = function (a, b, c) {
    let otherSide = (a * a) - (b * b) - (c * c)
    otherSide /= -(2 * b * c)
    return Math.acos(otherSide)
}

let cosLawForThetaB = function (a, b, c) {
    let otherSide = (b * b) - (a * a) - (c * c)
    otherSide /= -(2 * a * c)
    return Math.acos(otherSide)
}

let cosLawForThetaC = function (a, b, c) {
    let otherSide = (c * c) - (a * a) - (b * b)
    otherSide /= -(2 * b * a)
    return Math.acos(otherSide)
}

let cosLawForTheta = function (a, b, c) {
    let x = cosLawForThetaA(a, b, c)
    let y = cosLawForThetaB(a, b, c)
    let z = cosLawForThetaC(a, b, c)
    return `A = ${x}, B = ${y}, C = ${z}`
}


let cosLawFora = function (b, c, A) {
    let x = 2 * b * c * Math.cos(A)
    let otherSide = (b * b) + (c * c) - (x)
    return Math.sqrt(otherSide)
}

let cosLawForb = function (a, c, B) {
    let one = a * Math.cos(B)
    let discriminant = ((c * c) - ((a * a) * Math.sin(B) * Math.sin(B)))
    if (discriminant < 0) {
        return `one + ${Math.sqrt(discriminant)}i OR ${one} - ${Math.sqrt(discriminant)}i`
    }
    else {
        return one + Math.sqrt(discriminant)
    }
}

// let cosLawForc = function (a, b, C) {
//     let one = a * Math.cos(B)
//     let discriminant = ((a * a) - ((a * a) * Math.sin(B) * Math.sin(B)))
//     if (discriminant < 0) {
//         return `one + ${Math.sqrt(discriminant)}i OR ${one} - ${Math.sqrt(discriminant)}i`
//     }
//     else {
//         return one + Math.sqrt(discriminant)
//     }
// }


let HeronA = function (s, a, b, c) {
    const discriminant = s * (s - a) * (s - b) * (s - c)
    discriminant < 0 ? `${Math.sqrt(-discriminant)}i` : `${Math.sqrt(discriminant)}`
}

let HeronS = function (a, b, c) {
    return ((a + b + c) / 2)
}



let exactValues = function (trig, PIOver) {
    if (trig == "sin") {
        if (PIOver === 6) return 1 / 2
        if (PIOver === 4) return (Math.sqrt(2) / 2)
        if (PIOver === 3) return (Math.sqrt(3) / 2)
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
    if (trig == "cos") {
        if (PIOver === 6) return (Math.sqrt(3) / 2)
        if (PIOver === 4) return (Math.sqrt(2) / 2)
        if (PIOver === 3) return 1 / 2
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
    if (trig == "tan") {
        if (PIOver === 6) return (Math.sqrt(3) / 3)
        if (PIOver === 4) return 1
        if (PIOver === 3) return Math.sqrt(3)
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
}

let angleRelationships = function (trig, constPIOver, a) {
    if (trig === "sin") {
        if (constPIOver === 1 / 2 && a < 0) return Math.cos(a)
        if (constPIOver === 1 / 2 && a > 0) return Math.cos(a)
        if (constPIOver === 3 / 2 && a > 0) return -Math.cos(a)
        if (constPIOver === 3 / 2 && a < 0) return -Math.cos(a)
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
    if (trig === "cos") {
        if (constPIOver === 1 / 2 && a < 0) return Math.sin(a)
        if (constPIOver === 1 / 2 && a > 0) return -Math.sin(a)
        if (constPIOver === 3 / 2 && a < 0) return -Math.sin(a)
        if (constPIOver === 3 / 2 && a > 0) return Math.sin(a)
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
    if (trig === "tan") {
        if (constPIOver === 1 / 2 && a < 0) return 1 / Math.tan(a)
        if (constPIOver === 1 / 2 && a > 0) return -1 / Math.tan(a)
        if (constPIOver === 3 / 2 && a < 0) return 1 / Math.tan(a)
        if (constPIOver === 3 / 2 && a > 0) return -1 / Math.tan(a)
        else {
            return "Sorry, the input isn't valid, please see the Docs at https://www.npmjs.com/package/advanced-calculator"
        }
    }
}

let sumFormulas = function (trig, a, b) {
    if (trig == "sin") {
        return (Math.sin(a) * Math.cos(b)) + (Math.sin(b) * Math.cos(a))
    }
    else if (trig == "cos") {
        return (Math.cos(a) * Math.cos(b)) - (Math.sin(a) * Math.sin(b))
    }
    else if (trig == "tan") {
        return (Math.tan(a) + Math.tan(b)) / (1 - (Math.tan(a) * Math.tan(b)))
    }
}

let differenceFormulas = function (trig, a, b) {
    if (trig == "sin") {
        return (Math.sin(a) * Math.cos(b)) - (Math.sin(b) * Math.cos(a))
    }
    else if (trig == "cos") {
        return (Math.cos(a) * Math.cos(b)) + (Math.sin(a) * Math.sin(b))
    }
    else if (trig == "tan") {
        return (Math.tan(a) - Math.tan(b)) / (1 + (Math.tan(a) * Math.tan(b)))
    }
}

let doubleAngle = function (trig, a) {
    if (trig == "sin") {
        return (2 * Math.sin(a) * Math.cos(a))
    }
    else if (trig == "cos") {
        return (Math.cos(a) * Math.cos(a)) - (Math.sin(a) * Math.sin(a))
    }
    else if (trig == "tan") {
        return (2 * Math.tan(a)) / (1 - (Math.tan(a) * Math.tan(a)))
    }
}

module.exports = {
    radsToDegs, degsToRads, sinA, cosA, tanA, thetaSin, thetaCos, thetaTan, sineRuleForThetaA, sineRuleForThetaB, sineRuleForLengthB,
    sineRuleForLengthA, cosLawForThetaA, cosLawForThetaB, cosLawForThetaC, cosLawForTheta, cosLawFora, cosLawForb, HeronA, HeronS, exactValues,
    angleRelationships, sumFormulas, differenceFormulas, doubleAngle
}

