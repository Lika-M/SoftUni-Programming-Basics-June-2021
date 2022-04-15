function flowers(input) {

    let chrisanthemsNum = Number(input[0]);
    let rosesNum = Number(input[1]);
    let tulipsNum = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let priseBouquet;

    switch (season) {
        case "Spring":
        case "Summer":
            priseBouquet = chrisanthemsNum * 2.00 + rosesNum * 4.10 + tulipsNum * 2.50;
            break;

        case "Autumn":
        case "Winter":
            priseBouquet = chrisanthemsNum * 3.75 + rosesNum * 4.50 + tulipsNum * 4.150;
            break;
    }

    if(holiday==="Y"){
        priseBouquet *= 1.15;
    }

    if (tulipsNum > 7 && season === "Spring") {
        priseBouquet *= 0.95;
    }
    if (rosesNum >= 10 && season === "Winter") {
        priseBouquet *= 0.90;
    }
    if ((chrisanthemsNum + rosesNum + tulipsNum) > 20){
        priseBouquet *=0.80;
    }
        console.log((priseBouquet+2).toFixed(2));

}
flowers(["10","10","10","Autumn","N"])