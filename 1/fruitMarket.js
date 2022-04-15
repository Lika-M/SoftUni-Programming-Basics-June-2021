function fruitMarket(input){

    let priceBerrysPerKg = Number(input[0]);
    let quantityBerrys = Number(input[4]);
    let quantityBananas = Number(input[1]);
    let quantityOranges = Number(input[2]);
    let quantityRaspberrys = Number(input[3]);
    
    let priceBerrys = priceBerrysPerKg * quantityBerrys;

    let priceRaspberrysPerKg = priceBerrysPerKg / 2;
    let priceOrangesPerKg = priceRaspberrysPerKg - priceRaspberrysPerKg * 0.4;
    let priceBananasPerKg = priceRaspberrysPerKg - priceRaspberrysPerKg * 0.8;

    let priceRaspberrys = quantityRaspberrys * priceRaspberrysPerKg;
    let priceBananas = quantityBananas * priceBananasPerKg;
    let priceOranges = quantityOranges * priceOrangesPerKg;

    let finalPrice = Number(priceBananas + priceRaspberrys + priceBerrys + priceOranges);

    console.log(finalPrice.toFixed(2));

}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"])