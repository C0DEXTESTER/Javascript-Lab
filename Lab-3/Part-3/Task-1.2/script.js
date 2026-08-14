const item1 = { name: "Notebook", price: 60, qty: 3 };
const item2 = { name: "Pen", price: 10, qty: 5 };
const item3 = { name: "Bag", price: 800, qty: 1 };
const item4 = { name: "Pencil", price: 5, qty: 4 };

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;

const grandTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;

console.log("Subtotal 1:", subtotal1);
console.log("Subtotal 2:", subtotal2);
console.log("Subtotal 3:", subtotal3);
console.log("Subtotal 4:", subtotal4);
console.log("Grand Total:", grandTotal);