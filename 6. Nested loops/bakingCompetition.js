function bakingCompetition(input) {

    let participantNum = Number(input[0]);
    let allBackery = 0;
    let totalSum = 0
    let i = 1;

    for (let j = 1; j <= participantNum; j++) {   
        let name = input[i];
        i++;
        let income = input[i];

        let cookies = 0;
        let cakes = 0;
        let waffles = 0;

        while (income !== "Stop baking!") {

            let typeOfCake = income;
            i++;
            let cakesNum = Number(input[i]);

            let prise = 0;
            switch (typeOfCake) {
                case "cookies": 
                    prise = 1.50 * cakesNum;
                    cookies += cakesNum;
                    break;
                case "cakes":
                    prise = 7.80 * cakesNum;
                    cakes += cakesNum;
                    break;
                case "waffles":
                    prise = 2.30 * cakesNum;
                    waffles += cakesNum;
                    break;
            }
            totalSum += prise;
            allBackery += cakesNum;

            i++;
            income = input[i];
        }
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        i++;
    }
    console.log(`All bakery sold: ${allBackery}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}

bakingCompetition(["2",
    "Annie",
    "cakes",
    "3",
    "waffles",
    "6",
    "cookies",
    "2",
    "Stop baking!",
    "Petya",
    "waffles",
    "8",
    "Stop baking!"
])