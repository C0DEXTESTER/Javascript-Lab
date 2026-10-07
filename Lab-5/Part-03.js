//Task 3.1: Write a function calculatePrice(price, tax=0.18) that returns price + (price * tax).
function calculatePrice(price, tax = 0.18) {
  return price + (price * tax);
}
console.log("Custom tax (5%):", calculatePrice(100, 0.05)); 
console.log("Default tax (18%):", calculatePrice(100));

//Task 3.2: Call calculateArea(length, width) with only ONE argument. What do you get, and why?
function calculateArea(length, width) {
  return length * width;
}
console.log("Area with one argument:", calculateArea(5));