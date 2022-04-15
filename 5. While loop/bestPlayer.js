function bestPlayer(input) {

    let i = 0;
    let name = input[i];
    i++;
    let score = 0;
    let bestPlayer = ""
    let bestScore = 0;

    while (name !== "END") {
        score = Number(input[i]);
        i++;
        
        if (bestScore < score) {
            bestScore = score;
            bestPlayer = name;
        } 
        if (score >= 10) {
            break;
        }

        name = input[i];
        i++;

    }

    console.log(`${bestPlayer} is the best player!`)

    if (bestScore >= 3) {
        console.log(`He has scored ${score} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${score} goals.`)
    }
}

bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"])

