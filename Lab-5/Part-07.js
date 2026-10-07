//Requirements: Combine declarations, expressions, and arrow functions to calculate student grades, apply late fees, modify a global total, and print summaries.
let totalFeeCollected = 0;

// Function Declaration for grading
function calculateGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  return "F";
}

// Function Expression for late fees
const calculateLateFee = function(daysLate = 0) {
  return daysLate * 10;
};

// Arrow Function for main processing
const processStudent = (name, marks, daysLate = 0) => {
  let grade = calculateGrade(marks);
  let fee = calculateLateFee(daysLate);
  
  totalFeeCollected += fee;
  
  console.log(`${name} -> Grade ${grade}, Late Fee Rs.${fee}.`);
};

// Execution / Testing
processStudent("Aditi", 92, 0);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
console.log(`Final totalFeeCollected -> Rs.${totalFeeCollected}.`);