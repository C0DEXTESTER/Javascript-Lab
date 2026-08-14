let isMember = true;
let totalSpent = 6000;

let discountType =
    (isMember && totalSpent >= 5000)
        ? "VIP Discount"
        : totalSpent >= 5000
        ? "Regular Discount"
        : "No Discount";

console.log(discountType);