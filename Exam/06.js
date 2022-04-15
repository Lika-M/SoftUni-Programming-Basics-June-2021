function solve(input) {

    let locationNums = Number(input[0]);
    let i = 1;

    for (let k = 1; k <= locationNums; k++) {
        let averageYield = Number(input[i]);
        i++
        let days = Number(input[i]);
        let expectedYield = 0;
        let averageExtraction = 0;

        for (let j = 1; j <= days; j++) {
            i++;
            let extraction = Number(input[i]);

            expectedYield += extraction;
            averageExtraction = expectedYield / days;
          
        }
        i++;
        if (averageExtraction >= averageYield) {
            console.log(`Good job! Average gold per day: ${averageExtraction.toFixed(2)}.`)
        } else {
            console.log(`You need ${(averageYield - averageExtraction).toFixed(2)} gold.`)
        }

    }


}

solve(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])


