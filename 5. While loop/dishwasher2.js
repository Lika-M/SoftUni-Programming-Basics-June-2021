function dishwassher(input) {

    let detergent = Number(input[0]) * 750;
    let i = 1;
    let income = input[i];
    let pots = 0;
    let plates = 0;

    while (detergent >= 0) {
        if (income === "End") {
            break;
        }
        let numDishes = Number(input[i]);

        if (i % 3 === 0) {
            detergent -= numDishes * 15;
            pots += numDishes;

        } else {
            detergent -= numDishes * 5;
            plates += numDishes;
        }
        i++
        income = input[i]
    }
    if (detergent >= 0) {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }
}

dishwassher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"
    ])