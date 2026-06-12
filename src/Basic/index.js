let { RPN, eval, parse } = require('./shunting')

function evaluate(val) {
    let eqn = val
    let rpn = RPN(eqn);

    let ans = 'Invalid input';

    try {
        if (!rpn) {
            return ans;
        }

        let tree = parse(rpn);
        if (!tree) {
            return ans;
        }

        ans = eval(tree);
    } catch (error) {
        return ans;
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
