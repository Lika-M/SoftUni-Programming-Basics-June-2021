function balls(input) {

    let number = Number(input[0]);
    let colour;

    let points = 0;
    let redPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let otherPoints = 0;
    let blackPoints = 0; 

    for (let i = 1; i <= number; i++) {
        colour = input[i];
        
        switch (colour) {
            case "red": points += 5; redPoints++; break
            case "orange": points += 10; orangePoints++; break 
            case "yellow": points += 15; yellowPoints++; break
            case "white": points += 20; whitePoints++; break
            case "black": points = Math.floor(points /= 2); blackPoints++; break
            default: otherPoints++; break
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${redPoints}`);
    console.log(`Points from orange balls: ${orangePoints}`);
    console.log(`Points from yellow balls: ${yellowPoints}`);
    console.log(`Points from white balls: ${whitePoints}`);
    console.log(`Other colors picked: ${otherPoints}`);
    console.log(`Divides from black balls: ${blackPoints}`);   
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

