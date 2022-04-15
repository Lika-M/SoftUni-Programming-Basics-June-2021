function foodForPets(input) {

    let daysNum = Number(input[0]);
    let allFood = Number(input[1]);

    let dogFood = 0;
    let catFood = 0;
    let biscuit = 0;
    // let length = input.length; Итерация с булева length ми дава грешка!

    for (let i = 2; i <= daysNum*2; i += 2) {
        let food1 = Number(input[i]);
        let food2 = Number(input[i + 1]);

        dogFood += food1;
        catFood += food2;

        if (i % 3 === 0) {
            let biscuitPerDay = (food1 + food2) * 0.1
            biscuit += biscuitPerDay;
        }
    }
    let eatenFood = dogFood + catFood;

    console.log(`Total eaten biscuits: ${Math.round(biscuit)}gr.`)
    console.log(`${(eatenFood / allFood * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(dogFood / eatenFood * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${(catFood / eatenFood * 100).toFixed(2)}% eaten from the cat.`)
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"])

