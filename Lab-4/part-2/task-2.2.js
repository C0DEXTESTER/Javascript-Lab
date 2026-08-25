/*Store a correct PIN, like 1234, in one variable. Store
a guess in another variable. If the guess matches, print "Access Granted". If not, print "Access
Denied". Test once with the right PIN, and once with a wrong PIN.*/

let correctPin = 1234;
let guessPin = 1234;

if (guessPin === correctPin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}