const scores = [65, 72, 80, 55, 68];

const sum = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
const average = sum / scores.length;

const result = average >= 40 ? "Pass" : "Fail";

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Result:", result);