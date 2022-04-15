function charitiCampaignSum(input){

    let numDays = Number(input[0]);
    let numConfectioners = Number(input[1]);
    let numCakes = Number(input[2]);
    let numWaffles = Number(input[3]);
    let numPancackes = Number(input[4]);

    let priceCakes = Number(numCakes * 45);
    let priceWaffles = Number(numWaffles * 5.8);
    let pricePancakes = Number(numPancackes * 3.2);

    let allPrice = ((priceCakes + priceWaffles + pricePancakes) * numConfectioners * numDays);
    let finalPrice = allPrice - allPrice / 8

    console.log(finalPrice.toFixed(1));
    
}

charitiCampaignSum(["23", "8", "14", "30", "16"])