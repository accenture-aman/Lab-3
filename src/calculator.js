#!/usr/bin/env node

// Node.js CLI Calculator (uses src/calculatorLib.js)
// Supported operations:
// - add:       addition (a + b)
// - subtract:  subtraction (a - b)
// - multiply:  multiplication (a * b)
// - divide:    division (a / b)

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('./calculatorLib');

function printHelp() {
  console.log(`Usage:
  node src/calculator.js <operation> <num1> <num2>
  node src/calculator.js sqrt <num>

Operations:
  add       Add num1 and num2
  subtract  Subtract num2 from num1
  multiply  Multiply num1 by num2
  divide    Divide num1 by num2
  modulo    Remainder of num1 divided by num2
  power     Raise base to exponent (base ^ exponent)
  sqrt      Square root of num

Examples:
  node src/calculator.js add 2 3
  node src/calculator.js divide 10 2
  node src/calculator.js modulo 10 3
  node src/calculator.js power 2 8
  node src/calculator.js sqrt 9
`);
}

function exitWithError(msg) {
  console.error(msg);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

const op = args[0].toLowerCase();
let a, b;

if (op === 'sqrt' || op === 'squareroot') {
  if (args.length !== 2) {
    exitWithError('Error: sqrt requires 1 operand. Use --help for usage.');
  }
  a = Number(args[1]);
  if (Number.isNaN(a)) exitWithError('Error: Operand must be a valid number.');
} else {
  if (args.length !== 3) {
    exitWithError('Error: Invalid number of arguments. Use --help for usage.');
  }
  a = Number(args[1]);
  b = Number(args[2]);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    exitWithError('Error: Both operands must be valid numbers.');
  }
}

let result;
try {
  switch (op) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
    case 'mod':
    case '%':
      result = modulo(a, b);
      break;
    case 'power':
    case 'pow':
    case '**':
      result = power(a, b);
      break;
    case 'sqrt':
    case 'squareroot':
      result = squareRoot(a);
      break;
    default:
      exitWithError(`Error: Unknown operation '${op}'. Use --help for supported operations.`);
  }
} catch (e) {
  exitWithError('Error: ' + e.message);
}

console.log(result);
