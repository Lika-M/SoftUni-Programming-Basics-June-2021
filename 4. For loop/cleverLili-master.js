function cleverLily(input) {

    let age = Number(input[0]);
    let priseWashmashine = Number(input[1]);
    let toyPrise = Number(input[2]);

    let moneySum = 0;
    let toyCount = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneySum += 1;
            moneySum = 10 + money;
        } else {
            toyCount++
        }
    }
    let toySum = toyPrise * toyCount;
    let saveMoney = moneySum + toySum;

    if (saveMoney > priseWashmashine) {
        console.log("Yes! " + (saveMoney - priseWashmashine).toFixed(2))
    } else {
        console.log("No! " + (priseWashmashine - saveMoney).toFixed(2))
    }

}
cleverLily(["10", "170", "6"])

