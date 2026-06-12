const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

function runExample(name) {
    const output = execFileSync(process.execPath, [path.join(__dirname, '..', 'examples', name)], {
        encoding: 'utf8'
    });

    return output.trim().split(/\r?\n/);
}

test('basic example runs with expected output', () => {
    assert.deepEqual(runExample('basic.js'), ['-25', '10', '-5', '10']);
});

test('conversions example runs with expected output', () => {
    assert.deepEqual(runExample('conversions.js'), ['1', '1000', '3.048', '32']);
});
