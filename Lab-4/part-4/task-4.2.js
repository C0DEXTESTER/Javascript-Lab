/*Make a variable called mood, with a value like
"happy", "sad", "angry", or "tired". Use switch-case to print a short matching message for each
mood, plus a default message for any other mood.*/

let mood = "sad";  // week(1 to 7) for (monday to sunday)

switch (mood){
    case "happy":
        console.log("This is such a good day.");
        break;
    case "sad":
        console.log("Today, Is my unlucky day.");
        break;
    case "angry":
        console.log("I want to beat someone.");
        break;
    case "tired":
        console.log("I just want to rest now.");
        break;
    default:
        console.log("I am fine, ThankYou.");
        break;
}