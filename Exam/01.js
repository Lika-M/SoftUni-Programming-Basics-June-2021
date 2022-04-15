function solve(input) {

    let videocard = Number(input[0]);
    let adaptor = Number(input[1]);
    let amper = Number(input[2]);
    let profit = Number(input[3]);

    let cardPrise = videocard * 13;
    let adaptorPrise = adaptor * 13;
    let spendMoney = cardPrise + adaptorPrise + 1000;
    let profitPerDay = profit - amper;
    let sumProfit = 13 * profitPerDay;
    let days = spendMoney / sumProfit;

    console.log(`${spendMoney}`);
    console.log(`${Math.ceil(days)}`)

}

solve(["700",
    "15",
    "0.20",
    "2"])