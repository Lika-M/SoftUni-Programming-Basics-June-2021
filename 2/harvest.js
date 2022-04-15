function harvest(input) {

    let x = Number(input[0]) * 0.4;
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let grape = x * y
    let wine = grape / 2.5;

    if (wine < z) {
        let diff = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    } else {
        let diff = wine - z;
        console.log(`Good harvest this year! Total wine: ${wine} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workers)} liters per person.`)
    }
}

harvest([650, 2, 175, 3])

