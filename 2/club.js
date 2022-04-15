function club(input) {

    let target = Number(input[0]);
    let lengthInput = Number(input.length);
    let profit = 0;

    for (let i = 1; i < lengthInput; i += 2) {
        let coctailName = input[i];

        if (coctailName === "Party!") {
            break;
        }

        let drinkPrise = Number(coctailName.length);
        let count = Number(input[i + 1]);
        let bill = drinkPrise * count;

        if (bill % 2 !== 0) {
            bill *= 0.75;
        }
        profit += bill;
    }

    let diff = Math.abs(target - profit);

    if (profit >= target) {
        console.log("Target acquired.");
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    }

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
