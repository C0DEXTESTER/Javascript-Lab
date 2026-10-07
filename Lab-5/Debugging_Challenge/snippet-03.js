//fixed code
let balance = 1000;
function withdraw(amount) {
  balance = balance - amount;
  return balance;
}
withdraw(200);
console.log(balance);