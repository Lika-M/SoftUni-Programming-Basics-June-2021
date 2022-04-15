function bikeRace(input){

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let typeTrace = input[2];

    let taxJun = 0;
    let taxSen = 0;
    let allparticipants = juniors + seniors;

    switch(typeTrace){

        case "trail":
            taxJun = 5.50;
            taxSen = 7.00; break;

        case "cross-country":
            taxJun = 8.00;
            taxSen = 9.50; 

            if(allparticipants>=50){
                taxJun*=0.75;
                taxSen*=0.75;
            } break;

        case "downhill":
            taxJun = 12.25; 
            taxSen = 13.75; break;
        case "road":
            taxJun = 20.00;
            taxSen = 21.50; break;
    }

    let money = (taxJun*juniors + taxSen*seniors)*0.95;

    console.log(money.toFixed(2));
}

bikeRace(["3","40",
    "road"
    ])