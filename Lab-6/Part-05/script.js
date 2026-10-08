// Guided Example  Wallet
  let balance = start; // Enclosed private variable
  return {
    add(n) {
      balance += n;
      return balance;
    },
    spend(n) {
      if (n > balance) return "Insufficient balance";
      balance -= n;
      return balance;
    },
    show() {
      return balance;
    },
    reset() {
      balance = start; // Captured initial argument 'start'
      return balance;
    }
  };


const wallet = createWallet(100);
console.log(wallet.add(50));    // 150
console.log(wallet.spend(30));  // 120
console.log(wallet.spend(500)); // Insufficient balance
console.log(wallet.show());     // 120

// Task 5.1 Type it. Try to cheat: wallet.balance = 99999; then wallet.show(). Did the money change? Why not?
wallet.balance = 99999;
console.log(wallet.show());     // 120 (Private variable is untouched)
console.log(wallet.balance);    // 99999 (Detached public property on object)

// Task 5.2 Add a reset() function that sets balance back to the starting amount. (Hint: the start parameter is also remembered.)
console.log(wallet.reset());    // 100

//Task 5.3  Login Guard Complete a closure limiter(max) that allows only max attempts:
function limiter(max) {
  let used = 0;
  return function () {
    if (used < max) {
      used++;
      return `Attempt ${used} of ${max}`;
    }
    return "Locked!";
  };
}

const tryLogin = limiter(3);
console.log(tryLogin()); // Attempt 1 of 3
console.log(tryLogin()); // Attempt 2 of 3
console.log(tryLogin()); // Attempt 3 of 3
console.log(tryLogin()); // Locked!

/*Fun Task 5.4  "Secret Diary" Create createDiary() with write(text) and read(). The diary entries
must be stored in a private array that nobody can touch directly. Prove it by trying to access the
array from outside.*/
function createDiary() {
  const entries = [];
  return {
    write(text) {
      entries.push(text);
      return "Entry saved";
    },
    read() {
      return [...entries];
    }
  };
}

const diary = createDiary();
diary.write("Practiced JavaScript closures today.");
console.log(diary.read());    // ['Practiced JavaScript closures today.']
console.log(diary.entries);   // undefined (Encapsulation verified)