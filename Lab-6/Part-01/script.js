//Task 1.1 Predict, then run. Write the output in your record:
console.log(city);
var city = "Haridwar";
console.log(city);

//Task 1.2 What does this print? Think about hoisting inside a function.
function showMessage() {
console.log(message);
var message = "Hello";
console.log(message);
}
showMessage();

//Task 1.3  Shadow Trap Predict the output. Why is the first line NOT &quot;global&quot;?
var name = "global";
function test() {
console.log(name);
var name = "local";
}
test();

/*Fun Task 1.4  &quot;Magic Trick&quot; Write a 4-line program that prints undefined first and then your
favourite food, using only var and two console.log lines. Show a friend and let them guess the output
before you run it.*/
console.log(favFood);
var favFood = "Chole Bhature";
console.log(favFood);