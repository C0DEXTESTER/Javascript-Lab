//Task 5.1: Write an if block declaring a variable with let inside it.
if (true) {
  let discountApplied = true;
  console.log("Inside block (let):", discountApplied); 
}
// console.log(discountApplied); // Throws ReferenceError if uncommented

//Task 5.2: Repeat Task 5.1, but declare the variable with var.
if (true) {
  var discountVar = true;
}
console.log("Outside block (var):", discountVar);