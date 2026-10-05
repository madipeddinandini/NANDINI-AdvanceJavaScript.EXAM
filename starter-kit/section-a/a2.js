// A2 — Predict the output (5 marks)
// Write your prediction BEFORE running this file.

function makeAdders() {
  const adders = [];
  for (var i = 1; i <= 3; i++) {
    adders.push((x) => x + i);
  }
  return adders;
}

const [a1, a2, a3] = makeAdders();
console.log(a1(10), a2(10), a3(10));

// Output:
// 14 14 14

// Reasoning:
// because we are using the var so var is be changing it value for every time when we change 
// so 

// One-word change that makes this print 11 12 13, and why it works:
// VAR 
