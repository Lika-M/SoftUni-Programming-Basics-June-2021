function dartsTournament(input) {

    let startPoints = Number(input[0]);

    let count = 0;

    let i = 1;
    let income = input[i];

    while (income !== "bullseye") {
        let sector = input[i];
        i++;
        let poits = Number(input[i]);
        count++;

        switch (sector) {
            case "number section": startPoints -= poits; break;
            case "double ring": startPoints -= poits * 2; break;
            case "triple ring": startPoints -= poits * 3; break;
            
        }

        if (startPoints === 0) {
            break;
        } else if (startPoints < 0) {
           break;
        }

        i++;
        income = input[i]
    }

    if(startPoints === 0){
        console.log(`Congratulations! You won the game in ${count} moves!`);

    } else if(income === "bullseye"){
        console.log(`Congratulations! You won the game with a bullseye in ${count+1} moves!`)
    } else if(startPoints < 0){
        console.log(`Sorry, you lost. Score difference: ${Math.abs(startPoints)}.`)
    }

}
dartsTournament(["101",
    "triple ring",
   "7",
    "double ring",
    "19",
    "bullseye" 
    ])