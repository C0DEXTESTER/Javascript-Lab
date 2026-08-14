// Three product objects
const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

// Defensive type check
if (
    typeof item1.price === "number" &&
    typeof item2.price === "number" &&
    typeof item3.price === "number"
) {

    // Calculate individual subtotals
    const subtotal1 = item1.price * item1.qty;
    const subtotal2 = item2.price * item2.qty;
    const subtotal3 = item3.price * item3.qty;

    // Calculate grand total
    const grandTotal = subtotal1 + subtotal2 + subtotal3;

    // Tiered discount
    const discountPercent =
        grandTotal >= 5000 ? 20
        : grandTotal >= 2000 ? 10
        : grandTotal >= 1000 ? 5
        : 0;

    // Discount amount
    const discountAmount = grandTotal * discountPercent / 100;

    // Amount after discount
    const afterDiscount = grandTotal - discountAmount;

    // GST calculation
    const gst = afterDiscount * 18 / 100;

    // Final payable amount
    const finalPayable = afterDiscount + gst;

    // Free shipping condition
    const freeShipping =
        afterDiscount >= 1500 || 3 >= 3;

    // Shipping status
    const shippingStatus = freeShipping
        ? "FREE"
        : "₹100 shipping charge";

    // Optional loyalty points
    const loyaltyPoints = finalPayable / 100;

    // Receipt
    console.log("========== RECEIPT ==========");
    console.log(item1.name + " x " + item1.qty + " = ₹" + subtotal1);
    console.log(item2.name + " x " + item2.qty + " = ₹" + subtotal2);
    console.log(item3.name + " x " + item3.qty + " = ₹" + subtotal3);

    console.log("-----------------------------");
    console.log("Grand Total: ₹" + grandTotal);
    console.log("Discount: " + discountPercent + "%");
    console.log("Discount Amount: ₹" + discountAmount.toFixed(2));
    console.log("After Discount: ₹" + afterDiscount.toFixed(2));
    console.log("GST (18%): ₹" + gst.toFixed(2));
    console.log("Final Payable: ₹" + finalPayable.toFixed(2));
    console.log("Shipping: " + shippingStatus);
    console.log("Loyalty Points: " + loyaltyPoints);
    console.log("=============================");

} else {
    console.log("Error: Product prices must be Numbers.");
}