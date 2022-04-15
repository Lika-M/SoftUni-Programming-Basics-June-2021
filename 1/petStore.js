function petFood(input){

    let numDogs = Number(input[0]);
    let otherPets = Number(input[1]);
    let price1 = numDogs * 2.5;
    let price2 = otherPets * 4;
    let sum = price1 + price2

    console.log(sum, `${"lv."}`);
}

petFood(["5", "4"])