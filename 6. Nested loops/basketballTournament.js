function basketballTournament(input) {

    let i = 0
    let name = input[i];
    i++;
    let matchNum = Number(input[i]);
    let count = 0;
    let c1 = 0;
    let c2 = 0;

    while (name !== "End of tournaments") {
        for (let j = 1; j <= matchNum; j++) {
            i++
            let dessyPoints = Number(input[i]);
            i++;
            let otherPoints = Number(input[i]);
            let result = 0;

            if (dessyPoints > otherPoints) {
                c1++;
                count++;
                result = dessyPoints - otherPoints;
                console.log(`Game ${j} of tournament ${name}: win with ${result} points.`);
            } else {
                c2++;
                count++;
                result = otherPoints - dessyPoints;
                console.log(`Game ${j} of tournament ${name}: lost with ${result} points.`);
            }
        }
        
        i++
        name = input[i];
        i++;
        matchNum = Number(input[i]);
    }
    console.log(`${(c1 / count *100).toFixed(2)}% matches win`);
    console.log(`${(c2 / count *100).toFixed(2)}% matches lost`);
}

basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
