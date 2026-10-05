// A1 — Predict the output (5 marks)
// Write your prediction BEFORE running this file.

console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

// Output:
// A
// D
// C
// B

// Reasoning:
//first console.log A & B will be printing and then the promise will be checking 
// the value it is having error or correct and it will be printing the 
// and last it will be printing the setimeout because we give the 0milliseconds for it .
// all this thing is ASYNCROUS because in asyncrous it will be not wait for the first code 
// to run if it has some time and then it will be getting the output.

