function toyShop(input) {
    let price = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puzzelsCount + dollsCount + bearsCount + minionsCount;

    let puzzelsPrice = puzzelsCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20
    let truckPrice = truckCount * 2

    let toysPrice = puzzelsPrice + dollsPrice + bearsPrice + minionsPrice + truckPrice;

    if (totalCount >= 50) {
        toysPrice = toysPrice * 0.75
    }
    let profit =toysPrice * 0.90

    if (profit >= price) {
        let money = profit - price;
        console.log(`Yes! ${money.toFixed(2)} lv left.`)

    } else {
        let money = price - profit;
            console.log(`Not enough money! ${money.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])