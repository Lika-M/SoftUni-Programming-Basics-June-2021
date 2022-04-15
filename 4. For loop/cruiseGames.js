function cruiseGames(input) {

    let name = input[0];
    let gameNums = Number(input[1]);
    let sumPoints1 = 0;
    let sumPoints2 = 0;
    let sumPoints3 = 0;
    let allPoints = 0;
    let averageScores1 = 0;
    let averageScores2 = 0;
    let averageScores3 = 0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;

    for (let i = 2; i <= gameNums * 2; i++) {
        let game = input[i];
        i++;
        let poits = Number(input[i]);

        switch (game) {
            case "volleyball": poits *= 1.07; c1++; 
            sumPoints1 += poits;
            if (c1 >= 1) {
                averageScores1 = sumPoints1 / c1;
            
            } break;

            case "tennis": poits *= 1.05; c2++; 
            sumPoints2 += poits;
            if (c2 >= 1) {
                averageScores2 = sumPoints2 / c2;
            
            }break;

            case "badminton": poits *= 1.02; c3++; 
            sumPoints3 += poits;
            if (c3 >= 1) {
                averageScores3 = sumPoints3 / c3;
               
            } break;
        }
        
    }
    allPoints = sumPoints1 + sumPoints2 + sumPoints3;

    if (averageScores1 >= 75 && averageScores2 >= 75 && averageScores3 >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(allPoints)} points.`)
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(allPoints)}.`)
    }
}

cruiseGames(["Annie",
    "5",
    "badminton",
    "34",
    "tennis",
    "76",
    "badminton",
    "10",
    "volleyball",
    "62",
    "badminton",
    "56"
    ])