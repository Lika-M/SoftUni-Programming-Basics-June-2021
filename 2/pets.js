function pets(input) {
    let days = Number(input[0])
    let food = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]) / 1000;

    let neededDogFood = days * dogFood;
    let neededCatFood = days * catFood;
    let neededTurtleFood = days * turtleFood;
    let totalFood = neededDogFood + neededCatFood + neededTurtleFood;

    if (totalFood <= food) {
        console.log(`${Math.floor(food - totalFood)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFood - food)} more kilos of food are needed.`)
    }
}

pets([5, 10, 2.1, 0.8, 321])