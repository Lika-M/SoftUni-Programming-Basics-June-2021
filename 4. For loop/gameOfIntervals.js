function GameOfIntervals(input) {

    let steps = Number(input[0]);
    let num = 0;
    let sum = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;

    for (let i = 1; i <= steps; i++) {
        num = Number(input[i]);

        if (num >= 0 && num <= 9) {
            sum = sum + num * 0.20;
            n1++;
        } else if (num >= 10 && num <= 19) {
            sum = sum + num * 0.30;
            n2++;
        } else if (num >= 20 && num <= 29) {
            sum = sum + num * 0.40;
            n3++;
        } else if (num >= 30 && num <= 39) {
            sum = sum + 50;
            n4++;
        } else if (num >= 40 && num <= 50) {
            sum = sum + 100;
            n5++;
        } else {
            sum = sum / 2;
            n6++;
        }
    }
    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${(n1 / steps*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(n2 / steps*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(n3 / steps*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(n4 / steps*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(n5 / steps*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(n6 / steps*100).toFixed(2)}%`);


}
GameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])