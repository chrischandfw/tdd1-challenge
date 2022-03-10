// IMPORT MODULES under test here:
import { 
    addExclamationPoints, 
    divideThenMultiply, 
    getLastItem, 
    getRandomNumber, 
    getSecondItem, 
    makeLuckyGreeting, 
    multiplyBy12ThenHalve, 
    multiplyBySeven, 
    returnAsAnArray, 
    returnAsAString,
} from '../functions.js';
	

/*const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});*/

const { test, skip } = QUnit;

test('addExclamationPoints()test to add exclamation marks to animal string', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);

    const expected2 = 'Texas!!!';
    const actual2 = addExclamationPoints('Texas');
    expect.equal(actual2, expected2);

    const expected3 = 'Amazing!!!';
    const actual3 = addExclamationPoints('Amazing');
    expect.equal(actual3, expected3);
});

test('multiplyBySeven()test to multiply number by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 14;
    const actual2 = multiplyBySeven(2);
    expect.equal(actual2, expected2);

    const expected3 = 49;
    const actual3 = multiplyBySeven(7);
    expect.equal(actual3, expected3);
});

test('multiplyBy12ThenHalve()test to multiply number by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 14;
    const actual2 = multiplyBySeven(2);
    expect.equal(actual2, expected2);

    const expected3 = 49;
    const actual3 = multiplyBySeven(7);
    expect.equal(actual3, expected3);
});