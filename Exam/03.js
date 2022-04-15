function solve(input) {

    let team = input[0];
    let souvenir = input[1];
    let numSouvenir = Number(input[2]);
    let prise = 0;
    let isInvalidTeam = false;
    let isInvalidStock = false;
   
    switch (souvenir) {
        case "flags":
            switch (team) {
                case "Argentina": prise = numSouvenir * 3.25; break;
                case "Brazil": prise = numSouvenir * 4.20; break;
                case "Croatia": prise = numSouvenir * 2.75; break;
                case "Denmark": prise = numSouvenir * 3.10; break;
                default:isInvalidTeam = true ; break;
            } break;
        case "caps":
            switch (team) {
                case "Argentina": prise = numSouvenir * 7.20; break;
                case "Brazil": prise = numSouvenir * 8.50; break;
                case "Croatia": prise = numSouvenir * 6.90; break;
                case "Denmark": prise = numSouvenir * 6.50; break;
                default: isInvalidTeam = true; break;
            } break;
        case "posters":
            switch (team) {
                case "Argentina": prise = numSouvenir * 5.10; break;
                case "Brazil": prise = numSouvenir * 5.35; break;
                case "Croatia": prise = numSouvenir * 4.95; break;
                case "Denmark": prise = numSouvenir * 4.80; break;
                default: isInvalidTeam = true; break;
            } break;
        case "stickers":
            switch (team) {
                case "Argentina": prise = numSouvenir * 1.25; break;
                case "Brazil": prise = numSouvenir * 1.20; break;
                case "Croatia": prise = numSouvenir * 1.10; break;
                case "Denmark": prise = numSouvenir * 0.90; break;
                default: isInvalidTeam = true; break;
            } break;
        default: isInvalidStock = true;
            break;
    }
    if(isInvalidTeam){
        console.log("Invalid country!");
    } else if(isInvalidStock){
        console.log("Invalid stock!"); 
    } else {
        console.log(`Pepi bought ${numSouvenir} ${souvenir} of ${team} for ${prise.toFixed(2)} lv.`);
    }
    
}

solve(["Argentina",
"shirts",
"35"])



