function easterParty(input) {

    let numGuests = Number(input[0]);
    let priceForOne = Number(input[1]);
    let budget = Number(input[2]);

    let priceForGuests = numGuests * priceForOne;
    let cake = budget * 0.1;
    let money = 0;

    if (numGuests < 10) {
        money = priceForGuests + cake;
    } else if (numGuests <= 15) {
        money = (priceForGuests * 0.85 + cake);
    } else if (numGuests <= 20) {
        money = (priceForGuests * 0.80 + cake);
    } else if (numGuests > 20) {
        money = (priceForGuests * 0.75 + cake);
    }

    if (budget >= money) {
        console.log(`It is party time! ${((budget - money).toFixed(2))} leva left.`)
    } else { 
    console.log(`No party! ${(money - budget).toFixed(2)} leva needed.`)
    }   
}

easterParty(["24",
"35",
"550"])

