//Task 2.1 Run this. What error appears? Write the exact message.
sayHi();
var sayHi = function () {
console.log("Hi!");
};

//Task 2.2 Change var to const in Task 2.1. Does the error type change? Write both error types side by side.
sayHiConst();
const sayHiConst = function () {
  console.log("Hi!");
};

//Task 2.3  Sorting Table Fill in the table. Run each one separately to check.
//Task 2.4  Two Functions, Same Name Predict, then run:
console.log(fnA());
function fnA() { return &quot;First&quot;; }
function fnA() { return &quot;Second&quot;; }

/*Fun Task 2.5  "Top-Down Stor" Write a small program in which the main story lines are at the
TOP of the file and the helper functions (wakeUp, eatBreakfast, goToCollege) are at the BOTTOM.
Explain in one sentence why this works only for declarations.*/
// Main story lines at the TOP of the file
wakeUp();
eatBreakfast();
goToCollege();

// Helper functions declared at the BOTTOM of the file
function wakeUp() { console.log("Step 1: Woke up early in Haridwar."); }
function eatBreakfast() { console.log("Step 2: Ate breakfast."); }
function goToCollege() { console.log("Step 3: Arrived at DSVV for lecture."); }