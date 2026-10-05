// A3 — Predict the output (5 marks)
// Write your prediction BEFORE running this file.

async function first() {
  console.log('1');
  await second();
  console.log('2');
}

async function second() {
  console.log('3');
}

console.log('4');
first();
console.log('5');

// Output:
// 4
// 1
// 2
// 3
// 5

// Reasoning:
// first in the callstack in will be storaging the console.log value (4) and it will 
// be printed output the value.next it will be taking the function and when we are 
// calling that function at that time we are calling the second function in first function
// so here it will be printing the values (1,2,3) and then it will be storaging console.log(5)
// will be printed.

