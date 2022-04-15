function fitnessCard(input) {

    let sum = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let typeSport = input[3];

    let prise = 0;
    let diff = 0;

    if (sex === "m") {
        switch (typeSport) {
            case "Gym": prise = 42; break;
            case "Boxing": prise = 41; break;
            case "Yoga": prise = 45; break;
            case "Zumba": prise = 34; break;
            case "Dances": prise = 51; break;
            case "Pilates": prise = 39; break;
        }
    } else if (sex === "f") {
        switch (typeSport) {
            case "Gym": prise = 35; break;
            case "Boxing": prise = 37; break;
            case "Yoga": prise = 42; break;
            case "Zumba": prise = 31; break;
            case "Dances": prise = 53; break;
            case "Pilates": prise = 37; break;
        }
    }
    if(age <= 19){
        prise*= 0.80;
    }

    let finalSum = prise - sum;

    if(finalSum < 0){
        console.log(`You purchased a 1 month pass for ${typeSport}.`)
    }else{
        console.log(`You don't have enough money! You need $${finalSum.toFixed(2)} more.`)
    }
  
}
fitnessCard(["10",
"m",
"50",
"Pilates"])


