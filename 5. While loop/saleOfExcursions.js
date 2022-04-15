function saleOfExcursions(input) {


    let seaPack = Number(input[0]);
    let mountainPack = Number(input[1]);
    let i = 2;
    let income = input[i];

    let profit = 0;
    let isSuccess = false;

    while (income !== "Stop") {
        let newPack = income;
        if (newPack === "sea") {
           
            if (seaPack === 0) {

                if (mountainPack === 0) {
                    break
                }
            } else {
                profit += 680;
                seaPack--;
            }
        } else if (newPack === "mountain") {
           
            if (mountainPack === 0) {
                if (seaPack === 0) {
                    break;
                }
            } else {
                profit += 499;
                mountainPack--;
            }
        }
        if (seaPack === 0 && mountainPack === 0) {
            isSuccess = true;
            break;
        }

        i++;
        income = input[i];
    }
    if (isSuccess) {
        console.log(" Good job! Everything is sold.");
    }
    console.log(`"Profit: ${profit} leva."`);
}

saleOfExcursions(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

