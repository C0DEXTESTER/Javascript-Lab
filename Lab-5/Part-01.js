//Task 1.1: Write a function declaration isAdult(age) that returns true if age >= 18, otherwise false. Test it with 3 different ages.

function isAdult(age) {
  return age >= 18;
}
console.log("Adult check (15):", isAdult(15)); 
console.log("Adult check (18):", isAdult(18)); 
console.log("Adult check (22):", isAdult(22));

//Task 1.2: Write a function declaration calculateDiscount(price, isMember) that returns price * 0.9 if isMember is true, otherwise returns price unchanged.

function calculateDiscount(price, isMember) {
  if (isMember) {
    return price * 0.9;
  }
  return price;
}
console.log("Member price:", calculateDiscount(100, true));  
console.log("Non-member price:", calculateDiscount(100, false));