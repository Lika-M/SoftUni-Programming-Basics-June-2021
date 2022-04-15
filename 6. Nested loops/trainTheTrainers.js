function trainTheTrainers(input) {

    let n = Number(input[0]);
    let i = 1;
    let income = input[i];
    let finalAssessment = 0;
    let p = 0;

    while (income !== "Finish") {
        let presentation = income;
        let sumScores = 0;
        p++;

        for (s = 1; s <= n; s++) {
            i++;
            let scores = Number(input[i]);
            sumScores += scores;
        }
        console.log(`${presentation} - ${(sumScores / n).toFixed(2)}.`)

        finalAssessment += sumScores;


        i++;
        income = input[i];
    }

    console.log(`Student's final assessment is ${(finalAssessment / n / p).toFixed(2)}.`)
}

trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])


