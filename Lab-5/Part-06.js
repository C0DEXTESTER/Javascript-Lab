//Task 6.1: Write a nested function where the inner function reads a variable declared in the outer function.
function checkStatus() {
  let status = "Active";
  function displayStatus() {
    console.log("Nested function reading outer var:", status); 
  }
  displayStatus();
}
checkStatus();

//Task 6.2: Create a global variable role = "guest". Write loginAsAdmin() that declares a LOCAL role = "admin".
let role = "guest";
function loginAsAdmin() {
  let role = "admin";
  console.log("Inside loginAsAdmin:", role);
}
loginAsAdmin();
console.log("Outside loginAsAdmin (Global):", role);