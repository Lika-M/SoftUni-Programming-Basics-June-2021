function sumSeconds(input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeTird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeTird;
    let minits = Math.floor(totalTime / 60);
    let seconsds = totalTime % 60;

if (seconsds<10){
    console.log(`${minits}:0${seconsds}`);
}else{
    console.log(`${minits};${seconsds}`);
}
}

sumSeconds(["22", "7", 
"34"])
