let correctPin = 1234;
let enteredPin = 1234; // Change this to test wrong PIN (e.g., 9999)
let balance = 5000;

if (enteredPin !== correctPin) {
    console.log("Wrong PIN. Access Denied.");
} else {
    
    let choice = 3; // Change this choice to test different menu options
    
    switch (choice) {
        case 1:
            console.log("Current balance: " + balance);
            break;
            
        case 2:
            let withdrawAmount = 7000; // Change amount to test withdrawal
        
            if (withdrawAmount > balance) {
                console.log("Insufficient funds.");
            } else {
                balance = balance - withdrawAmount;
                console.log("New balance: " + balance);
            }
            break;
            
        case 3:
            let depositAmount = 2000; // Change amount to test deposit
            balance = balance + depositAmount;
            console.log("New balance: " + balance);
            break;
            
        default:
            console.log("Invalid choice.");
            break;
    }
}
