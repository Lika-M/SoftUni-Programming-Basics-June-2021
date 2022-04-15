function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let count = Number(input[2]);

    let ticketPrise = 0;
    let transportPrise = 0;

    switch (category) {
        case "VIP":
            ticketPrise = 499.99; break;
        case "Normal":
            ticketPrise = 249.99; break;
    }
    if (count >=1 && count <= 4) {
        transportPrise = budget* 0.75;
    } else if (count >= 5 && count <= 9) {
        transportPrise = budget* 0.60;
    } else if (count >= 10 && count <= 24) {
        transportPris = budget* 0.50;
    } else if (count >= 25 && count <= 49) {
        transportPrise = budget * 0.40;
    } else if (count >= 50) {
        transportPrise = budget * 0.25;
    }

    let allSum = transportPrise + ticketPrise * count;

    if (budget >= allSum) {
        console.log(`Yes! You have ${(budget - allSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(allSum - budget).toFixed(2)} leva.`)
    }
}

matchTickets(["30000",
    "VIP",
    "49"
])