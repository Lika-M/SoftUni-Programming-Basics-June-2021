function reportSystem(input) {

    let expectedSum = Number(input[0]);
    let length = input.length;
    let cash = 0;
    let card = 0;
    let p1 = 0;
    let p2 = 0;

    for (let i = 1; i < length; i++) {
        let income = input[i]

        if (income === "End") {
            console.log("Failed to collect required money for charity.")
        } else {
            let money = Number(income);

            if (i % 2 !== 0) {
                if (money > 100) {
                    console.log("Error in transaction!")
                } else {
                    cash += money;
                    p1++
                    console.log("Product sold!");
                }
            } else if (i % 2 === 0) {
                if (money < 10) {
                    console.log("Error in transaction!")
                } else {
                    card += money;
                    p2++
                    console.log("Product sold!");
                }
            }
        }

        if (cash + card >= expectedSum) {
            break
        }
    }

    if (cash + card >= expectedSum) {
        console.log(`Average CS: ${(cash / p1).toFixed(2)}`)
        console.log(`Average CC: ${(card / p2).toFixed(2)}`)
    }
}

reportSystem(["1234", "63", "346", "39", "983", "130", "983"])