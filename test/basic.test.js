const assert = require('node:assert/strict');
const test = require('node:test');

const calculator = require('../');

test('evaluate handles unary negative numbers', () => {
    assert.equal(calculator.evaluate('-4'), -4);
    assert.equal(calculator.evaluate('5*-5'), -25);
    assert.equal(calculator.evaluate('5 * -5'), -25);
    assert.equal(calculator.evaluate('5--5'), 10);
    assert.equal(calculator.evaluate('-(2 + 3)'), -5);
});

test('evaluate preserves existing operator behavior', () => {
    assert.equal(calculator.evaluate('5-5'), 0);
    assert.equal(calculator.evaluate('2^3^2'), 512);
    assert.equal(calculator.evaluate('max(3,2)'), 3);
});

test('evaluate returns Invalid input for malformed expressions', () => {
    assert.equal(calculator.evaluate('5 *'), 'Invalid input');
    assert.equal(calculator.evaluate('(5 + 2'), 'Invalid input');
});
