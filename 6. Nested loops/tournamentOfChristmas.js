function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let i = 1;
    let income = input[i];

    let sum = 0;
    let win = 0;
    let lose = 0;
    let isWon = false;

    for (d = 1; d <= days; d++) {

        let money = 0;
        let w = 0;
        let l = 0;

        while (income !== "Finish") {
            let sport = income;
            i++;
            let result = input[i];

            switch (result) {
                case "win": money += 20; w++; break;
                case "lose": l++; break;
            }

            i++;
            income = input[i];
        }

        if (w > l) {
            win++
            money *= 1.10;
        } else {
            lose++
        }

        sum += money;
        i++;
        income = input[i];
    }

    if (win > lose) {
        sum *= 1.20;
        isWon = true;
    }

    if (isWon) {
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`)
    }
}

tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

