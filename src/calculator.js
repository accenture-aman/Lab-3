#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add:       addition (a + b)
// - subtract:  subtraction (a - b)
// - multiply:  multiplication (a * b)
// - divide:    division (a / b)

// Usage examples:
//   node src/calculator.js add 2 3        -> 5
//   node src/calculator.js subtract 5 2   -> 3
//   node src/calculator.js multiply 4 6   -> 24
//   node src/calculator.js divide 10 2    -> 5

function printHelp() {
  console.log(`Usage: node src/calculator.js <operation> <num1> <num2>

Operations:
  add       Add num1 and num2
  subtract  Subtract num2 from num1
  multiply  Multiply num1 by num2
  divide    Divide num1 by num2

Examples:
  node src/calculator.js add 2 3
  node src/calculator.js divide 10 2
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

if (args.length !== 3) {
  exitWithError('Error: Invalid number of arguments. Use --help for usage.');
}

const [op, aRaw, bRaw] = args;
const a = Number(aRaw);
const b = Number(bRaw);

if (Number.isNaN(a) || Number.isNaN(b)) {
  exitWithError('Error: Both operands must be valid numbers.');
}

let result;
switch (op.toLowerCase()) {
  case 'add':
    result = a + b;
    break;
  case 'subtract':
    result = a - b;
    break;
  case 'multiply':
    result = a * b;
    break;
  case 'divide':
    if (b === 0) {
      exitWithError('Error: Division by zero is not allowed.');
    }
    result = a / b;
    break;
  default:
    exitWithError(`Error: Unknown operation '${op}'. Use --help for supported operations.`);
}

// Print result to stdout
console.log(result);
