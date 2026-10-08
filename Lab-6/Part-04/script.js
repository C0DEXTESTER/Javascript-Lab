/*Task 4.1 Type the counter. Call counterA 5 times and counterB 2 times. Write the outputs. Why
does counterB not continue from counterA?*/
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA(), counterA(), counterA(), counterA(), counterA()); // 1 2 3 4 5
console.log(counterB(), counterB());                                     // 1 2

//Task 4.2 Try console.log(count); outside the function. What error? What does this prove about closure variables?
console.log(count);
// Output: ReferenceError: count is not defined

//Task 4.3  Multiplier Factory Complete and run:
function makeMultiplier(n) {
return function (x) {
return x * ___;
};
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5), triple(5)); // 10 15

//Task 4.4 Write makeGreeter(greeting) so that makeGreeter(&quot;Namaste&quot;)(&quot;Aditi&quot;) prints Namaste, Aditi!.
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

console.log(makeGreeter("Namaste")("Aditi")); // Namaste, Aditi!

/*Fun Task 4.5 "Chai Counter" Make makeCupCounter() that returns a function. Each call adds
one cup and returns the message "Cup number 3 of chai". Make two counters for two different
friends and show they do not mix.*/
function makeCupCounter() {
  let count = 0;
  return function () {
    count++;
    return `Cup number ${count} of chai`;
  };
}

const rahulChai = makeCupCounter();
const rohitChai = makeCupCounter();

console.log(rahulChai()); // Cup number 1 of chai
console.log(rahulChai()); // Cup number 2 of chai
console.log(rohitChai()); // Cup number 1 of chai
console.log(rahulChai()); // Cup number 3 of chai

