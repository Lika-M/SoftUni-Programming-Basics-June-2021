function leapYears(input) {

    let firstYear = Number(input[0]);
    let lastYear = Number(input[1]);

    for (i = firstYear; i <= lastYear; i += 4) {
        console.log(i);
    }

}
leapYears(["1584",
    "1597"])


