function sumOfTwoNumbers(input) {

    let first = Number(input[0]);
    let last = Number(input[1]);
    let magicNum = Number(input[2]);
    let count = 0;
    let isFound = false;


    for (let i = first; i <= last; i++) {
        for (let j = first; j <= last; j++) {
            count++
            if (i + j === magicNum) {
                result = `${i} + ${j}`
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${count} (${result} = ${magicNum})`);
    } else {
        console.log(`${count} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["23", "24", "20"])