function balls(input) {

    let num = Number(input[0]);
    let i = 1
    let score = 0;
    let other = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;

    while (i <= num) {
        let colour = input[i];
        switch (colour) {
            case "red": score += 5; p1 ++; i++; break;
            case "orange": score += 10; p2 ++; i++; break;
            case "yellow": score += 15; p3++; i++; break;
            case "white": score += 20; p4++; i++; break;
            case "black": Math.floor(score /= 2); p5++; i++; break;
            default: p6++;i++; break;
     
        }
    }
    console.log(`Total points: ${Math.floor(score)}`);
    console.log(`Points from red balls: ${p1}`);
    console.log(`Points from orange balls: ${p2}`);
    console.log(`Points from yellow balls: ${p3}`);
    console.log(`Points from white balls: ${p4}`);
    console.log(`Other colors picked: ${p6}`);
    console.log(`Divides from black balls: ${p5}`)
}

balls(["10", "white", "white", "ee", "red", "orange", "red", "black", "black", "black", "black"
    
    ])