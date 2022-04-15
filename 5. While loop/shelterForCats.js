function shelterForCats(input) {

    let allFood = Number(input[0]) * 1000;
    let i = 1;
    let income = input[i];
    let eatenFood = 0;

    while (income !== "Adopted") {
        let foodPerDay = Number(income);
        eatenFood += foodPerDay;

        i++;
        income = input[i];
    }
    let diff = Math.abs(allFood - eatenFood);

    if (eatenFood <= allFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }
}
shelterForCats(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])