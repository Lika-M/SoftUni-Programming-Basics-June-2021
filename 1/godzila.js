function godzila(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let dressPrise = Number(input[2]);

    let decor = budget * 0.10;

    let dresses = people * dressPrise;

    if (people > 150) {
        dresses = dresses * 0.90;
    }

    let costs = dresses + decor;

    if(costs > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(costs - budget).toFixed(2)} leva more.`)
    
    } else{

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - costs).toFixed(2)} leva left.`)
    }


}

godzila(["9587.88",
"222",
"55.68"])


