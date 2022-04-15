function divisionWithoutRemainder(input) {

    let i = 0;
    let n = Number(input[i]);
    i++;
    let number = Number(input[i]);
    i++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (i <= n + 1) {
        if (number % 2 === 0) {
            p1++;
        }
        if (number % 3 === 0) {
            p2++;
        }
        if (number % 4 === 0) {
            p3++;
        }
        number = Number(input[i]);
        i++;
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
}

divisionWithoutRemainder(["3",
"3",
"6",
"9"])

