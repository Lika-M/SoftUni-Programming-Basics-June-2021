function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let i = 1;
    let income = input[i];
    let counter = 0;
    let isFool = false;

    while (income !== "End") {
        let luggage = Number(income);

        if (capacity < luggage) {
            console.log("No more space!");
            isFool = true;
            break;
        }

        if (i % 3 === 0) {
            capacity -= luggage * 1.10;
            counter++
        } else {
            capacity -= luggage;
            counter++
        }

        i++;
        income = input[i];
    }

    if (isFool === false) {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);

}