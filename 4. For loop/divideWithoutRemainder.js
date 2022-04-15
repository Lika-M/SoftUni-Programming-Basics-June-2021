function divideWithoutRemainder(input) {

    let studentsNum = Number(input[0]);
    let length = input.length;
    let sum = 0;
    let num = 0;

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    for (let i = 1; i < length; i++) {
        num = Number(input[i]);
        sum = sum + num;

        if (num >= 5.00) {
            num1++;
        } else if (num > 4 && num <= 4.99) {
            num2++;
        } else if (num > 3 && num <= 3.99) {
            num3++;
        } else if (num > 2 && num <= 2.99) {
            num4++;
        }
    }
}

console.log(`Top students: ${(num1 / studentsNum * 100).toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${(num2 / studentsNum * 100).toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${(num3 / studentsNum * 100).toFixed(2)}%`);
console.log(`Fail: ${(num4 / studentsNum * 100).toFixed(2)}%`);
console.log(`Average: ${(sum / studentsNum*100).toFixed(2)}`);

divideWithoutRemainder(["3",
"3",
"6",
"9"])
