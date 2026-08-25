/*Write an if-else-if chain for a temperature variable:
above 35 → "It's hot! Drink water.", above 20 → "Nice weather!", above 10 → "A bit cold. Wear a
jacket.", else → "Very cold! Stay warm." Test with 4 different temperatures.*/

let temperature = 25;

if(temperature > 35){
    console.log("It's hot! Drink water.");
}
else if(temperature > 20){
    console.log("Nice weather!");
}
else if(temperature > 10){
    console.log("A bit cold. Wear a jacket.");
}
else{
    console.log("Very cold! Stay warm.");
}
