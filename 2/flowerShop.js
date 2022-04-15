function flowerShop(input) {
    let numMagnolias = Number(input[0]);
    let numHyacinths = Number(input[1]);
    let numRoses = Number(input[2]);
    let numCacti = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sumFlowers = numMagnolias * 3.25 + numHyacinths * 4 + numRoses * 3.5 + numCacti * 8;
    let finalSum = sumFlowers * 0.95;

    if (finalSum >= giftPrice) {
        console.log(`She is left with ${Math.floor(finalSum - giftPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalSum)} leva.`)
    }
}

flowerShop([15, 7, 5, 10, 100])