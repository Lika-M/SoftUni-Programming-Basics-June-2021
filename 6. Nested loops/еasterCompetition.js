function еasterCompetition(input) {

    let numCakes = Number(input[0]);
    let i = 1;
    let name = input[i];
    let maxResult = 0;
    let winnerName = ''

    for (let n = 1; n <= numCakes; n++) {
        i++;
        let income = input[i];
        let result = 0;
        while (income !== "Stop") { 
            let points = Number(input[i])
            result += points;
            i++;
            income = input[i];
        }
        console.log(`${name} has ${result} points.`);
        if (maxResult < result) {
            maxResult = result;
            winnerName = name;
         console.log(`${winnerName} is the new number 1!`)
        }
        
        i++;
        name = input[i];
    }
    console.log(`${winnerName} won competition with ${maxResult} points!`)
}

еasterCompetition(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])

