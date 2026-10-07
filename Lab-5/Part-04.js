//Task 4.1: Create a global variable taxRate = 0.18. Write finalPrice(amount) that uses the global taxRate.
let taxRate = 0.18;
function finalPrice(amount) {
  return amount + (amount * taxRate);
}
console.log("Final Price:", finalPrice(200));

//Task 4.2: Inside a function, declare a local variable with the exact SAME NAME as a global variable. Print the value inside and outside.
let storeName = "QuickMart";
function printStore() {
  let storeName = "LocalMart"; // Local declaration shadows global
  console.log("Inside function:", storeName); 
}
printStore();
console.log("Outside function:", storeName);