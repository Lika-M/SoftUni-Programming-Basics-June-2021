function мovieProfit(input){

    let filmName = input[0];
    let daysNum = Number(input[1]);
    let ticketsNum = Number(input[2]);
    let prise = Number(input[3]);
    let persent = Number(input[4]);

    let sumPerDay = ticketsNum * prise;
    let allSum = daysNum * sumPerDay;
    let moneyLeft = allSum * persent / 100;
    let finalResult = allSum - moneyLeft;

    console.log(`The profit from the movie ${filmName} is ${finalResult.toFixed(2)} lv.`)

}

мovieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"
    ])
