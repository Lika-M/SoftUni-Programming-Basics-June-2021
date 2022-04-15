function vacation(input) {

    let neededMoney = Number(input[0]);
    let cash = Number(input[1]);

    let i = 2;
    let action = input[i];
    let amount = Number(input[i + 1]);

    let counter = 0;
    let days = 0;
    let length = input.length;

    while (i < length) {
        days++;

        if (action === "spend") {
            cash -= amount;
            if (cash < 0) {
                cash = 0;
            }
            counter++

            if (counter === 5) {
                console.log("You can't save the money.")
            }
        } else if (action === "save") {
            cash += amount;
            counter
        }

        i += 2;
        
        action = input[i];
        amount = Number(input[i + 1]);
    }

    if (cash >= neededMoney) {
        console.log(`You saved the money for ${days} days.`)
    } else {
        console.log(`${days}`)
    }
}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])



