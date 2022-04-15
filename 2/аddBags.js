function аddBags(input) {

    let priseOver = Number(input[0]);
    let weightBag = Number(input[1]);
    let daysTo = Number(input[2]);
    let numBag = Number(input[3]);

    let tax = priseOver * numBag;

    if (weightBag < 10) {
        tax = (priseOver * 0.2) * numBag;
    } else if (weightBag <= 20) {
        tax = (priseOver * 0.5) * numBag;
    } else {
        tax = priseOver * numBag;
    }

    if (daysTo < 7) {
        tax = tax*1.4;
    } else if (daysTo > 30) {
        tax = tax*1.1;
    } else {
        tax = tax*1.15;
    }
    console.log(`The total price of bags is: ${tax.toFixed(2)} lv.`)
}

аddBags([63.80,23,3,1])
