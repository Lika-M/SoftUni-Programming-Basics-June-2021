function movieTickets(input) {

    let i = 0;
    let income = input[i];
    let bestMovie = "";
    let maxScores = 0;

    while (income !== "STOP") {
        if (i >= 7) {
            console.log("The limit is reached.");
            break;
        }
        let movie = income;
        let sumScores = 0;
        let length = movie.length;

        for (j = 0; j < length; j++) {

            let scores = movie.charCodeAt(j);
            sumScores += scores;

            if (scores >= 97 && scores <= 122) {
                sumScores -= 2 * length;
            }
            if (scores >= 65 && scores <= 90) {
                sumScores -= length;
            }
            if (sumScores > maxScores) {
                maxScores = sumScores;
                bestMovie = movie;
            }
        }
        i++;
        income = input[i];
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxScores} ASCII sum.`)
}


movieTickets(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])

