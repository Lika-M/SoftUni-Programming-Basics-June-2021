function darts(input) {

    let gamerName = input[0];
    let i = 1;
    let income = input[i];
    let shot1 = 0;
    let shot2 = 0;
    let startPoints = 301;
    let strike = 0;

    while (income !== "Retire") {
        let sector = income; 
        i++;
        let points = Number(input[i]);

        switch (sector) {
            case "Single": strike = points; break;
            case "Double": strike = points * 2; break;
            case "Triple": strike = points * 3; break;   
        }
        if(strike < startPoints){
            shot1++;
            startPoints -= strike;
        } else if (strike === startPoints) {
            shot1++;
            break;
        } else if(strike > startPoints) {
            shot2++
            i++;
            income = input[i];  
            continue;
        }
        i++;
        income = input[i];  
    }
    if(income === "Retire"){
        console.log(`${gamerName} retired after ${shot2} unsuccessful shots.`)
     } else {
         console.log(`${gamerName} won the leg with ${shot1} shots.`)
     }
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])



