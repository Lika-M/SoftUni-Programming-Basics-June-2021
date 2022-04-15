function cruiseShip(input) {
    let typeCruise = input[0];
    let cabinType = input[1];
    let nights = Number(input[2]);

    let prise = 0;
    let allPrise = 0;
    let hollydayPrise = 0;

    switch (typeCruise) {
        case "Mediterranean":
            switch (cabinType) {
                case "standard cabin": prise = 27.50; break;
                case "cabin with balcony": prise = 30.20; break;
                case "apartment": prise = 40.50; break
            } break;
        case "Adriatic":
            switch (cabinType) {
                case "standard cabin": prise = 22.99; break;
                case "cabin with balcony": prise = 25.00; break;
                case "apartment": prise = 34.99; break;
            } break;
        case "Aegean":
            switch (cabinType) {
                case "standard cabin": prise = 23.00; break;
                case "cabin with balcony": prise = 26.60; break;
                case "apartment": prise = 39.80; break;
            }
    }
    allPrise = 4 * nights * prise;
    if(nights > 7){
        allPrise *= 0.75;
    }

    console.log(`Annie's holiday in the ${typeCruise} sea costs ${allPrise.toFixed(2)} lv.`)

}
cruiseShip(["Aegean",
    "standard cabin",
    "10"
    ])