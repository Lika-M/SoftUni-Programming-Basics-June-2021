function dishwasher(input) {

    let numBottles = Number(input[0]);
    let length = input.length;
    let availableLiquid = numBottles * 750;

    let dishes = 0;
    let pots = 0;
    let neededLiquidForDishes = 0;
    let neededLiquidForPots = 0
   
    for (let i = 1; i < length; i++) {
        let numDishes = Number(input[i]);

        if (numDishes === "End") {
            break;
        }
        if (i % 3 === 0) {
            pots = Number(pots) + Number(numDishes);
            neededLiquidForPots = pots * 15;
        }
        else {
            dishes = Number(dishes) + Number(numDishes);
            neededLiquidForDishes = dishes * 5;
        }
    }
    let neededLiquid = neededLiquidForDishes + neededLiquidForPots;
    let diff = Math.abs(availableLiquid - neededLiquid);

    if (availableLiquid >= neededLiquid) {
        console.log("Detergent was enough!");
        console.log(`${dishes} dishes and ${pots} pots were washed.`)
        console.log(`Leftover detergent ${diff} ml.`)
    } else {
        console.log(`Not enough detergent, ${diff} ml. more necessary!`)
    }

}
dishwasher(["1","10","15","10","12","13","30"])