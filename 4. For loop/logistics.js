function logistics(input){

    let num = Number(input[0]);
    let prise = 0;
    let allWeights = 0;
    let busPrise = 0;
    let truckPrise = 0;
    let trainPrise = 0;
    let busWeight = 0;
    let truckWeight = 0;
    let trainWeight = 0;
    
    for(let i = 1; i<=num; i++){
        weight = Number(input[i]);
        allWeights = allWeights + weight;

        if(weight <= 3){
            busWeight = busWeight + weight;
           busPrise = busWeight * 200;
          
        }else if(weight <=11){
            truckWeight = truckWeight + weight;
            truckPrise = truckWeight * 175;
          
        }else if(weight >=12){
            trainWeight = trainWeight + weight
            trainPrise = trainWeight * 120;
        }
    }
    prise = busPrise + truckPrise + trainPrise;
    let middlePrise = prise/allWeights;

    console.log (middlePrise.toFixed(2));
    console.log(`${(busWeight/allWeights*100).toFixed(2)}%`);
    console.log(`${(truckWeight /allWeights*100).toFixed(2)}%`)
    console.log(`${(trainWeight/allWeights*100).toFixed(2)}%`)

}

logistics(["4", "1", "5", "16", "3"
    ])