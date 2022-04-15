function series(input) {

    let i = 0;
    let budget = Number(input[i]);
    i++;
    let n = Number(input[i]);
    i++;

    let name = input[i];
    i++;
    let prise = Number(input[i]);
    i++;
    let totalPrise = 0;
    while (i <= n*2 + 2) {
        switch (name) {
            case "Thrones": totalPrise += prise * 0.50; break;
            case "Lucifer": totalPrise += prise * 0.60; break;
            case "Protector": totalPrise += prise * 0.70; break;
            case "TotalDrama": totalPrise += prise * 0.80; break;
            case "Area": totalPrise += prise * 0.90; break;
            default: totalPrise +=prise; break;
        }
        name = input[i];
        i++;
        prise = Number(input[i]);
        i++;
    }
    let diff = Math.abs(budget - totalPrise);
    
    if(budget >= totalPrise){
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
       
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`)
    }
}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

