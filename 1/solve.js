function solve(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);

    let sum = 0;
    let outputNums = ""

    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            outputNums = outputNums + " " +i;

        }
    }
    console.log(sum);
    console.log(outputNums);
}
solve(["100","200"])
