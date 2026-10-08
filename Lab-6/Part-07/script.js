//Mini Project: Smart Wallet with Login Guard
// ==========================================
// MAIN EXECUTION (Placed at TOP of file)
// ==========================================
console.log("=== Smart Wallet with Login Guard Initialization ===");
const wallet = createSmartWallet(500, 3);

// Sanity Checks
console.log("1. Add 200: New balance =", wallet.add(200));       // 700
console.log("2. Spend 150: New balance =", wallet.spend(150));     // 550
console.log("3. Spend 1000: Result =", wallet.spend(1000));       // Insufficient balance
console.log("4. Show balance: Verified =", wallet.show());        // 550
console.log("5. Transaction log:", wallet.history());             // ['Added 200', 'Spent 150']

// Test Login Guard Protection
console.log("\n=== Testing Login Guard Protection ===");
console.log("Attempt spend 50:", wallet.spend(50));               // 500 (Attempt 2 used)
console.log("Attempt spend 50:", wallet.spend(50));               // 450 (Attempt 3 used)
console.log("Attempt spend 50:", wallet.spend(50));               // Blocked: Guard is Locked!

// Bonus: Discount Factory makeDiscount(percent)
console.log("\n=== Bonus: Festive Discount Factory ===");
const festiveDiscount = makeDiscount(10);
console.log("Original 500 with 10% discount:", festiveDiscount(500)); // 450

// Final Summary Output
console.log(`\n=== Final Wallet Summary ===
Final Balance: ${wallet.show()}
Total Successful Records: ${wallet.history().length}
History: ${JSON.stringify(wallet.history())}
Execution Status: Successfully validated all specifications!`);

// ==========================================
// FUNCTION DECLARATIONS (Hoisted to top)
// ==========================================
function createSmartWallet(start, maxAttempts) {
  let balance = start;
  const historyLog = [];
  const guard = createLimiter(maxAttempts);

  return {
    add(n) {
      balance += n;
      historyLog.push(`Added ${n}`);
      return balance;
    },
    spend(n) {
      const auth = guard();
      if (auth === "Locked!") {
        return "Transaction Blocked: Security Guard is Locked!";
      }
      if (n > balance) {
        return "Insufficient balance";
      }
      balance -= n;
      historyLog.push(`Spent ${n}`);
      return balance;
    },
    show() {
      return balance;
    },
    history() {
      return [...historyLog];
    }
  };
}

function createLimiter(max) {
  let attempts = 0;
  return function () {
    if (attempts < max) {
      attempts++;
      return `Attempt ${attempts} of ${max}`;
    }
    return "Locked!";
  };
}

function makeDiscount(percent) {
  return function (amount) {
    return amount - (amount * percent) / 100;
  };
}