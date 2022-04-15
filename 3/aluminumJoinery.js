function aluminumJoinery(input) {

    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let prise = 0;
    let sum = count * prise;

    if (count < 10) {
        console.log("Invalid order"); 
    } else{

    switch (type) {
        case "90X130":
            prise = 110;
            sum = count * prise;
            if (count > 30 && count < 60) {
                sum *= 0.95;
            } else if (count > 60) {
                sum *= 0.92;
            }
            break;
        case "100X150":
            prise = 140;
            sum = count * prise;
            if (count > 40 && count <80) {
                sum *= 0.94;
            } else if (count > 80) {
                sum *= 0.90;
            }
            break;
        case "130X180":
            prise = 190;
            sum = count * prise;
            if (count > 20 && count < 50) {
                sum *= 0.93;
            } else if (count > 50) {
                sum *= 0.88;
            }
            break;
        case "200X300":
            prise = 250;
            sum = count * prise;
            if (count > 25 && count < 50) {
                sum *= 0.91;
            } else if (count > 50) {
                sum *= 0.86;
            }
            break;
    }
    switch (delivery) {
        case "With delivery" : sum += 60; break;
        case "Without delivery": prise = prise; break;
    }
    if (count > 99) {
        sum *= 0.96;
    }
    console.log(`${sum.toFixed(2)} BGN`)
}
}
aluminumJoinery(["12", "130X180", "With delivery"
    
])