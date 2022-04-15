function footballLeague(input) {

    let capacity = Number(input[0]);
    let fans = Number(input[1]);
    let length = input.length;

    let sectors = 0;
    //let num;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;

    for (let i = 2; i < length; i++) {
        sectors = input[i];

        switch (sectors) {
            case "A": n1++; break;
            case "B": n2++; break;
            case "V": n3++; break;
            case "G": n4++; break;
        }
    }
    let fansInA = n1 / fans * 100;
    let FansInB = n2 / fans * 100;
    let fansInG = n3 / fans * 100;
    let fansInV = n4 / fans * 100;
    let allFans = fans / capacity * 100;

    console.log(`${fansInA.toFixed(2)}%`);
    console.log(`${FansInB.toFixed(2)}%`);
    console.log(`${fansInG.toFixed(2)}%`);
    console.log(`${fansInV.toFixed(2)}%`);
    console.log(`${allFans.toFixed(2)}%`);
}

footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "A", "B", "B"
    ])