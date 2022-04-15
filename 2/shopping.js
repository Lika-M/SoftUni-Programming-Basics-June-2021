function shopping(input) {
    let budget = Number(input[0]);
    let numVideocards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numMemory = Number(input[3]);

    let priceVideocards = numVideocards * 250;
    let priceProcessors = numProcessors * priceVideocards * 0.35;
    let priceMemory = numMemory * priceVideocards * 0.10;

    let sum = priceVideocards + priceProcessors + priceMemory;
    if (numVideocards > numProcessors) {
        sum = sum * 0.85;
    }

    if (sum <= budget) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])


