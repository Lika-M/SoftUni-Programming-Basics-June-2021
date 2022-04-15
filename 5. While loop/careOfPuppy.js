function careOfPuppy(input) {

    let availableFood = Number(input[0]) * 1000;
    let i = 1;
    let income = input[i];
    let allFood = 0;
    i++

    while (income !== "Adopted") {
        let dayFood = Number(income);
        allFood += dayFood;

        income = input[i];
        i++
    }
    let diff = Math.abs(availableFood - allFood);

    if (availableFood >= allFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }
}
careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])



