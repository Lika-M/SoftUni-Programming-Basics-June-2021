function fooodForPets(input) {

    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let eatenDog = 0;
    let eatenCat = 0;
    let biscuitsAll = 0;
    let i = 2;

    for (i = 2; i <= days * 2; i++) {

        let dogFood = Number(input[i]);
        i++;
        let catFood = Number(input[i]);
        let biscuits = 0;

        if ((i - 1) % 3 === 0) {
            biscuits = (dogFood + catFood) * 0.1;
        }
        eatenDog += dogFood;
        eatenCat += catFood;
        biscuitsAll += biscuits;
    }
    let allEatenFood = eatenDog + eatenCat;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsAll)}gr.`);
    console.log(`${(allEatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eatenDog / allEatenFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatenCat / allEatenFood * 100).toFixed(2)}% eaten from the cat.`);
}
fooodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
