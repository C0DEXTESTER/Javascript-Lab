//Debugging Challenge
// Snippet 1 — runs, but prints &quot;undefined&quot; then 5. Make the &quot;undefined&quot; go away
console.log(total);
var total = 5;
// Snippet 2 — TypeError. Fix it without changing &quot;var&quot; to &quot;const&quot;
greet();
var greet = function () { console.log(&quot;Hi&quot;); };
// Snippet 3 — counter always prints 0 0
function makeCounter() { let c = 0; return c++; }
const next = makeCounter();
console.log(next, next);
// Snippet 4 — counter always prints 1 1 1
function makeCounter2() {
return function () { let count = 0; count++; return count; };
}
const n = makeCounter2();
console.log(n(), n(), n());