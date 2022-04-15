function lunchBreak (input){

    let name = input[0];
    let filmLength = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let leftTime = breakTime - (lunchTime + relaxTime);

    if(leftTime >= filmLength){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - filmLength)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(filmLength - leftTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
    "48",
    "60"
    ])