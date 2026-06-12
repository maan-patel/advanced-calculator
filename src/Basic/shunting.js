let TYPE_OP = 'o';
let TYPE_CONST = 'c';
let TYPE_FUNC = 'f';
let TYPE_ELSE = 'e';
let TYPE_LPAREN = '(';
let TYPE_RPAREN = ')';

function genFunc(eval, type = TYPE_FUNC, prec = 0, left = true) {
    return {
        eval: eval,
        t: type,
        prec: prec,
        left: left
    };
}

function genNode(val, func = true, unary = true) {
    return {
        val: val,
        func: func,
        unary: unary,
        right: null,
        left: null,
        name: ''
    };
}

let constants = {
    pi: Math.PI,
    e: Math.E
};
let constant_names = Object.keys(constants);

let unary_functions = {
    neg: genFunc((x) => -x),
    sin: genFunc((x) => Math.sin(x)),
    cos: genFunc((x) => Math.cos(x)),
    tan: genFunc((x) => Math.tan(x)),
    ln: genFunc((x) => Math.log(x)),
    log: genFunc((x) => Math.log10(x)),
    sqrt: genFunc((x) => Math.sqrt(x))
};

let binary_functions = {
    '+': genFunc((x, y) => x + y, TYPE_OP, 2),
    '-': genFunc((x, y) => x - y, TYPE_OP, 2),
    '*': genFunc((x, y) => x * y, TYPE_OP, 3),
    '/': genFunc((x, y) => x / y, TYPE_OP, 3),
    '%': genFunc((x, y) => x % y, TYPE_OP, 3),
    '^': genFunc((x, y) => Math.pow(x, y), TYPE_OP, 4, false),
    max: genFunc((x, y) => Math.max(x, y)),
    min: genFunc((x, y) => Math.min(x, y))
};

let functions = Object.keys(unary_functions).concat(Object.keys(binary_functions));
let operators = '+-*/%^';
let left_brackets = '({[';
let right_brackets = ')}]';

function isNumber(c) {
    if (typeof c === 'number') {
        return true;
    }

    return !isNaN(c) || constant_names.includes(c) || c === '.';
}

function getNumVal(c) {
    if (typeof c === 'number') {
        return c;
    } else if (constant_names.includes(c)) {
        return constants[c];
    } else {
        return parseFloat(c);
    }
}

function isFunction(c) {
    return functions.includes(c);
}

function findElement(i, eqn, list) {
    for (var j = 0, len = list.length; j < len; j++) {
        var n = list[j].length;
        if (eqn.substring(i, i + n) === list[j]) {
            return [true, list[j], n];
        }
    }

    return [false, '', 1];
}

function getPrecedence(op) {
    if (Object.keys(binary_functions).includes(op)) {
        return binary_functions[op].prec;
    }

    return 0;
}

function isLeftAssociative(op) {
    if (Object.keys(binary_functions).includes(op)) {
        return binary_functions[op].left;
    }

    return true;
}

