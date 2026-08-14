function shippingCost(cartTotal) {
    let shipping = cartTotal >= 2000 ? "Free Shipping"
        : cartTotal >= 1000 ? "₹50"
        : "₹100";

    console.log("Cart Total:", cartTotal, "Shipping:", shipping);
}

shippingCost(2500);
shippingCost(1500);
shippingCost(500);