function sleepyTomCat(input) {

    let holidays = Number(input[0]);
    let onWorkMins = (365 - holidays) * 63;
    let onHolidayMins = holidays * 127;

    let allMinsPerGames = onHolidayMins + onWorkMins;

    if (allMinsPerGames > 30000) {
        let hours = Math.floor((allMinsPerGames - 30000) / 60);
        let mins = (allMinsPerGames - 30000) % 60;

        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${mins} minutes more for play`);

    } else {
        let hours = Math.floor((30000 - allMinsPerGames) / 60);
        let mins = (30000 - allMinsPerGames) % 60

        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${mins} minutes less for play`)
    }
   
}
sleepyTomCat([20])