function uniquePINCodes(input) {

    firstMax = Number(input[0]);
    secondMax = Number(input[1]);
    thirdMax = Number(input[2]);

    for (let i = 1; i <= firstMax; i++) {
        if (i % 2 === 0) {

            for (let j = 1; j <= secondMax; j++) {
                if ((j === 2 || j % 2 !== 0) && j >= 2 && j <= 7) {

                    for (let k = 1; k <= thirdMax; k++) {
                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`)
                        } 
                    }
                }
            }
        }
    }
}

uniquePINCodes(["3", "5", "5"])