function familyTrip(input) {

    let budget = Number(input[0]);
    let numNights = Number(input[1]);
    let priceNights = Number(input[2]);
    let additionalCost = Number(input[3]);

    let nights = numNights * priceNights;
    let money = 0;

    if (numNights <= 7) {
        money = nights + budget * additionalCost / 100;
    } else {
        money = nights * 0.95 + budget * additionalCost / 100;
    }

    if (budget >= money) {
        console.log(`Ivanovi will be left with ${(budget - money).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(money - budget).toFixed(2)} leva needed.`)
    }
}

familyTrip(["500",
"7",
"66",
"15"])

