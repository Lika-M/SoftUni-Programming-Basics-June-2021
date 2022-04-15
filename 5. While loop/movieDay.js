function movieDay(input){

    let time = Number(input[0]);
    let numOfScenes = Number(input[1]);
    let sceneDuration = Number(input[2]);
    
    let prepare = time*15/100;
    let movie = numOfScenes*sceneDuration;
    let neededTimes = prepare + movie;

    if(neededTimes<=time){
        let result = Math.round(time-neededTimes);
        console.log(`You managed to finish the movie on time! You have ${result} minutes left!`)
    }else{
        result = Math.round(neededTimes-time);
        console.log(`Time is up! To complete the movie you need ${result} minutes.`)
    }
}

movieDay(["60",
"15",
"3"])

