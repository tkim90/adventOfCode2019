// https://adventofcode.com/2019/day/2

const modulesMass = require('./day1_data');

const computeOpcode = (input) => {
  let idx = 0;

  while (idx < input.length) {
    let opcode = input[idx];
    if (opcode === 99) return input;
    else {
      const leftVal = input[input[idx + 1]];
      const rightVal = input[input[idx + 2]];
      const sum = performOperation(opcode, leftVal, rightVal);
      input[input[idx + 3]] = sum;
    }
    idx += 4;
  }
};

function performOperation(opcode, leftVal, rightVal) {
  if (opcode === 1) return leftVal + rightVal;
  if (opcode === 2) return leftVal * rightVal;
};

console.log(computeOpcode([1,9,10,3,2,3,11,0,99,30,40,50]).toString() === '3500,9,10,70,2,3,11,0,99,30,40,50');
console.log(computeOpcode([1,0,0,0,99]).toString() === '2,0,0,0,99');
console.log(computeOpcode([2,3,0,3,99]).toString() === '2,3,0,6,99');
console.log(computeOpcode([2,4,4,5,99,0]).toString() === '2,4,4,5,99,9801');
console.log(computeOpcode([1,1,1,4,99,5,6,0,99]).toString() === '30,1,1,4,2,5,6,0,99');
