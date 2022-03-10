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

test('multiplyBy12ThenHalve()test to multiply number by 12 then cut half of product', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);

    const expected2 = 30;
    const actual2 = multiplyBy12ThenHalve(5);
    expect.equal(actual2, expected2);

    const expected3 = 42;
    const actual3 = multiplyBy12ThenHalve(7);
    expect.equal(actual3, expected3);
});

test('divideThenMultiply()test to divide number then multiply result', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = 4;
    const actual2 = divideThenMultiply(10, 5, 2);
    expect.equal(actual2, expected2);

    const expected3 = 50;
    const actual3 = divideThenMultiply(100, 10, 5);
    expect.equal(actual3, expected3);
});

test('returnAsAnArray()test to to return numbers as array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected2 = [11, 12, 13];
    const actual2 = returnAsAnArray(11, 12, 13);
    expect.deepEqual(actual2, expected2);

    const expected3 = [21, 22, 23];
    const actual3 = returnAsAnArray(21, 22, 23);
    expect.deepEqual(actual3, expected3);
});

test('returnAsAString()test to return numbers as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = '147';
    const actual2 = returnAsAString(1, 4, 7);
    expect.equal(actual2, expected2);

    const expected3 = '495';
    const actual3 = returnAsAString(4, 9, 5);
    expect.equal(actual3, expected3);
});

test('makeLuckyGreeting()', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';
	
    const actual = makeLuckyGreeting(8, 4);
	
    expect.equal(actual, expected);
	
    const expected2 = 'Hello! Your lucky number for the day is 7';
    const actual2 = makeLuckyGreeting(3, 4);
    expect.equal(actual2, expected2);
	
    const expected3 = 'Hello! Your lucky number for the day is 3';
    const actual3 = makeLuckyGreeting(1, 2);
    expect.equal(actual3, expected3);
});

test('getSecondItem()', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('getLastItem()', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});