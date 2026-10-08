/*Task 6.1 Write both outputs. In your own words, explain why var gives [3, 3, 3] while let gives [0, 1,
2]. (Hint: how many copies of i exist in each case?)*/
const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
console.log(withVar.map(f => f())); // [3, 3, 3]

const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}
console.log(withLet.map(f => f())); // [0, 1, 2]

//Task 6.2 Predict first, then run this timer version. It prints after about 1 second:

// Problematic var timer:
for (var k = 1; k <= 3; k++) {
  setTimeout(() => console.log("var:", k), 1000);
}
// Outputs: var: 4 (three times)

// Block-scoped let timer:
for (let m = 1; m <= 3; m++) {
  setTimeout(() => console.log("let:", m), 1000);
}
// Outputs: let: 1, let: 2, let: 3

//Fun Task 6.3 — &quot;Fix the Bug&quot; Change only ONE word in the var loop of Task 6.2 so it prints 1, 2, 3.
for (let k = 1; k <= 3; k++) {
  setTimeout(() => console.log("var:", k), 1000);
}