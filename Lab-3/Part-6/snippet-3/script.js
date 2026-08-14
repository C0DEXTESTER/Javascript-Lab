const cartTotal = 1200;      //Original
cartTotal = cartTotal - 100;
let shipping = cartTotal >= 1500 ? "Free":"Paid";
console.log(shipping);

cartTotal = cartTotal - 100; //Corrected
shipping = cartTotal >= 1500 ? "Free" : "Paid";
console.log(shipping);