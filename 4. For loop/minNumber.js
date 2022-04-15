function minNumber(input) {

    let n = Number(input[0]);
    let num1 = Number(input[1]);
    let length = input.length;
    let num = 0;
    let min = num1;

    for (let i = 2; i < length; i++) {
        num = Number(input[i]);

        if (num < min) {
            num = min;
        }
    }
        console.log(min)
}
minNumber(["2",
"-1",
"-2"])








