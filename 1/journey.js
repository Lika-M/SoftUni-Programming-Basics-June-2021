function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let prise = 0;

    if (budget <= 100) {
        switch (season) {
            case "summer": prise = budget * 0.3;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${prise.toFixed(2)}`); break;

            case "winter": prise = budget * 0.7;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${prise.toFixed(2)}`); break;
        }

    } else if (budget <= 1000) {
        switch (season) {
            case "summer": prise = budget * 0.4;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${prise.toFixed(2)}`); break;

            case "winter": prise = budget * 0.8;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${prise.toFixed(2)}`); break;
        }
    } else if (budget > 1000) {
        prise = budget * 0.9;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${prise.toFixed(2)}`); 
    }

}

journey(["1500", "summer"])

_