import { addExclamationPoints } from '../functions.js';
import './functions.test.js';

const { test, skip } = QUnit;

test('addExclamationPoints()test to add exclamation marks to animal string', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit', '!!!');

    expect.equal(actual, expected);

    const expected2 = 'Texas!!!';
    const actual2 = addExclamationPoints('Texas', '!!!');
    expect.equal(actual2, expected2);
});
