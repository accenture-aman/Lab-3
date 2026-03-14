const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculatorLib');

test('add 2 + 3 = 5', () => {
  expect(add(2,3)).toBe(5);
});

test('subtract 10 - 4 = 6', () => {
  expect(subtract(10,4)).toBe(6);
});

test('multiply 45 * 2 = 90', () => {
  expect(multiply(45,2)).toBe(90);
});

test('divide 20 / 5 = 4', () => {
  expect(divide(20,5)).toBe(4);
});

test('division by zero throws', () => {
  expect(() => divide(1,0)).toThrow('Division by zero');
});

test('floating point division', () => {
  expect(divide(7,2)).toBeCloseTo(3.5);
});

// New tests for extended operations

test('modulo 5 % 2 = 1', () => {
  expect(modulo(5,2)).toBe(1);
});

test('modulo by zero throws', () => {
  expect(() => modulo(1,0)).toThrow('Modulo by zero');
});

test('power 2 ^ 3 = 8', () => {
  expect(power(2,3)).toBe(8);
});

test('power with fractional exponent (sqrt)', () => {
  expect(power(9, 0.5)).toBeCloseTo(3);
});

test('power with negative exponent', () => {
  expect(power(2, -1)).toBeCloseTo(0.5);
});

test('square root 16 = 4', () => {
  expect(squareRoot(16)).toBe(4);
});

test('square root of negative throws', () => {
  expect(() => squareRoot(-4)).toThrow('Square root of negative number');
});
