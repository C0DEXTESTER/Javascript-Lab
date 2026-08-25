/*Copy your Task 4.1 code. Remove ONE break on
purpose. Run it. What happens? Put the break back. Write 2 lines explaining what break does, in
your own words.*/

let week = 1;  // week(1 to 7) for (monday to sunday)
switch (week){
    case 1:
        console.log("Monday");
        
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
        break;
}
// The `break` statement is used to exit a switch block and prevent the execution from falling through to the next case.