function RPN(eqn) {
    let queue = [];
    let stack = [];

    let obj = '';
    let type = '';
    let expectingOperand = true;

    // for each token
    for (var i = 0, eq_len = eqn.length; i < eq_len; i++) {
        let t = eqn[i];

        if (t === ' ') {
            continue;
        }

        if (t === ',') {
            let separator_stack = stack[stack.length - 1];

            while (stack.length !== 0 && !left_brackets.includes(separator_stack)) {
                queue.push(stack.pop());
                if (stack.length === 0) {
                    return null;
                }
                separator_stack = stack[stack.length - 1];
            }

            if (stack.length === 0) {
                return null;
            }

            expectingOperand = true;
            continue;
        }

        // determine what token is
        if (expectingOperand && t === '+') {
            continue;
        }

        if (expectingOperand && t === '-') {
            type = TYPE_FUNC;
            obj = 'neg';
        } else if (isNumber(t)) {
            type = TYPE_CONST;

            obj = t;
            if (i < eq_len - 1) {
                // get entire number
                while (isNumber(eqn[i + 1])) {
                    obj += eqn[i + 1];
                    i++;
                    if (i >= eq_len - 1) {
                        break;
                    }
                }
            }
            obj = getNumVal(obj);
        } else {
            let data = findElement(i, eqn, functions);
            let found = data[0];
            obj = data[1];
            let n = data[2];
            if (found) {
                type = operators.includes(obj) ? TYPE_OP : TYPE_FUNC;
            } else {
                data = findElement(i, eqn, constant_names);
                found = data[0];
                obj = data[1];
                n = data[2];
                if (found) {
                    type = TYPE_CONST;
                } else {
                    if (left_brackets.includes(t)) {
                        type = TYPE_LPAREN;
                    } else if (right_brackets.includes(t)) {
                        type = TYPE_RPAREN;
                    } else {
                        type = TYPE_ELSE;
                    }
                }
            }
            i += n - 1;
        }

        // do something with token
        let last_stack = stack[stack.length - 1];
        switch (type) {
            case TYPE_CONST:
                queue.push(obj);
                expectingOperand = false;
                break;
            case TYPE_FUNC:
                stack.push(obj);
                expectingOperand = true;
                break;
            case TYPE_OP:
                if (stack.length != 0) {
                    while (
                        ((functions.includes(last_stack) && !operators.includes(last_stack)) ||
                            getPrecedence(last_stack) > getPrecedence(obj) ||
                            (getPrecedence(last_stack) === getPrecedence(obj)
                                && isLeftAssociative(last_stack))) &&
                        !left_brackets.includes(last_stack)
                    ) {
                        queue.push(stack.pop());
                        if (stack.length === 0) {
                            break;
                        }
                        last_stack = stack[stack.length - 1];
                    }
                }
                stack.push(obj);
                expectingOperand = true;
                break;
            case TYPE_LPAREN:
                stack.push('(');
                expectingOperand = true;
                break;
            case TYPE_RPAREN:
                if (stack.length === 0) {
                    return null;
                }
                while (last_stack !== '(') {
                    queue.push(stack.pop());
                    if (stack.length === 0) {
                        return null;
                    }
                    last_stack = stack[stack.length - 1];
                }
                stack.pop();
                expectingOperand = false;
                break;
            default:
                return null;
        }
    }

    while (stack.length > 0) {
        if (left_brackets.includes(stack[stack.length - 1])) {
            return null;
        }
        queue.push(stack.pop());
    }

    return queue;
}

function parse(rpn) {
    let stack = [];

    Array.from(rpn).forEach((t) => {
        let tr = null;
        if (isNumber(t)) {
            tr = genNode(t, false);
        } else {
            if (Object.keys(binary_functions).includes(t)) {
                tr = genNode(binary_functions[t], true, false);

                let a = stack.pop();
                let b = stack.pop();

                if (a === undefined || b === undefined || a === null || b === null) {
                    stack.push(null);
                    return;
                }

                if (typeof a === 'number') {
                    tr.right = genNode(a, false);
                } else {
                    tr.right = a;
                }

                if (typeof b === 'number') {
                    tr.left = genNode(b, false);
                } else {
                    tr.left = b;
                }
            } else if (Object.keys(unary_functions).includes(t)) {
                tr = genNode(unary_functions[t]);

                a = stack.pop();

                if (a === undefined || a === null) {
                    stack.push(null);
                    return;
                }

                if (typeof a === 'number') {
                    tr.left = genNode(a, false);
                } else {
                    tr.left = a;
                }
            }
        }
        if (tr === null) {
            stack.push(null);
            return;
        }
        tr.name = t;
        stack.push(tr);
    });

    if (stack.length !== 1) {
        return null;
    }

    return stack.pop();
}

function eval(tree) {
    if (!tree) {
        return undefined;
    }

    if (tree.func) {
        if (tree.unary) {
            return tree.val.eval(eval(tree.left));
        } else {
            return tree.val.eval(eval(tree.left), eval(tree.right));
        }
    } else {
        if (constant_names.includes(tree.val)) {
            return constants[tree.val];
        } else {
            return tree.val;
        }
    }
}


module.exports = { RPN, eval, parse }
