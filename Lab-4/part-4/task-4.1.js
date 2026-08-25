/*Write a switch-case for all 7 days (1 to 7 → Monday to Sunday). Add a default case for
any number outside 1–7.*/

let week = 9;  // week(1 to 7) for (monday to sunday)

switch (week){
    case 1:
        console.log("Monday");
        break;
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