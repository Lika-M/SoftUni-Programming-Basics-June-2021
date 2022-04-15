function bestPlayer2(input) {

    let i = 0;
    let income = input[i];
   
    let goals = 0;
    let bestPlayer = "";
    let bestScores = 0;

    while (income !== "END") {

        let name = income;
        i++;
        goals = Number(input[i]);
          
        if (goals > bestScores) {
            bestPlayer = name;
            bestScores = goals;
        }
        if (goals >= 10) {
            break;
        }
        i++;
        income = input[i];
 
       

    }
    console.log(`${bestPlayer} is the best player!`);
    if (goals >= 3) {
        console.log(`He has scored ${bestScores} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestScores} goals.`)
    }
}

bestPlayer2(["Silva",
    "5",
    "Harry Kane",
    "10"])

