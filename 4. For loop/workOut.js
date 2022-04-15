function workOut(input) {

    let days = Number(input[0]);
    let firstDay = Number(input[1]);
    let percentage = 0;
    let nextDay = firstDay + firstDay * percentage / 100;

    let allRunning = firstDay;


    for (i = 2; i <= days + 1; i++) {
        percentage = Number(input[i]);
        nextDay += nextDay * percentage / 100;
        allRunning += nextDay;

    }
    if (allRunning >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(allRunning - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - allRunning)} more kilometers`)
    }

}
workOut(["4",
"100",
"30",
"50",
"60",
"80"])

