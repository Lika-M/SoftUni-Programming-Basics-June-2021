function pcGameShop(input) {

    let i = 0;
    let num = Number(input[i]);
    i++;
    let nameOfGame = input[i];
    i++;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    while (i <= num + 1) {

        switch (nameOfGame) {
            case "Hearthstone": p1++; break;
            case "Fornite": p2++; break;
            case "Overwatch": p3++; break;
            default: p4++; break;
        }
        nameOfGame = input[i];
        i++;
    }
    console.log(`Hearthstone - ${(p1 / num * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(p2 / num * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(p3 / num * 100).toFixed(2)}%`);
    console.log(`Others - ${(p4 / num * 100).toFixed(2)}%`);
}

pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])

