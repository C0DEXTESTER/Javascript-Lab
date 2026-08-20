//ATM Problem : Store a correct pin and a guess pin in different variable if they are same print Access Granted otherwise Access Denied...

let guessPin = 2345;
const correctPin = 1234;

if(guessPin == correctPin){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}