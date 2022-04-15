function backToThePast(input) {

    let moneyInh = Number(input[0]);
    let yearToLive = Number(input[1]);

    let spendMoney = 0;
    let age = 17;
    let money = 0;

    for (let i = 1800; i <= yearToLive; i++) {
        age++;

        if (i % 2 === 0) {
            money = money + 12000;

        } else if (i % 2 === 1) {
            money = money + (12000 + 50 * age);
        }
    }
    spendMoney = Math.abs(moneyInh - money);

    if (moneyInh >= money) {
        console.log(`Yes! He will live a carefree life and will have ${spendMoney.toFixed(2)} dollars left. `)
    } else {
        console.log(`He will need ${spendMoney.toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["100000.15",
    "1808"
    
])