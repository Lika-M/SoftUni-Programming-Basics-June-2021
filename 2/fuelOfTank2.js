function fuelOfTank2(input) {

    let typeFuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

    if (typeFuel === "Gasoline") {
        let gasoline = liters * 2.22;

        if (card === "Yes") {
            gasoline = liters * (2.22 - 0.18);
        } else if (card === "No") {
            gasoline = gasoline;
        }
        if (liters < 20) {
            console.log(`${gasoline.toFixed(2)} lv.`)
        } else if (liters <= 25) {
            console.log(`${(gasoline - gasoline * 0.08).toFixed(2)} lv.`)
        } else if (liters > 25) {
            console.log(`${(gasoline - gasoline * 0.1).toFixed(2)} lv.`)
        }
    }

    else if (typeFuel === "Gas") {
        let gas = liters * 0.93

        if (card === "Yes") {
            gas = liters * (0.93 - 0.08);
        } else if (card === "No") {
            gas = gas;
        }
        if (liters < 20) {
            console.log(`${gas.toFixed(2)} lv.`)
        } else if (liters <= 25) {
            console.log(`${(gas - gas * 0.08).toFixed(2)} lv.`)
        } else if (liters > 25) {
            console.log(`${(gas - gas * 0.1).toFixed(2)} lv.`)
        }
    }


    else if (typeFuel === "Diesel") {
         let diesel = liters * 2.33;

        if (card === "Yes") {
            diesel = liters * (2.33 - 0.12);
        } else if (card === "No") {
            diesel = diesel;
         }
        if (liters < 20) {
            console.log(`${diesel.toFixed(2)} lv.`)
         } else if (liters <= 25) {
            console.log(`${(diesel - diesel * 0.08).toFixed(2)} lv.`)
        } else if (liters > 25) {
            console.log(`${(diesel - diesel * 0.1).toFixed(2)} lv.`)
        }
        }

}

fuelOfTank2(["Diesel", 19, "No"])

