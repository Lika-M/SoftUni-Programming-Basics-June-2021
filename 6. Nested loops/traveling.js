function traveling(input) {

    let i = 0;
    let income = input[i];
    let sum = 0;

    while (income !== "End") {
        let destination = income;
        i++;
        let budget = Number(input[i]);


        while (sum < budget) {
            i++;
            let spendMoney = Number(input[i]);
            sum += spendMoney;
        }
        console.log(`Going to ${destination}!`);
        sum = 0;

        i++;
        income = input[i];
    } 
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])


