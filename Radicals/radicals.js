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

//console.log(exponentRoot(2,2,3))
//console.log(multiplyRoot([{ base: 2, exp: 3 }, { base: 5, exp: 3 }]))
//console.log(divideRoot([{ base: 8, exp: 4 }, { base: 3, exp: 4 }]))
//console.log(addRoot([{  base: 5, exp: 3 }, {  base: 5, exp: 3 }]))
console.log(exponentRoot(2, 2, 3))
console.log(radical(5, 3, 2))
console.log(exponentiation(4, 5, 3))

module.exports = { root, multiplyRoot, divideRoot, addRoot, subtractRoot, exponentRoot, radical, exponentiation }