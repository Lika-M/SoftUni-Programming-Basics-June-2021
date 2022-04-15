function accountBalance(input) {

    let i = 0;
    let income = input[i];
    let sum = 0;

    while (income !== "NoMoreMoney") {
        income = Number(input[i]);
    
        if (income < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + income.toFixed(2));
        sum += income;
        i++;
        income = input[i];
    }

    console.log(`Total: ${sum.toFixed(2)}`)
}

accountBalance(["120",
"45.55",
"-150"])

