module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
  modulo: (a, b) => {
    if (b === 0) throw new Error('Modulo by zero');
    return a % b;
  },
  power: (base, exponent) => Math.pow(base, exponent),
  squareRoot: (n) => {
    if (n < 0) throw new Error('Square root of negative number');
    return Math.sqrt(n);
  },
};
