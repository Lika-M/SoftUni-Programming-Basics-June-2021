function catWalking(input) {

    let minWalk = Number(input[0]);
    let countWalks = Number(input[1]);
    let calories = Number(input[2]);
    let burnCalories = minWalk * countWalks * 5;

    if (burnCalories >= calories * 0.5) {
        console.log(`Yes, the walk for your cat is enough. 
        Burned calories per day: ${burnCalories}.`)
    }
    else {
        console.log(`No, the walk for your cat is not enough. 
        Burned calories per day: ${burnCalories}.`)
    }

}

catWalking([15, 2, 500])