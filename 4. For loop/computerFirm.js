function computerFirm(input) {

    let numModels = Number(input[0]);
    let salesNum = 0;
    let averageRating = 0;
    let sumRating = 0;

    for (let i = 1; i <= numModels; i++) {
        let number = (input[i]);
        let rating = Number(number[2]);
        let possibleSales = Number(number[0] + number[1]);
        let salesMade = 0;

        if (rating === 2) {
            salesMade = 0;
        } else if (rating === 3) {
            salesMade = possibleSales * 50 / 100;
        } else if (rating === 4) {
            salesMade = possibleSales * 70 / 100;
        } else if (rating === 5) {
            salesMade = possibleSales * 85 / 100;
        } else if (rating === 6) {
            salesMade = possibleSales;
        }
        salesNum += salesMade;
        sumRating += rating;
    }
    averageRating = sumRating / numModels;

    console.log(salesNum.toFixed(2));
    console.log(averageRating.toFixed(2))
}

computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

