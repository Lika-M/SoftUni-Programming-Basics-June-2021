function lunchBreak(input) {

    let nameOfMuvie = input[0];
    let timeOfEpisode = Number(input[1]);
    let longOfRest = Number(input[2]);

    let timeToLunch = longOfRest / 8;
    let timeToRest = longOfRest / 4;
    let needTime = longOfRest - (timeToLunch + timeToRest);

    if (nameOfMuvie === "Game of Thrones") {
        if (needTime >= timeOfEpisode) {
            let result = Math.ceil(needTime - timeOfEpisode);
            console.log(`You have enough time to watch ${nameOfMuvie} and left with ${result} minutes free time.`);
        } else {
            let result = Math.ceil(timeOfEpisode - needTime);
        console.log(`You don't have enough time to watch ${nameOfMuvie}, you need ${result} more minutes.`)
        }

    } else {
       if (needTime >= timeOfEpisode) {
        let result = Math.ceil(needTime - timeOfEpisode);
    console.log(`You have enough time to watch ${nameOfMuvie} and left with ${result} minutes free time.`);
    } else {
        let result = Math.ceil(timeOfEpisode - needTime);
    console.log(`You don't have enough time to watch ${nameOfMuvie}, you need ${result} more minutes.`)
    }
} 

}

lunchBreak(["Teen Wolf", 48, 60])