function worldSwimmingRecord(input) {

    let timeRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let timeIvan = distance * timePerMeter;
    let delay = Math.floor(distance / 15)*12.5;
    let result = timeIvan + delay;


    if (result < timeRecord) {

        console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${(result- timeRecord).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])