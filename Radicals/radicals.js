let root = function (base, exp) {
    return Math.pow(base, (1 / exp))
}

let multiplyRoot = function (args) {
    let base = 1;
    let exp = 0;
    let sum = 1;
    for (let i = 0; i < args.length; i++) {
        sum = sum * (base ** exp * (args[i].base ** (1 / args[i].exp)))
    }
    return sum
}

let divideRoot = function (args) {
    let total = args[0].base ** (1 / args[0].exp);
    for (let i = 1; i < args.length; i++) {
        total /= (args[i].base ** (1 / args[i].exp))
    }
    return total
}

let addRoot = function (args) {
    let total = (args[0].base ** (1 / args[0].exp));
    for (let i = 1; i < args.length; i++) {
        total += ((args[i].base ** (1 / args[i].exp)))
    }
    return total
}

let subtractRoot = function (args) {
    let total = (args[0].base ** (1 / args[0].exp));
    for (let i = 1; i < args.length; i++) {
        total -= (args[i].base ** (1 / args[i].exp))
    }
    return total
}

let exponentRoot = function (x, n, p) {
    return (Math.pow(x, 1 / n)) ** p
}

let radical = function (x, n, p) {
    let e = n * p;
    return (Math.pow(x, (1 / e)))
}

let exponentiation = function (a, m, n) {
    let e = m / n
    return (Math.pow(a, e))
}

module.exports = { root, multiplyRoot, divideRoot, addRoot, subtractRoot, exponentRoot, radical, exponentiation }