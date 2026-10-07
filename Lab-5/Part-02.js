//Task 2.1: Rewrite the isAdult function as a function expression.
const isAdultExpr = function(age) {
  return age >= 18;
};
console.log("Expression adult check (20):", isAdultExpr(20));

//Task 2.2: Write an arrow function square(n) that returns n * n, using the shortest arrow form.
const square = n => n * n;
console.log("Square of 4:", square(4)); 
console.log("Square of 7:", square(7)); 
console.log("Square of 10:", square(10));

//Task 2.3: Write an arrow function fullName(first, last) that returns the two names joined with a space.
const fullName = (first, last) => `${first} ${last}`;
console.log("Full Name:", fullName("Rishikesh", "Priyadarshi"));