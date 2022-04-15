function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priseApartament = 0;
    let priseStudio = 0;

    switch (month) {
        case "May":
        case "October":
            priseStudio = nights * 50;
            priseApartament = nights * 65;

            if (nights > 7 && nights <= 14) {
                priseStudio *= 0.95;

            } else if (nights > 14) {
                priseStudio *= 0.7
                priseApartament *= 0.9
            }
            break;

        case "June":
        case "September":
            priseStudio = nights * 75.20;
            priseApartament = nights * 68.70;

            if (nights > 14) {
                priseStudio *= 0.80;
                priseApartament *= 0.90;
            }
            break;

        case "July":
        case "August":
            priseStudio = nights * 76;
            priseApartament = nights * 77;
            if (nights > 14) {
                priseApartament *= 0.90;
                break;
            }
    }
    console.log(`Apartment: ${priseApartament.toFixed(2)} lv.`)
    console.log(`Studio: ${priseStudio.toFixed(2)} lv.`)
}


hotelRoom(["May",
"15"])



