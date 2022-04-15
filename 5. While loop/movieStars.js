function movieStars(input) {

    let i = 0;
    let budget = Number(input[i]);
    i++;
    let income = input[i]
    i++;

    while (budget > 0) {
        if (income === "ACTION") {
            break;
        }
        let nameLength = income.length;
        let salary = 0;
        if (nameLength > 15) {
            salary = budget * 0.20;
        } else {
            salary = input[i];
            i++
        }

        budget -= salary;
        income = input[i];
        i++;

    }
if(budget >= 0){
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
}else {
    console.log(`We need ${(-budget).toFixed(2)} leva for our actors.`)
}

}

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
