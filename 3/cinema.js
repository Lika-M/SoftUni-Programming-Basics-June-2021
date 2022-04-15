function cinema(input) {

    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let place = rows * columns;
    let tickets = 0;
    
    switch (typeProjection) {
        case "Premiere": tickets = place * 12; break;
        case "Normal": tickets = place * 7.50; break;
        case "Discount": tickets = place * 5.00; break;
    }

    console.log(`${tickets.toFixed(2)} leva`);

}
cinema(["Discount",
    "12",
    "30"])


