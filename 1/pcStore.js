function pcStore(input){
    
    let prise$Processor = Number(input[0]) * 1.57;
    let prise$VideoCard = Number(input[1]) * 1.57;
    let prise$Ram = Number(input[2]) * 1.57;
    let numRam = Number(input[3]);
    let discount = Number(input[4]);

    let sum1 = (prise$Processor + prise$VideoCard) * (1 - discount);
    let sum2 =  prise$Ram * numRam;
    let finalSum = sum1 + sum2;
    console.log(`Money needed - ${finalSum.toFixed(2)} leva.`)

}

pcStore(["500",
    "200",
    "80",
    "2",
    "0.05"
    ])