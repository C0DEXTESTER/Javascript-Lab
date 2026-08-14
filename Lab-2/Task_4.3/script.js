//Task 4.3

//initial code
let ageOld = 20;   
let hasIdOld = true;

console.log(ageOld >= 18 && hasIdOld);   //true
console.log(ageOld >= 18 || hasIdOld);   //true
console.log(!hasIdOld);               //false

//After change
let ageNew = 16;
let hasIdNew = true;

console.log(ageNew >= 18 && hasIdNew);    //false
console.log(ageNew >= 18 || hasIdNew);    //true
console.log(!hasIdNew);                //false