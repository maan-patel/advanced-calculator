let { RPN, eval, parse } = require('./shunting')

function evaluate(val) {
    let eqn = val
    if (eqn[0] == '+' || '-'){
        eqn = '0'+eqn
    }
    let rpn = RPN(eqn);

    var ans = 'Invalid input';

    if (rpn) {
        let tree = parse(rpn);
        ans = eval(tree);
    }

    return ans
}

module.exports = {
    add: (...arg) => {
        let sum = 0;
        for (let eachx of arg) {
            sum += eachx;
        }
        return sum
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
    evaluate

};
