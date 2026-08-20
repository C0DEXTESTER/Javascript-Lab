//For a movie if age<5 ticket is free, age<=12 ticket is 100Rs, age<=60 ticket is 200Rs, age>60 ticket is 150Rs...

let age = 21;

if(age < 5){
    console.log("Ticket is Free");
}
else if(age <= 12){
    console.log("Ticket is 100Rs");
}
else if(age <= 60){
    console.log("Ticket is 200Rs");
}
else if(age > 60){
    console.log("Ticket is 100Rs");
}
else{
    console.log("Invalid Input");
}