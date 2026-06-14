let slope = (rise, run) => rise / run;
let m = (y2, y1, x2, x1) => (y2 - y1) / (x2 - x1)
let slopeFromPoints = m;

let yInt = function (m, b) {
    let y = b
    let x = b / m
    return `(${x}, ${y})`
}

let discriminant = (a, b, c) => b * b - 4 * a * c;

let factors = (num) => {
    if (!Number.isInteger(num) || num === 0) {
        return [];
    }

    let absolute = Math.abs(num);
    let result = [];

    for (let i = 1; i <= absolute; i++) {
        if (absolute % i === 0) {
            result.push(i);
        }
    }

    return result;
}

function quad(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        return (`x1 = ${root1}, x2 = ${root2}`);
    }


    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        return (`x1 = ${root1}, x2 = ${root2}`);
    }

    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        return (`x1 = ${realPart} + ${imagPart}i, x2 = ${realPart} - ${imagPart}i`);
    }
}
let quadraticFormula = quad;

function vertexParabolaStandardForm(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let x = (-b / (2 * a))
    let y = (-discriminant / (4 * a))
    return (`${x}, ${y}`)
}

let vertexParabolaVertexForm = (h, k) => `${h}, ${k}`

let concavity = (a) => a > 0 ? 'Concave Up' : 'Concave Down';


module.exports = { slope, m, slopeFromPoints, yInt, discriminant, factors, quad, quadraticFormula, vertexParabolaStandardForm, vertexParabolaVertexForm, concavity }
