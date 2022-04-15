function mobileOperator(input) {

    let term = input[0];
    let type = input[1];
    let internet = input[2];
    let month = Number(input[3]);

    let sum = 0;
    let tax = 0;

    if (term === "one") {
        switch (type) {
            case "Small": sum = 9.98; break;
            case "Middle": sum = 18.99; break;
            case "Large": sum = 25.98; break;
            case "ExtraLarge": sum = 35.99; break;
        }
    } else if (term === "two") {
        // sum = sum - sum*3.75/100
        switch (type) {
            case "Small": sum = 8.58; ; break;
            case "Middle": sum = 17.09;  break;
            case "Large": sum = 23.59;  break;
            case "ExtraLarge": sum = 31.79; ; break;
        }
    }
    if (internet === "yes") {
        if (sum <= 10) {
            sum += 5.50;
        } else if (sum <= 30) {
            sum += 4.35;
        } else if (sum > 30) {
            sum += 3.85;
        }
    }
    if(term === "two"){
        sum = sum - sum*3.75/100
    }
    tax = sum * month;

    console.log(`${tax.toFixed(2)} lv.`)
}

mobileOperator(["two",
"Small",
"yes",
"20"])


