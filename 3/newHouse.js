function newHouse(input) {

    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let pay;
   
    if (typeFlowers == "Roses") {
        pay = countFlowers * 5;
        if (countFlowers > 80) {
            pay *= 0.9;  
        }
    } else if (typeFlowers == "Dahlias") {
        pay = countFlowers * 3.80;
        if (countFlowers > 90) {
            pay*= 0.85;       
        }

    } else if (typeFlowers == "Tulips") {
        pay = countFlowers * 2.80;
        if (countFlowers > 80) {
            pay*= 0.85;       
        }

    } else if (typeFlowers == "Narcissus") {
        pay = countFlowers * 3;
        if (countFlowers < 120) {
            pay *= 1.15;       
        }

    } else if (typeFlowers == "Gladiolus") {
        pay = countFlowers * 2.50;
        if (countFlowers < 80) {
            pay *= 1.20;     
        }
    }
    if (budget >= pay) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - pay).toFixed(2)} leva left.`);
    } else{

        console.log(`Not enough money, you need ${(pay - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus",
"119",
"360"])


