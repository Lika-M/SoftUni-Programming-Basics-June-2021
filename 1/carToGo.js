function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let clasS;
    let type;
    let prise = 0;

    if (budget <= 100) {
        clasS = "Economy class";

        switch (season) {
            case "Summer":
                type = "Cabrio";
                prise = budget * 0.35;break
            case "Winter":
                type = "Jeep";
                prise = budget * 0.65; break;
        }

    }else if(budget>100 && budget<=500){
        clasS = "Compact class";

        
        switch (season) {
            case "Summer":
                type = "Cabrio";
                prise = budget * 0.45;break
            case "Winter":
                type = "Jeep";
                prise = budget * 0.80; break;
        }

    }else if(budget>500){
        clasS = "Luxury class";
        type = "Jeep";
        prise = budget*0.90;
    }

        console.log(clasS);
        console.log(`${type} - ${prise.toFixed(2)}`);

}

carToGo(["99.99", "Summer"])