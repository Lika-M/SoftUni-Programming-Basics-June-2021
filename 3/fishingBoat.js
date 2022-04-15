function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let prise = 0;

    switch (season) {
        case "Spring": prise = 3000; break;
        case "Summer":
        case "Autumn": prise = 4200; break;
        case "Winter": prise = 2600; break;
    }
    if (fishers <= 6) {
        prise *= 0.90;
    } else if (fishers <= 11) {
        prise *= 0.85;
    } else if (fishers >= 12) {
        prise *= 0.75;
    }

    if (fishers % 2 == 0 && season != "Autumn") {
        prise *= 0.95;
    }
    if (budget >= prise) {
        console.log(`Yes! You have ${(budget - prise).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(prise - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000",
"Summer",
"11"])



