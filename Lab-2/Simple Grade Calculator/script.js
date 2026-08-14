// Student marks
let subject1 = 85;
let subject2 = 80;
let subject3 = 90;

// Attendance
let attendance = 82;

// Calculate total and average
let total = subject1 + subject2 + subject3;
let average = total / 3;

// Calculate grade using nested ternary operator
let grade =
    average >= 90 ? "A" :
    average >= 75 ? "B" :
    average >= 40 ? "C" :
    "F";

// Check data type of average
console.log("Average data type:", typeof average);

// Scholarship eligibility
let isEligibleForScholarship =
    average >= 85 && attendance >= 75;

// Final summary
console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);

console.log("Scholarship Eligible:", isEligibleForScholarship);