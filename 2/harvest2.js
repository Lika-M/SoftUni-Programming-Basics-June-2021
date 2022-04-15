function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let numWorkers = Number(input[3]);

    let grapeHarvest = x * y * 0.4;
    let wine = grapeHarvest / 2.5;

    if (wine < z) {
        let result = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(result)} liters wine needed.`)
    } else if (wine >= z) {
        let result = wine - z;
        let part = result / numWorkers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`)
        console.log(`${Math.ceil(result)} liters left -> ${Math.ceil(part)} liters per person.`)
    }

}

harvest([1020, 1.5, 425, 4,])