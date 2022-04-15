function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let i = 1;
    let income = input[i];
    let counter = 0;

    let isFool = false;

    while (income !== "End") {
        let luggage = Number(income);

        if (i % 3 === 0) {
            luggage = luggage * 1.10;
        }
        if (capacity < luggage) {
            console.log("No more space!");
            isFool = true;
            break;
        }
        counter++
        capacity -= luggage;
        i++;
        income = input[i];
    }

    if (isFool === false) {
        console.log("Congratulations! All suitcases are loaded!");
    } 
        console.log(`Statistic: ${counter} suitcases loaded.`);
    
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])




