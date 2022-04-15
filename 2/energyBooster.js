function energyBooster(input) {

    let fruit = input[0];
    let type = input[1];
    let num = Number(input[2]);

    let prise = 0;

    switch (fruit) {
        case "Watermelon":
            if (type === "small") {
                prise = num * 2 * 56;
            } else {
                prise = num * 5 * 28.70;
            } break;
        case "Mango":
            if (type === "small") {
                prise = num * 2 * 36.66;
            } else {
                prise = num * 5 * 19.60;
            } break;
        case "Pineapple":
            if (type === "small") {
                prise = num * 2 * 42.10;
            } else {
                prise = num * 5 * 24.80;
            }break;
        case "Raspberry":
            if (type === "small") {
                prise = num * 2 * 20;
            } else {
                prise = num * 5 * 15.20;
            }break
    }
    if (prise >= 400 && prise <= 1000) {
        prise *= 0.85
    } else if (prise > 1000) {
        prise *= 0.50;
    }
    console.log(`${prise.toFixed(2)} lv.`)
}

energyBooster(["Raspberry",
"small",
"50"])


