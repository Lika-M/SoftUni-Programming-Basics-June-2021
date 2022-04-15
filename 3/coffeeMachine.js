function coffeeMachine(input) {

    let drink = input[0];
    let shugar = input[1];
    let numDrinks = Number(input[2]);
    let prise = 0;

    switch (shugar) {
        case "Without":
            switch (drink) {
                case "Espresso": prise = numDrinks * 0.90;; break;
                case "Cappuccino": prise = numDrinks * 1.00; break;
                case "Tea": prise = numDrinks * 0.50; break;
            } 
            prise *= 0.65;
            break;
        case "Normal":
            switch (drink) {
                case "Espresso": prise = numDrinks * 1.00; break;
                case "Cappuccino": prise = numDrinks * 1.20; break;
                case "Tea": prise = numDrinks * 0.60; break;
            } break;
        case "Extra":
            switch (drink) {
                case "Espresso": prise = numDrinks * 1.20; break;
                case "Cappuccino": prise = numDrinks * 1.60; break;
                case "Tea": prise = numDrinks * 0.70; break;
            } break;
    }
    if (drink === "Espresso" && numDrinks >= 5) {
        prise *= 0.75;
    }
    if (prise > 15) {
        prise *= 0.80;
    }
    console.log(`You bought ${numDrinks} cups of ${drink} for ${prise.toFixed(2)} lv.`)
}

coffeeMachine(["Tea",
"Extra",
"3"])


