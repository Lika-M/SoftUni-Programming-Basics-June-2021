function cleverLily(input) {

    let age = Number(input[0]);
    let priseWashmashine = Number(input[1]);
    let toyPrise = Number(input[2]);

    let moneySum = 0;
    let toySum = 0;
    let toyCount = 0;
    let stolenMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneySum = moneySum + 10 * i/2;
            stolenMoney++;
        } else {
            toyCount ++;
        }
    }
    toySum = toyPrise * toyCount;

    let saveMoney = (moneySum - stolenMoney) + toySum;
    if(saveMoney >= priseWashmashine){  
        console.log("Yes! "+ (saveMoney - priseWashmashine).toFixed(2))
    }else{
        console.log("No! " + (priseWashmashine - saveMoney).toFixed(2))
    }
  //80/100
}
cleverLily(["10", "170", "6"])

