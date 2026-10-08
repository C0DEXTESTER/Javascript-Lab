//Task 3.1 Run the same for const PI = 3.14; placed after a console.log(PI);. Write the error message.
console.log(age);
let age = 20;
// Error: ReferenceError: Cannot access 'age' before initialization
console.log(PI);
const PI = 3.14;
// Error: ReferenceError: Cannot access 'PI' before initialization

//Task 3.2 — typeof Surprise Predict and run both. They are NOT the same!
console.log(typeof x);
var x = 5;

console.log(typeof y);
let y = 5;

/*Fun Task 3.4 — &quot;Error Detective&quot; Write four mini-programs (2–3 lines each), each one causing a
different result: (a) prints undefined, (b) ReferenceError, (c) TypeError, (d) works perfectly because of
hoisting. Swap with a partner and let them guess which is which.*/
// (a) undefined
console.log(score);
var score = 100;

// (b) ReferenceError
console.log(rank);
let rank = 1;

// (c) TypeError
greet();
var greet = () => "Hello";

// (d) Works perfectly due to hoisting
console.log(getGreeting());
function getGreeting() { return "Namaste from Haridwar!"; }
