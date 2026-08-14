function ticketPrice(age) {
    let price = age < 5 ? "Free"
        : age < 12 ? "₹100"
        : age < 60 ? "₹250"
        : "₹150";

    console.log("Age:", age, "Ticket:", price);
}

ticketPrice(3);
ticketPrice(8);
ticketPrice(25);
ticketPrice(60);
ticketPrice(70);