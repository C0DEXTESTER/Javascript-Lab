/*You built this in Lab 2 using ternary. Build it again,
now with if-else-if: age < 5 → "Free", age < 12 → "Rs. 100", age < 60 → "Rs. 250", else → "Rs.
150". Test with 5 different ages.*/

let age = 21;

if(age < 5){
    console.log("Ticket is Free");
}
else if(age <= 12){
    console.log("Ticket is 100Rs");
}
else if(age <= 60){
    console.log("Ticket is 250Rs");
}
else if(age > 60){
    console.log("Ticket is 150Rs");
}
else{
    console.log("Invalid Input");
}