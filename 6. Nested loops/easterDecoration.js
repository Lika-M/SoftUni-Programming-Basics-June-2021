function easterDecoration(input) {

    let clinetNum = Number(input[0]);
    let allSum = 0;
    let i = 1;
    let income = input[i];

    for (let client = 1; client <= clinetNum; client++) {
        let sum = 0;
        let count = 0;
        let prise = 0;

        while (income !== "Finish") {
            let typeDecoration = income;

            switch (typeDecoration) {
                case "basket": prise = 1.50; count++; break;
                case "wreath": prise = 3.80; count++; break;
                case "chocolate bunny": prise = 7; count++; break;
            }
            sum += prise;
            i++;
            income = input[i]
        }
        if (count % 2 === 0) {
            sum *= 0.80;
        }
        console.log(`You purchased ${count} items for ${sum.toFixed(2)} leva.`);
       allSum += sum;
        i++;
        income = input[i]
    }
    console.log(`Average bill per client is: ${(allSum / clinetNum).toFixed(2)} leva.`);

}

easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
