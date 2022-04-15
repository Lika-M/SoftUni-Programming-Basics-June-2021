function easterBake(input) {

    let cakes = Number(input[0]);
    // let length = Number(input.length);
//  Итерация с булев length ми дава грешка!
    let shugar = 0;
    let flour = 0;

    let sh2 = 0;
    let fl2 = 0;

    for (let i = 1; i < cakes*2; i += 2) {
        let sh = Number(input[i]);
        let fl = Number(input[i + 1]);
        shugar += sh;
        flour += fl;

        if(sh > sh2){
            sh2 = sh;
        }
        if(fl > fl2){
            fl2 = fl;
        }
    }
    let numShugar = shugar / 950;
    let numFlour = flour / 750;

    console.log(`Sugar: ${Math.ceil(numShugar)}`);
    console.log(`Flour: ${Math.ceil(numFlour)}`);
    console.log(`Max used flour is ${fl2} grams, max used sugar is ${sh2} grams.`)
}

easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380",
    // "578",
    // "543"
])

