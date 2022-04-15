function flowers(input) {

    let chrysanthemum = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holyday = input[4];

    let allFlowers = chrysanthemum + roses + tulips;
    let priseRoses = 0;
    let priseTulips = 0;
    let priseChrysanthemum = 0;
    let  sum = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            priseChrysanthemum = chrysanthemum * 2.00;
            priseRoses = roses * 4.10;
            priseTulips = tulips * 2.50; break;
        case "Autumn":
        case "Winter":
            priseChrysanthemum = chrysanthemum * 3.75;
            priseRoses = roses * 4.10;
            priseTulips = tulips * 4.15; break;
    }
    sum = priseRoses + priseTulips + priseChrysanthemum;
    if (holyday === "Y") {
        sum *= 1.15;
    }
    if (tulips > 7 && season === "Spring") {
        sum *= 0.95;
    }
    if (roses >= 10 && season === "Winter") {
        sum *= 0.90;
    }
    if (allFlowers > 20) {
        sum * 0.80;
    }
    let finalSum = sum + 2;

    console.log(finalSum.toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"])