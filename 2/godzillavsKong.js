function godzillavsKong(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothes = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothesPrice = clothes * people;

    if (people > 150) {
        clothesPrice = clothesPrice*0.9 
    }
    let result = budget - (decorPrice + clothesPrice);

    if (result < 0) {
        result = Math.abs(result);
        console.log("Not enough money!")
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`)
    }

}
godzillavsKong(["15437.62",
"186",
"57.99"])
