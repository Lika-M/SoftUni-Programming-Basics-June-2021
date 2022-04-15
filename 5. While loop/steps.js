function steps(input) {

    let i = 0;
    let income = input[i];
    let steps = 0;
    let newSteps = 0;

    while (steps <= 10000) {

        if (income === "Going home") {
            i++
            newSteps = Number(input[i])
            steps += newSteps;
            break;
        } 

        newSteps = Number(input[i])
        steps += newSteps;
        i++
        income = input[i];
    }
    
    if (steps <= 10000) {
        console.log(`${10000 - steps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }
}

steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])





