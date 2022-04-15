function shoping(input){

    let budget = Number(input[0]);
    let chcolatesNum = Number(input[1]);
    let milkNum = Number(input[2]);
    let mandarinNum = Math.floor(chcolatesNum * 0.65);
    let neededSum = chcolatesNum * 0.65 + milkNum * 2.70 + mandarinNum * 0.20;
    let diff = Math.abs(budget - neededSum);
    if(neededSum >= budget){
        console.log(`You got this, ${diff.toFixed(2)} money left!`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} more!`)
    }
}
shoping(["10", "5", "1.5"])