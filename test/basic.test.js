const assert = require('node:assert/strict');
const test = require('node:test');

const calculator = require('../');

test('evaluate handles unary negative numbers', () => {
    assert.equal(calculator.evaluate('-4'), -4);
    assert.equal(calculator.evaluate('5*-5'), -25);
    assert.equal(calculator.evaluate('5 * -5'), -25);
    assert.equal(calculator.evaluate('5--5'), 10);
    assert.equal(calculator.evaluate('-(2 + 3)'), -5);
    assert.equal(calculator.evaluate('-.5 * 8'), -4);
});

test('evaluate preserves existing operator behavior', () => {
    assert.equal(calculator.evaluate('5-5'), 0);
    assert.equal(calculator.evaluate('2^3^2'), 512);
    assert.equal(calculator.evaluate('max(3,2)'), 3);
    assert.equal(calculator.evaluate('sqrt(81)'), 9);
    assert.equal(calculator.evaluate('pi'), Math.PI);
    assert.equal(calculator.evaluate('.5 + .25'), 0.75);
    assert.equal(calculator.evaluate('((2 + 3) * (4 - 1)) / 5'), 3);
    assert.equal(calculator.evaluate('[2 + {3 * 4}]'), 14);
    assert.equal(calculator.evaluate('min(max(2, 3), 4)'), 3);
});

test('calculate and calc alias evaluate', () => {
    assert.equal(calculator.calculate('5 * -5'), -25);
    assert.equal(calculator.calc('sqrt(16) + 2'), 6);
});

test('evaluate returns Invalid input for malformed expressions', () => {
    assert.equal(calculator.evaluate('5 *'), 'Invalid input');
    assert.equal(calculator.evaluate('(5 + 2'), 'Invalid input');
    assert.equal(calculator.evaluate('5 $ 2'), 'Invalid input');
    assert.equal(calculator.evaluate('max(,2)'), 'Invalid input');
});
