function easterGuests(input){

    let numOfGuests = Number(input[0]);
    let budget = Number(input[1]);

    let numEasterCake = Math.ceil(numOfGuests/3);
    let numOfEgg = numOfGuests*2
    let countEastercaces = numEasterCake*4;
    let countEggs = numOfEgg*0.45;

    let allSum = countEastercaces+countEggs;

    if(allSum<=budget){
        let result = budget-allSum;
        console.log(`Lyubo bought ${numEasterCake} Easter bread and ${numOfEgg} eggs.`)
        console.log(`He has ${result.toFixed(2)} lv. left.`)
    }else{
        let result = allSum-budget;
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${result.toFixed(2)} lv. more.`)
    }
}

easterGuests(["9",
"12"])

