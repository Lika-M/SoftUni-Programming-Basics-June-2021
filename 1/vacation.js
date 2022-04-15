function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let type;
    let location;
    let prise = 0;

    if (budget <= 1000) {

        type = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                prise = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                prise = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {

        type = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                prise = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                prise = budget * 0.60;
                break;
        }
    } else if (budget > 3000) {
        type = "Hotel";
        switch (season) {
            case "Summer":
                location = "Alaska";
                prise = budget * 0.90;
                break;
            case "Winter":
                location = "Morocco";
                prise = budget * 0.90;
                break;

        }
    }
    console.log(`${location} - ${type} - ${prise.toFixed(2)}`)
}

vacation(["1100", "Summer"])