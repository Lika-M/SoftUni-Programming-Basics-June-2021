function savings(input){
    let income = Number(input[0]);
    let monthsNum = Number(input[1]);
    let personalExpenses = Number(input[2]);

    let unexpectetCosts = income * 0.3;
    let saveSum = income - (personalExpenses + unexpectetCosts);
    let allSaveSum = monthsNum * saveSum;
    let percent = saveSum / income * 100

    console.log(`She can save ${(percent).toFixed(2)}% `);
    console.log(`${allSaveSum.toFixed(2)}`)
}
savings(["2050",
    "5",
    "900"
    ])
