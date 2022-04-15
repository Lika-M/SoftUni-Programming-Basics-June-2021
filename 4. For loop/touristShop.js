function touristShop(input){

    let budget = Number(input[0]);
    let i = 1;
    let income = input[i];
    i++;
    let prise = Number(input[i]);
    let sum = 0;
    let remainSum = 0;
    let c = 0;

    while(income !== "Stop"){
        let product = income;   
        c++;
        if(c % 3 === 0){
            prise *= 0.5;
        }
        sum += prise;
       
        if(sum > budget){
            console.log(`You don't have enough money!`);
            console.log(`You need ${(sum - budget).toFixed(2)} leva!`);
            break;
        }
        i++;
        income = input[i];
        i++;
        prise = Number(input[i]);
    }
    if(budget - sum >= 0){
        console.log(`You bought ${c} products for ${sum.toFixed(2)} leva.`);
    }
   

}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

