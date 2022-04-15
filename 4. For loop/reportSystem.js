function reportSystem(input) {

    let expectedSum = Number(input[0]);
    let length = input.length;

    let cs = 0;
    let cc = 0;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i < length; i++) {
        let sum = input[i];

        if (sum === "End") {
            console.log("Failed to collect required money for charity.")
            break;
        } //cash
        if (sum <= 100 && i % 2 === 1) {
            sum1 = sum1 + Number(sum);
            cs++;
            console.log("Product sold!");
            //with card
        } else if (sum>= 10 && i % 2 === 0) {
            sum2 = sum2 + Number(sum);
            cc++;
            console.log("Product sold!");
        } else {
            console.log("Error in transaction!");
        }  
        if(sum1 + sum2 >= expectedSum){
            break;
        }
    }
   
    let charityMoney = sum1 + sum2;
    let moneyCashPerPerson = sum1 / cs;
    let moneyCardPerPerson = sum2 / cc;

    if (charityMoney >= expectedSum) {
        console.log(`Average CS: ${moneyCashPerPerson.toFixed(2)}`);
        console.log(`Average CC: ${moneyCardPerPerson.toFixed(2)}`)
    } 
}

reportSystem(["1234", "63", "346", "39", "983", "130", "983"])