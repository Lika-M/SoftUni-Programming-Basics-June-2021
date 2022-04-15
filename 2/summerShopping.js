function summerShopping(input) {

    let budget = Number(input[0]);
    let towelPrise = Number(input[1]);
    let discount = Number(input[2]);

    let umbrellaPrise = 2 / 3 * towelPrise;
    let flopsPrise = umbrellaPrise * 0.75;
    let bagPrise = (towelPrise + flopsPrise) / 3;
    let allSum = towelPrise + umbrellaPrise + flopsPrise + bagPrise;
    let finishSum = allSum - allSum * discount / 100;
    let result = Math.abs(budget - finishSum);

    if(budget >= finishSum){
        console.log(`Annie's sum is ${finishSum.toFixed(2)} lv. She has ${result.toFixed(2)} lv. left.`)
    } else {
        console.log(`Annie's sum is ${finishSum.toFixed(2)} lv. She needs ${result.toFixed(2)} lv. more.`)
    }

}

summerShopping(["30", "17", "3"])